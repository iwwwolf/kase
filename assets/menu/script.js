if(!mobile){
	$('#menu .menu__container').css({overflow: 'hidden'});
}
$('#menuBtn').on('click', function(e){
	e.preventDefault();
	$('#menu').addClass('active');
	if(!mobile) {
		setTimeout(function(){
			$('body').css({overflow: 'hidden', paddingRight: '17px'})
			$('#menu .menu__container').css({overflow: 'auto'});
		}, 1200);
	} else {
		setTimeout(function(){
			$('body').css({overflow: 'hidden'})
			$('#menu .menu__container').css({overflow: 'auto'});
		}, 1200);
	}
});
$('#menuClose').on('click', function(e){
	e.preventDefault();
	$('#menu').removeClass('active');
	if(!mobile) {
		$('body').css({overflow: 'auto', paddingRight: '0'});
		$('#menu .menu__container').css({overflow: 'hidden'});
	} else {
		$('body').css({overflow: 'auto'});
		$('#menu .menu__container').css({overflow: 'hidden'});
	}
});

// не складывает меню в аккордеон для десктопа

if(!mobile || winWidth >= 992){
	$('#accordion .collapse').collapse('show');
	$('#accordion .panel-title a').on('click', function(){
		return false;
	});
}