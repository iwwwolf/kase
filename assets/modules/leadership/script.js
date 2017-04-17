//======== табы руководства

if($('#leadership').length) {
	$('#leadership .title a').on('click', function(e){
		$('html, body').animate({
				scrollTop: $('.breadcrumbs').offset().top
		}, 500);
		var target = $($(this).attr('href'));
		var parent = $(this).parents('.leadership__nav-item');
		e.preventDefault();

		if((mobile && winWidth <= 991) || winWidth <= 991) {
			if(!parent.hasClass('active')){
				$('#leadership .leadership__nav-item.active').removeClass('active');
				$('#leadership .leadership__tab-pane.active').removeClass('active').slideUp();
				parent.addClass('active');
				target.addClass('active').slideDown();
			} else {
				parent.removeClass('active');
				target.slideUp().removeClass('active');
			}
		} else {
			$('#leadership .leadership__nav-item').each(function(index, obj){
				if(!parent.hasClass('active')){
					$('#leadership .leadership__nav-item.active').removeClass('active');
					$('#leadership .leadership__tab-pane.active').removeClass('active').fadeOut(function(){
						target.addClass('active').fadeIn();
					});
					parent.addClass('active');
				} else {
					return false;
				}
			});
		}

		//parent
	});
	if(winWidth >= 992) {
		$('#leadership .leadership__nav-item').each(function(index, obj){
			if(index == 0) {
				//console.log($(this))
				$($(this).find('.title a').attr('href')).fadeIn().addClass('');
				$(this).addClass('active');
			}
		});
	}
};

//===== конец