if(mobile) {
	if($('.home-news__list').length){
		$(".home-news__list").each(function(index, element){
			var $this = $(this);
			var homeNews = new Swiper ($this, {
		    	loop: false,
		    	speed: 400,
		    	autoheight: true,
		    	slidesPerView: 1,
		    	autoplay: false,
		    	pagination: $this.parent().find('.home-news__pagination'),
		    	paginationHide: false,
		    	paginationClickable: true
			});
		});
	}
}