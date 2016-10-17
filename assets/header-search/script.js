$('#searchBtn').on('click', function(e){
	e.preventDefault();
	if(!$(this).hasClass('active')){
		$(this).addClass('active');
		$('#headerSearch').fadeIn();
	} else {
		$(this).removeClass('active');
		$('#headerSearch').fadeOut();
	}
})