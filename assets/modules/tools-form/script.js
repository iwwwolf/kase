// ===== раскрытие фильтра

$('#allFilter').on('click', function(e){
	e.preventDefault();
	if($(this).hasClass('active')) {
		$(this).removeClass('active').text('Раскрыть фильтр');
		$('#hiddingTools').slideUp();
	} else {
		$(this).addClass('active').text('Скрыть фильтр');
		$('#hiddingTools').slideDown();
	}
});