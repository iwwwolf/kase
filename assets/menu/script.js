$('#menuBtn').on('click', function(e){
	e.preventDefault();
	$('#menu').fadeIn();
});
$('#menuClose').on('click', function(e){
	e.preventDefault();
	$('#menu').fadeOut();
});

// не складывает меню в аккордеон для десктопа

if(!mobile || winWidth >= 991){
	$('#accordion .collapse').collapse('show');
	$('#accordion .panel-title a').on('click', function(){
		return false;
	});
}