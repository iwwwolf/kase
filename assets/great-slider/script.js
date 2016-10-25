if($('#greatSlider').length){
    /*if(winWidth >= 992) {
    	var headerHeight = $('#header .header__container').outerHeight();

    	$('body').append('<style>.great-slider__item:after{top: ' + headerHeight + 'px;}</style>');

    }*/
    /*var greatSlider = new Swiper ('#greatSlider', {
        direction: 'vertical',
        //spaceBetween: 0,
        //effect: 'fade',
        //preloadImages: false,
        //lazyLoading: true,
        //speed: 400,
        autoheight: true,
        slidesPerView: 2,
        //autoplay: 4000,
        //loop: true,
        //simulateTouch: false,
        pagination: '#greatSliderPages',
        nextButton: '#greatSliderNext',
        prevButton: '#greatSliderPrev',
        //paginationHide: false,
        paginationClickable: true
        //runCallbacksOnInit: true
    });*/

    if(mobile){
        $('#greatSlider .great-slider__wrapper').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            mobileFirst: true,
            dots: true,
            arrows: false,
            dotsClass: 'great-slider__pagination'
        });
    } else {
        $('#greatSlider .great-slider__wrapper').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            vertical: true,
            prevArrow: $('#greatSliderPrev'),
            nextArrow: $('#greatSliderNext'),
            dots: true,
            dotsClass: 'great-slider__pagination'
        });
    }
}