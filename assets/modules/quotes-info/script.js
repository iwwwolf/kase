$('.quotes-info__arrow').on('click', function(e){
	e.preventDefault();
	if(!$(this).hasClass('reverse')){
		$(this).addClass('reverse');
		$(this).parent().children('.text').text('Лидеры падения');
	} else {
		$(this).removeClass('reverse');
		$(this).parent().children('.text').text('Лидеры роста');
	}
});