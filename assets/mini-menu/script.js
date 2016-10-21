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

	$('.mini-menu__link').on('click', function(e){
		var target = $(this).parent().find('.mini-menu__menu');
		var targetHeight = target.height();
		var targetPadding = '0 25px';

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
			}, 300, '', function(){
				target.animate({
					padding: targetPadding,
					height: targetHeight
				});
			}, 300);
		} else {
			$(this).removeClass('active');

			target.animate({
				height: '4px',
				padding: '0 25px'
			}, 300, '', function(){
				target.animate({
					padding: 0,
					width: 0
				}, 300, '', function(){
					target.css({
						display: 'none',
						height: 'auto',
						padding: targetPadding
					});
				});
			});
		}
	});
}