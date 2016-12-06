if($('.list-slider').length){
	$(".list-slider").each(function(index, element){
		var $this = $(this);
		var homeNews = new Swiper ($this, {
	    	loop: false,
	    	speed: 400,
	    	autoheight: true,
	    	slidesPerView: 4,
	    	autoplay: false,
	    	pagination: $this.parent().find('.home-news__pagination'),
	    	paginationHide: false,
	    	paginationClickable: true
		});
	});
}