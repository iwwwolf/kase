/* табы валют */

$("#currencyTabs .currency-tabs__item a").click(function(e) {
	var parent = $('#currencyTabs');
	e.preventDefault();
	parent.find('.currency-tabs__item > .active').removeClass('active');
	console.log(parent.find('.currency-tabs__item'))
	$(this).parent().addClass("active");
});

/* слайдер валют на мобильных устройствах */

if($('#currencyTabs').length){
	$('#currencyTabs').slick({
		slidesToShow: 2,
		slidesToScroll: 1,
		mobileFirst: true,
		infinite: false,
		dots: true,
		arrows: false,
		dotsClass: 'currency-tabs__pagination',
		responsive: [
		    {
		      breakpoint: 450,
		      settings: {
		        slidesToShow: 3
		      }
		    },
		    {
		      breakpoint: 600,
		      settings: {
		        slidesToShow: 4
		      }
		    },
		    {
		      breakpoint: 850,
		      settings: {
		        slidesToShow: 5
		      }
		    }
	    ]
	});
}