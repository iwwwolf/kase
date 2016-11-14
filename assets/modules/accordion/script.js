/* раскрывающиеся блоки страницы */
if($('.accordion').length){
	$('.accordion.closed').each(function(index, el){
		$(el).find('.accordion__body').slideUp();
	});
}
$('.accordion__head-link').on('click', function(e){
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