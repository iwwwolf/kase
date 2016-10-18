if(winWidth >= 992) {
	var headerHeight = $('#header').outerHeight();

	$('body').append('<style>.great-slider__item:after{top: ' + headerHeight + 'px;}</style>');

}
if($('#greatSlider').length){
	var greatSlider = new Swiper ('#greatSlider', {
    	//direction: 'vertical',
    	effect: 'fade',
    	speed: 400,
    	autoheight: true,
    	slidesPerView: 1,
    	autoplay: 4000,
    	loop: true,
    	simulateTouch: true,
    	pagination: '#greatSliderPages',
    	nextButton: '#greatSliderNext',
    	prevButton: '#greatSliderPrev',
    	paginationHide: false,
    	paginationClickable: true,
    	runCallbacksOnInit: true
	});
}