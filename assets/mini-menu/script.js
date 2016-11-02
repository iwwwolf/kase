if($('.mini-menu__menu').length){

	var miniMenuPadding = '0 25px';
	
	/*function miniMenuClose(i, e){
		console.log(e)
		$('.mini-menu__menu').each(function(i, e){
			var el = $(e);
			if(el.find('.mini-menu__link').hasClass('active')){
				el.find('.mini-menu__link').removeClass('active');
				el.animate({
					height: '4px',
					padding: '0 25px'
				}, 150, '', function(){
					el.animate({
						padding: 0,
						width: 0
					}, 180, '', function(){
						el.css({
							display: 'none',
							height: 'auto',
							padding: miniMenuPadding
						});
					});
				});
			}
		});
	}*/

	$('.mini-menu__menu').each(function(index, el){
		var parentId = $(el).parents('.quotes-info').attr('id');
		var menuLeftPos = $(el).offset().left;
		var menuWidth = $(el).width();
		$(el).find('li').each(function(i, e){
			if($(e).data('title') == parentId) {
				$(e).addClass('active');
			}
		});
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
	$('.mini-menu__menu ul a').on('click', function(e){
		e.preventDefault();
		var self = $(this).parent();
		var title = self.data('title');
		var parent = self.parents('.quotes-info').attr('id');
		$.ajax({
			url: 'http://kase.dev/build/server/quotes-info/' + title + '.html',
			dataType: 'html',
			success: function(data){
				$('#' + parent).html(data);
				self.parent().find('.active').removeClass('active');
				self.addClass('active');
				console.log(self);
			}
		});
	})
}
