// Бургер
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

// Видео плеер
$(document).ready(function () {
    $('.header__play').click(function (event) {
        $('.header__bg,.header__bg2,.header__vid-text').addClass('dispnone');
        $(this).css('display', 'none');
        $('video').trigger('play');
        $('.header__pause').css('display', 'block');
    });
});

$(document).ready(function () {
    $('.header__pause').click(function (event) {
        $('.header__bg,.header__bg2,.header__vid-text').removeClass('dispnone');
        $(this).css('display', 'none');
        $('video').trigger('pause');
        $('.header__play').css('display', 'block');
    });
});

// слайдер

$(document).ready(function () {
    $('.meet__slider').slick({

        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3
    });
});
