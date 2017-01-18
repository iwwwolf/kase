/* раскрывающиеся блоки страницы */
if($('.accordion').length){
	$('.accordion.closed').each(function(index, el){
		$(el).find('.accordion__body').slideUp();
	});
}
$(document).on('click', '.accordion__head-link', function( e ){
	var parent = $(this).parents('.accordion');
	var target = parent.find('.accordion__body');
	e.preventDefault();
	if(!parent.hasClass('closed')){
		parent.addClass('closed');
		target.slideUp();
	} else {
		parent.removeClass('closed');
		target.slideDown();
	}
});


/* аккордион с якорями */

$('#anchors a').on('click', function(e){
	var parent = $(this).parent();
	var target = $($(this).attr('href'));
	var topPos = target.offset().top;
	e.preventDefault();
	if(!parent.hasClass('active')) {
		parent.parent().find('.active').removeClass('active');
		parent.addClass('active');
	}
	if(target.hasClass('closed')) {
		target.removeClass('closed');
		target.find('.accordion__body').slideDown();
	}
	$('html, body').animate({scrollTop : topPos});
});
