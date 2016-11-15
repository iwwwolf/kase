$(document).ready(function(){

	(function(a){(jQuery.browser=jQuery.browser||{}).mobile=/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))})(navigator.userAgent||navigator.vendor||window.opera);

	var mobile = $.browser.mobile;

	

	var winWidth = $(window).width();

	var winHeight = $(window).height();

	

	/* скроллинг в блоках */

	if(!mobile){

	    if($('.scroll-block').length){

	    	var scrollBlock = $('.scroll-block').jScrollPane({

	    		autoReinitialise: true,

	    		contentWidth: '0px',

	    		verticalGutter: 0,

	    		horizontalGutter: 0,

	    		showArrows: false

	    	});

	    };

	};

	

	/* появление блогов на Главной странице */

	if($('.hidden-block').length){

		var blocks = $('.hidden-block')

	

		blocks.each(function(index, el){

			setTimeout(function(){

				var elemTop= $(blocks[index]).offset().top;

				var winScroll = $(window).scrollTop()+winHeight;

				if(elemTop <= winScroll){

					$(el).addClass('shown');

				}

			},200);

			$(window).on('scroll',function(){

				var elemTop= $(blocks[index]).offset().top;

				var winScroll = $(window).scrollTop()+winHeight;

				if(elemTop < winScroll){

					$(el).addClass('shown');

				}

			});

		});

	};

	

	$('.dropdown-menu').on('click', function(e){

	    e.stopPropagation();

	});

	

	$('.table a').on('click', function(e){

	    if($(this).hasClass('down')){

	        e.preventDefault();

	        $(this).removeClass('down').addClass('up');

	    }

	    else if($(this).hasClass('up')){

	        e.preventDefault();

	        $(this).removeClass('up').addClass('down');

	    }

	});

	

	//====== клик по body

	$('body').on('click', function() {

		if($('.mini-menu__menu').length){

			miniMenuClose();

		}

	});

	

	

	

	function getInternetExplorerVersion()

	{

	    var rv = -1;

	    if (navigator.appName == 'Microsoft Internet Explorer')

	    {

	        var ua = navigator.userAgent;

	        var re  = new RegExp("MSIE ([0-9]{1,}[\.0-9]{0,})");

	        if (re.exec(ua) != null)

	            rv = parseFloat( RegExp.$1 );

	    }

	    else if (navigator.appName == 'Netscape')

	    {

	        var ua = navigator.userAgent;

	        var re  = new RegExp("Trident/.*rv:([0-9]{1,}[\.0-9]{0,})");

	        if (re.exec(ua) != null)

	            rv = parseFloat( RegExp.$1 );

	    }

	    return rv;

	}

	
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
	$('#searchClose').on('click', function(e){
		e.preventDefault();
		$('#searchBtn').removeClass('active');
		$('#headerSearch').slideUp();
	})
	if($('#greatSlider').length){
	    var greatSlider = $('#greatSlider .great-slider__wrapper');
	    if(mobile){
	        greatSlider.slick({
	            slidesToShow: 1,
	            slidesToScroll: 1,
	            mobileFirst: true,
	            dots: true,
	            arrows: false,
	            dotsClass: 'great-slider__pagination'
	        });
	    } else {
	        greatSlider.on('init', function(event, slick){
	            greatSlider.find('.great-slider__pagination').append('<li><span id="pauseBtn" class="great-slider__pause-link fa"></span></li>');
	        }).slick({
	            easing: 'ease',
	            speed: 900,
	            slidesToShow: 1,
	            slidesToScroll: 1,
	            vertical: true,
	            prevArrow: $('#greatSliderPrev'),
	            nextArrow: $('#greatSliderNext'),
	            dots: true,
	            dotsClass: 'great-slider__pagination',
	            autoplay: true,
	            autoplaySpeed: 3000
	        });
	    }
	    $('#pauseBtn').on('click',function(e){
	        e.preventDefault();
	        if($(this).hasClass('paused')){
	            $(this).removeClass('paused');
	            greatSlider.slick('slickPlay');
	        } else {
	            $(this).addClass('paused');
	            greatSlider.slick('slickPause');
	        }
	    });
	}
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
				$('body').css({overflow: 'hidden'})
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
			$('body').css({overflow: 'auto'});
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
			$.ajax({
				//url: 'http://kase.dev/build/server/quotes-info/' + title + '.html',
				url: 'ajax/' + title + '/',
				dataType: 'html',
				success: function(data){
					var parentId = self.parents('.quotes-info').attr('id');
	
					var obj = self.closest('.col-md-4');
					obj.html(data);
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
	
	if(mobile) {
		if($('.home-news__list').length){
			$(".home-news__list").each(function(index, element){
				var $this = $(this);
				var homeNews = new Swiper ($this, {
			    	loop: false,
			    	speed: 400,
			    	autoheight: true,
			    	slidesPerView: 1,
			    	autoplay: false,
			    	pagination: $this.parent().find('.home-news__pagination'),
			    	paginationHide: false,
			    	paginationClickable: true
				});
			});
		}
	}
	$('.datepicker').datepicker({
		language: "ru",
	    autoclose: true
	});
	/* раскрывающиеся блоки страницы */
	if($('.accordion').length){
		$('.accordion.closed').each(function(index, el){
			$(el).find('.accordion__body').slideUp();
		});
	}
	$('.accordion__head-link').on('click', function(e){
		var parent = $(this).parents('.accordion');
		var target = parent.find('.accordion__body');
		e.preventDefault();
		if(!parent.hasClass('closed')){
			parent.addClass('closed');
			target.slideUp();
		} else {
			parent.removeClass('closed');
			target.slideDown();
		}
	});
	/*if($('.sorting-table').length){	
		$('.sorting-table').DataTable({
			scrollX: true,
			language: {
			    search: '',
			    searchPlaceholder: "Поиск по всем бумагам (по коду или названию)"
			  }
		});
	}*/
	/* require "modules/trade-info/script.js"
	 require "modules/donut-chart/script.js"*/
});