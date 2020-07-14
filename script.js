document.addEventListener("DOMContentLoaded", function () {

    let myMap;

// Дождёмся загрузки API и готовности DOM.
    ymaps.ready(init);

    function init() {
        // Создание экземпляра карты и его привязка к контейнеру с
        // заданным id ("map").
        if (!document.getElementById('map')) {
            return;
        }
        myMap = new ymaps.Map('map', {
            // При инициализации карты обязательно нужно указать
            // её центр и коэффициент масштабирования.
            center: [55.76, 37.64], // Москва
            zoom: 10
        }, {
            searchControlProvider: 'yandex#search'
        });

        const btn = document.getElementById('destroyButton');
        if (btn) {
            btn.onclick = function () {
                // Для уничтожения используется метод destroy.
                myMap.destroy();
            };
        }

    }

    const headerNav = document.querySelector('.header__nav');
    const menuBtn = document.querySelector('.header__toggle');

    menuBtn.addEventListener('click', function () {
        if (headerNav.classList.contains('header__nav--close')) {
            headerNav.classList.remove('header__nav--close');
            headerNav.classList.add('header__nav--open');
            menuBtn.classList.remove('header__toggle--close');
            menuBtn.classList.add('header__toggle--open');
        } else {
            headerNav.classList.remove('header__nav--open');
            headerNav.classList.add('header__nav--close');
            menuBtn.classList.remove('header__toggle--open');
            menuBtn.classList.add('header__toggle--close');
        }
    })
})
