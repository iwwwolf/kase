$('#searchBtn').on('click', function(e){
	e.preventDefault();
	if(!$(this).hasClass('active')){
		$(this).addClass('active');
		$('#headerSearch').slideDown();
	} else {
		$(this).removeClass('active');
		$('#headerSearch').slideUp();
	}
})