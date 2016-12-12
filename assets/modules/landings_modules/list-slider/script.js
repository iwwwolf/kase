if($('#listSlider').length){
	var listSlider = $('#listSlider');
	var listSliderCount = $('#listSlider .list-slider__item').length;

	if(winWidth >= 992){
		if(listSliderCount < 4) {
			listSlider.slick({
				speed: 500,
				slidesToShow: listSliderCount,
				slidesToScroll: 1,
				dots: true,
				//dotsClass: 'great-slider__pagination',
				infinite: false,
				arrows: true,
				prevArrow: $('#listSliderPrev'),
				nextArrow: $('#listSliderNext'),
				autoplay: false,
				adaptiveHeight: true
			});
		} else {
			listSlider.slick({
				speed: 500,
				slidesToShow: 4,
				slidesToScroll: 4,
				dots: true,
				//dotsClass: 'great-slider__pagination',
				infinite: false,
				arrows: true,
				prevArrow: $('#listSliderPrev'),
				nextArrow: $('#listSliderNext'),
				autoplay: false,
				adaptiveHeight: true
			});
		}
	} else {
		listSlider.slick({
			slidesToShow: 1,
			slidesToScroll: 1,
			speed: 500,
			dots: true,
			//dotsClass: 'great-slider__pagination',
			autoplay: false,
			infinite: false,
			arrows: false,
			adaptiveHeight: true,
			responsive: [
			    {
			      breakpoint: 991,
			      settings: {
			        slidesToShow: 3,
			        slidesToScroll: 3,
			        speed: 500,
        			dots: true,
        			//dotsClass: 'great-slider__pagination',
        			autoplay: false
			      }
			    },
			    {
			      breakpoint: 768,
			      settings: {
			        slidesToShow: 2,
			        slidesToScroll: 2,
			        speed: 500,
        			dots: true,
        			//dotsClass: 'great-slider__pagination',
        			autoplay: false
			      }
			    },
			    {
			      breakpoint: 540,
			      settings: {
			        slidesToShow: 1,
			        slidesToScroll: 1,
			        speed: 500,
        			dots: true,
        			//dotsClass: 'great-slider__pagination',
        			autoplay: false
			      }
			    }
		    ]
		});
	}
}