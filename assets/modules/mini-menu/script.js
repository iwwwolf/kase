if($('.mini-menu__menu').length){
	function miniMenuClose(){
		var el = $('.mini-menu__link.active');
		var target = $('.mini-menu__menu.active');
		el.removeClass('active');
		target.removeClass('active');
	}


	$('.mini-menu__menu').each(function(index, el){
		var parentId = $(el).parents('.quotes-info').attr('id');
		var menuLeftPos = $(el).offset().left;
		var menuWidth = $(el).width();
		$(el).find('li').each(function(i, e){
			if($(e).data('title') == parentId) {
				$(e).addClass('active');
			}
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

	$('.quotes-info__parent').on('click', '.mini-menu__link', function(e){
	
		var target = $(this).parent().find('.mini-menu__menu');
		e.preventDefault();

		if($(this).hasClass('active')){
			miniMenuClose();
		}else {
			miniMenuClose();
			$(this).addClass('active');
			target.addClass('active');
		}
		e.stopPropagation();
	});
	

	$('.quotes-info__parent').on('click', '.mini-menu .link, .quotes-info__arrow', function(e){
		
		e.preventDefault();
		

		var self = $(this).parent();
		var title = self.data('title');
		var parentId = self.parents('.quotes-info').attr('id');
		var parent = self.parents('.quotes-info');
		var activeLi = self.parent().find('.active');
		parent.prev().show();

		$.ajax({
			//url: 'http://kase.dev/build/server/quotes-info/' + title + '.html',
			type: 'POST',
			url: 'ajax/' + title + '/',
			dataType: 'html',
			success: function(data){
				var parentId = self.parents('.quotes-info').attr('id');

				var obj = self.closest('.col-lg-4');
				obj.html(data);
				parent.prev().hide();
				restartSparklines(obj);
				//$('#' + parentId).parent().html(data);
				activeLi.removeClass('active');
				self.addClass('active');

				$('.mini-menu__menu').each(function(index, el){
					var parentId = $(el).parents('.quotes-info').attr('id');
					var menuLeftPos = $(el).offset().left;
					var menuWidth = $(el).width();

					$(el).find('li').each(function(i, e){
						if($(e).data('title') == parentId) {
							$(e).addClass('active');
						}
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
			}
		});
	});
}
