$(document).ready(function(){
    AOS.init();

    //habilita o menu
    $('.PrimaryContent_Container_ButtonMenuMobile').click(function(){
        $('.Site_Header_Container_SecundaryContent').addClass('__is-active');
    });

    $('.CloseMenuMobile, .Container_Menu_Item').click(function(){
        $('.Site_Header_Container_SecundaryContent').removeClass('__is-active');
    });

    //Manipula as dúvidas frequentes
    $(".Container_Pergunta_Item").click(function () {
        var faq = $(this);
        $('.Container_Pergunta_Item').removeClass('__is-active');
        faq.addClass('__is-active');
    });

    //Scroll

    $( ".scrollLink" ).click(function() {
        animacaoScroll($(this));
    });

    function animacaoScroll(element){
        if($(window).width() > 768){
            $("html, body").animate({ scrollTop: $($(element).attr("data-scrollto")).offset().top - 0}, 500);
        }
        if($(window).width() <= 768 && $(window).width() > 600){
            $("html, body").animate({ scrollTop: $($(element).attr("data-scrollto")).offset().top - 0}, 500);
        }
        if($(window).width() <= 600 && $(window).width() > 480){
            $("html, body").animate({ scrollTop: $($(element).attr("data-scrollto")).offset().top - 0}, 500);
        }
        if($(window).width() <= 480){
            $("html, body").animate({ scrollTop: $($(element).attr("data-scrollto")).offset().top - 0}, 500);
        }
    }

    $('.Site_SlideKim_Container').slick({
        initialSlide: 0,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 5000,
        // variableWidth: false,
        arrows: true,
        infinite: true,
        swipe: true,
        dots: true,
        prevArrow: '<div class="slick-arrow slick-prev"><i class="fas fa-chevron-left"></i></div>',
        nextArrow: '<div class="slick-arrow slick-next"><i class="fas fa-chevron-right"></i></div>',
        cssEase: 'linear',
        responsive: [
            {
                breakpoint: 1320,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    swipeToSlide: true,
                }
            },
            {
                breakpoint: 960,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    swipeToSlide: true,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    swipeToSlide: true,
                }
            },
            {
                breakpoint: 550,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    swipeToSlide: false,
                }
            }
        ]
    });
})