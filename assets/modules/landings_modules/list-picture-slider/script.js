var windowSizeSlider = $( window ).width();
if(windowSizeSlider >= 768){
 	$("#listPictureSlider0").click(function() {
		$(this).attr('data-event-clicked','true');
        $('.list-picture-slider a').addClass('active');
        $('.slider-go-back-button').css("display","block");
        $('.investors_landing.slider_landing .slick-dots').css("display","none");
        $('.investors_landing.slider_landing .slick-arrow').css("display","none");
        $('.investors_landing.slider_landing .slick-next').css("display","none");
        $('.investors_landing.slider_landing .slick-prev').css("display","none");
        $('.slider-bottom-links-listing-case').css("display","block");
        $(' #listPictureSlider1').css("display","none");
        $(' #listPictureSlider2').css("display","none");

	});
	 $("#SliderGoBackButton").click(function() {
	 		 $(this).attr('data-event-clicked','false');
            $('.list-picture-slider a').removeClass('active');
            $('.slider-go-back-button').css("display","none");
            $('.investors_landing.slider_landing .slick-dots').css("display","block");
            $('.investors_landing.slider_landing .slick-arrow').css("display","block");
            $('.investors_landing.slider_landing .slick-next').css("display","block");
            $('.investors_landing.slider_landing .slick-prev').css("display","block");
            $('.investors_landing.slider_landing .slider-bottom-links-listing-case').css("display","none");
            $(' #listPictureSlider0').css("display","block");
            $(' #listPictureSlider1').css("display","block");
            $(' #listPictureSlider2').css("display","block");
     });


	$("#listPictureSlider1").click(function() {
	  
	    $(this).attr('data-event-clicked','true');
	    $('.list-picture-slider a').addClass('active');
	    $('.slider-go-back-button').css("display","block");
	    $('.investors_landing.slider_landing .slick-dots').css("display","none");
	    $('.investors_landing.slider_landing .slick-arrow').css("display","none");
	    $('.investors_landing.slider_landing .slick-next').css("display","none");
	    $('.investors_landing.slider_landing .slick-prev').css("display","none");
	    $('.slider-bottom-links-listing-case').css("display","block");
	    $(' #listPictureSlider0').css("display","none");
		$(' #listPictureSlider2').css("display","none");

	       

	 });
	$("#listPictureSlider2").click(function() {
	    $(this).attr('data-event-clicked','true');
	    $('.list-picture-slider a').addClass('active');
	    $('.slider-go-back-button').css("display","block");
	    $('.investors_landing.slider_landing .slick-dots').css("display","none");
	    $('.investors_landing.slider_landing .slick-arrow').css("display","none");
	    $('.investors_landing.slider_landing .slick-next').css("display","none");
	    $('.investors_landing.slider_landing .slick-prev').css("display","none");
	    $('.slider-bottom-links-listing-case').css("display","block");
	    $(' #listPictureSlider0').css("display","none");
		$(' #listPictureSlider1').css("display","none");
	           
	        
	 });

}
else{
	$('.investors_landing.slider_landing .slick-next').css("display","none");
    $('.investors_landing.slider_landing .slick-prev').css("display","none");
	

	$(".list-picture-slider#listPictureSlider0").on("click",function(e){
		if($(this).hasClass("active")){
			 $('.list-picture-slider').removeClass('active');
			 $('.list-picture-slider__link0').css("display","none");
		}
		else{
			 $('.list-picture-slider').addClass('active');
			 $('.list-picture-slider__link0').css("display","block");
		}

	});
	$(".list-picture-slider#listPictureSlider1").on("click",function(e){
		if($(this).hasClass("active")){
			 $('.list-picture-slider').removeClass('active');
			 $('.list-picture-slider__link1').css("display","none");
		}
		else{
			 $('.list-picture-slider').addClass('active');
			 $('.list-picture-slider__link1').css("display","block");
		}

	});
	$(".list-picture-slider#listPictureSlider2").on("click",function(e){
		if($(this).hasClass("active")){
			 $('.list-picture-slider').removeClass('active');
			 $('.list-picture-slider__link2').css("display","none");
		}
		else{
			 $('.list-picture-slider').addClass('active');
			 $('.list-picture-slider__link2').css("display","block");
		}

	});
}
