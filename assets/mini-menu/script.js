if($('.mini-menu__menu').length){

	$('.mini-menu__menu').each(function(index, el){
		var menuLeftPos = $(el).offset().left;
		var menuWidth = $(el).width();
		$(el).css({
			width: 0, 
			display: 'none', 
			opacity: 1
		});
		if(menuLeftPos > winWidth - menuWidth){
			$(el).css({
				left: 'auto', 
				right: '100%',
				marginLeft: 0,
				marginRight: '5px'
			});
		}
	});

	var miniMenuPadding = '0 25px';

	$('.mini-menu__link').on('click', function(e){
		var target = $(this).parent().find('.mini-menu__menu');
		var targetHeight = target.height();

		e.preventDefault();
		if(!$(this).hasClass('active')){
			$(this).addClass('active');
			target.css({
				height: '4px',
				padding: 0, 
				display: 'block'
			}).animate({
				width: '290px',
				padding: '0 25px'
			}, 150, '', function(){
				target.animate({
					padding: miniMenuPadding,
					height: targetHeight
				});
			}, 180);
		} else {
			$(this).removeClass('active');

			target.animate({
				height: '4px',
				padding: '0 25px'
			}, 150, '', function(){
				target.animate({
					padding: 0,
					width: 0
				}, 180, '', function(){
					target.css({
						display: 'none',
						height: 'auto',
						padding: miniMenuPadding
					});
				});
			});
		}
	});
	/*$('body').on('click', function(e){
		if($('.mini-menu__link.active').length){
			var target = $('.mini-menu__link.active').parent().find('.mini-menu__menu');
			$('.mini-menu__link.active').removeClass('active');
			target.animate({
				height: '4px',
				padding: '0 25px'
			}, 250, '', function(){
				target.animate({
					padding: 0,
					width: 0
				}, 250, '', function(){
					target.css({
						display: 'none',
						height: 'auto',
						padding: miniMenuPadding
					});
				});
			});
		}
	});*/
}
