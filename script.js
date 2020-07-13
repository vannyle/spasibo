document.addEventListener("DOMContentLoaded", function () {
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
