'use strict';
const input = document.querySelector('.input'),
    text = document.querySelector('#text');


function debounce(func, time) {
    let timeout,
        immediate = false;

    return function executedFunction() {
        // Сохраняем контекст this и переданные параметры
        const context = this;
        const args = arguments;

        // Функция, вызываемая по истечению времени debounce.
        const later = function() {
            timeout = null;

            // Вызываем функцию, если immediate !== true,
            if (!immediate) func.apply(context, args);
        };

        // clearTimeout сбрасывает ожидание при каждом выполнении функции.
        clearTimeout(timeout);

        // Перезапускаем период ожидания debounce.
        timeout = setTimeout(later, time);
    };
}

const logger = debounce(() => {
    text.textContent = input.value;
}, 1000);

input.addEventListener('keyup', logger);
