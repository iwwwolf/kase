if ($('#greatSlider-events').length) {
	var greatSlider = $('#greatSlider-events .great-slider-events__wrapper');
	if (mobile) {
		greatSlider.slick({
			slidesToShow: 1,
			slidesToScroll: 1,
			mobileFirst: true,
			dots: true,
			arrows: false,
			fade: true,
			dotsClass: 'great-slider-events__pagination'
		});
	} else {
		var slideSettings = {
			easing: 'ease',
			speed: 900,
			slidesToShow: 1,
			slidesToScroll: 1,
			arrows: false,
			fade: true,
			infinite: true,
			dots: true,
			dotsClass: 'great-slider-events__pagination',
			autoplay: true,
			autoplaySpeed: 3000,
			waitForAnimate: false
		};
		greatSlider.on('init', function (event, slick) {
			greatSlider.find('.great-slider-events__pagination').append('<li><span id="pauseBtn" class="great-slider-events__pause-link fa"></span></li>');
		}).slick(slideSettings);

		$(window).on('resize', function () {
			setTimeout(function () {
				var currentSlide = greatSlider.slick('slickCurrentSlide');

				greatSlider
					.slick('unslick')
					.slick(slideSettings)
					.slick('slickGoTo', currentSlide);
			}, 1000);
		});
	}
	$('#pauseBtn').on('click', function (e) {
		e.preventDefault();
		if ($(this).hasClass('paused')) {
			$(this).removeClass('paused');
			greatSlider.slick('slickPlay');
		} else {
			$(this).addClass('paused');
			greatSlider.slick('slickPause');
		}
	});
}