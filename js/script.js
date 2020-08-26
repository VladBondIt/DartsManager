$(document).ready(function () {
    // При КЛИКЕ на блок .block__title происходит функция ↓↓
    $('.block__title').click(function (event) {
        // Описание функции
        // Именно на нажамот загаловке .block__title добавляем переключатель-блок active
        // с помощью next мы добавляем анимацию слайда переключателся slideToggle со скоростью 300 мили секунд;
        $(this).toggleClass('active').next().slideToggle(300);
        // Если блок .block имеет блок-класс one тогда происходит функция ↓↓
        if ($('.block').hasClass('one')) {
            // У все блоков .block__title кроме нажатого not(this) убираем класс active;
            $('.block__title').not($(this)).removeClass('active');
            // Скрываем все блоки с текстом .block__text при нажатии на следующий(not(this)(next)) .block__text
            // предыдущий сворачивается вверх со скоросью 300мс slideUp(300);
            $('.block__text').not($(this).next()).slideUp(300);
        }
    });
});