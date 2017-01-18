//======== табы руководства

if($('#leadership').length) {
	$('#leadership .title a').on('click', function(e){
		var target = $($(this).attr('href'));
		var parent = $(this).parents('.leadership__nav-item');
		e.preventDefault();

		if(mobile || winWidth <= 991) {
			if(!parent.hasClass('active')){
				$('#leadership .leadership__nav-item.active').removeClass('active');
				$('#leadership .leadership__tab-pane.active').removeClass('active').slideUp();
				parent.addClass('active');
				target.addClass('active').slideDown();
			} else {
				parent.removeClass('active');
				target.slideUp().removeClass('active');
			}
		}

		//parent
	});
}

//===== конец