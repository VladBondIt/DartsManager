$(document).ready(function () {
    $('.header__burger').click(function (event) {
        $('.header__burger,.header__menu').toggleClass('active');
        $('body').toggleClass('lock');
    });
});

$(document).ready(function () {
    // При КЛИКЕ на блок .block__title происходит функция ↓↓
    $('.service__spoiler').click(function (event) {
        // Описание функции
        // Именно на нажамот загаловке .block__title добавляем переключатель-блок active
        // с помощью next мы добавляем анимацию слайда переключателся slideToggle со скоростью 300 мили секунд;
        $(this).next().slideToggle(300).css('display', 'flex');
    });
});