if($('#greatSlider').length){
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