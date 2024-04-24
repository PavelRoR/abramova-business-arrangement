$(document).ready(function() {
    /* Якорь */
    $("a[href^='#']").click(function (h) {
        h.preventDefault();
        var f = $(this).attr("href"),
            g = $(f).offset().top;
        $("body,html").animate({
            scrollTop: g
        }, 1500)
        if($('.header-menu').hasClass('nav-active')) {
            mobMenu.removeClass('fixed');
            headNav.removeClass('nav-active');
            mml1.removeClass('switched');
            mml2.removeClass('switched');
            mml3.removeClass('switched');
        }
    });
    // Мобильное меню
    var mobMenu = $('.mobile-menu'),
    headNav = $('.header-menu'),
    mml1 = $('.mobile-menu-line-1'),
    mml2 = $('.mobile-menu-line-2'),
    mml3 = $('.mobile-menu-line-3');

mobMenu.on('click', function () {
    if (!headNav.hasClass('nav-active')) {
        mobMenu.addClass('fixed');
        headNav.addClass('nav-active');
        mml1.addClass('switched');
        mml2.addClass('switched');
        mml3.addClass('switched');
    } else {
        mobMenu.removeClass('fixed');
        headNav.removeClass('nav-active');
        mml1.removeClass('switched');
        mml2.removeClass('switched');
        mml3.removeClass('switched');
        // $('.header-menu li a').click(function(){
           
        // })
    }
});

// Списки
$('.plan-block-title').on('click', function(){
    var plt = $(this);
    if (!plt.hasClass('active')){
        plt.addClass('active');
        plt.next().slideDown(500)
    }
    else {
        plt.removeClass('active');
        plt.next().slideUp(500)
    }
});

    // слайдер с текстовыми отзывами
    $('.revs-slider-text').slick({
        autoplay: false,
        autoplaySpeed: 3000,
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: 0,
        loop: false,
        dots: 0,
        speed: 300,
        arrows: true,
        centerPadding: '30px',
        adaptiveHeight: true,
        centerMode: 0,
        responsive: [
            {
            breakpoint: 651,
            settings: {
                slidesToShow: 1
            }
        }]
    });

    // модалка
    $(['data-fancybox']).fancybox();
/*Конец документа*/
});