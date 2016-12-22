$('#whiteBlockSlider').slick({


	slidesToShow: 1,
  	slidesToScroll: 1,
  	dots: true,
  	customPaging: function(slider, index) {
      // this example would render "tabs" with titles
       return '<a>' + 'Шаг ' + (index + 1) + '</a>';
    },
    speed: 500,
	autoplay: false
});