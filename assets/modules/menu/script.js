if(!mobile){
	$('#menu .menu__container').css({overflow: 'hidden'});
}
$('#menuBtn').on('click', function(e){
	e.preventDefault();
	if($('#greatSlider').length){
		greatSlider.slick('slickPause');
	}
	$('#menu').fadeIn(600);
	$('#wrap').addClass('scale-out');
	if(!mobile) {
		setTimeout(function(){
			if((getInternetExplorerVersion()!==-1)){
				$('body').css({overflow: 'hidden', paddingRight: '0'})
			} else {
				$('body').css({overflow: 'hidden', paddingRight: '17px'})
			}
			$('#menu .menu__container').css({overflow: 'auto'});
		}, 200);
	} else {
		setTimeout(function(){
			$('body').css({overflow: 'hidden', position: 'fixed'})
			$('#menu .menu__container').css({overflow: 'auto'});
		}, 200);
	}
});
$('#menuClose').on('click', function(e){
	e.preventDefault();
	$('#menu').fadeOut(600);
	$('#wrap').removeClass('scale-out');
	if($('#greatSlider').length){
		greatSlider.slick('slickPlay');
	}
	if(!mobile) {
		if((getInternetExplorerVersion()!==-1)){
			$('body').css({overflow: 'auto'});
			$('#menu .menu__container').css({overflow: 'auto'});
		} else {
			$('body').css({overflow: 'auto', paddingRight: '0'});
			$('#menu .menu__container').css({overflow: 'hidden'});
		}
	} else {
		$('body').css({overflow: 'auto', position: 'relative'});
		$('#menu .menu__container').css({overflow: 'hidden'});
	}
});

// не складывает меню в аккордеон для десктопа

if($('#menu').length){
	if(!mobile || winWidth >= 992){
		$('#accordion .collapse').collapse('show');
		$('#accordion .panel-title a').on('click', function(){
			return false;
		});
	}
}