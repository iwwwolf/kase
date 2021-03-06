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

/*$('.dropdown-menu').on('click', function(e){
    e.stopPropagation();
});*/

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

//===== popovers

$('[data-toggle="popover"]').popover();



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

//Слайдер в истории
 $('.container.history.steps.slider .slider-main').slick({
	slidesToShow: 1,
	slidesToScroll: 1,
	arrows: true,
	fade: false,
	infinite: false,
	asNavFor: '.slider-nav'
});
$('.container.history.steps.slider .slider-nav').slick({
	slidesToShow: 3,
	slidesToScroll: 1,
	asNavFor: '.slider-main',
	dots: false,
	centerMode: true,
	focusOnSelect: true,
	infinite: false,
	responsive: [{
		breakpoint: 768,
		settings:{
			slidesToShow: 1,
		}
	}]
});
//Слайдер в дипломатах и номинациях
 $('.container.diplomats.slider .slider-main').slick({
	slidesToShow: 1,
	slidesToScroll: 1,
	arrows: false,
	fade: false,
	infinite: false,
	initialSlide: 5,
	adaptiveHeight: true,
	asNavFor: '.slider-nav'
});
$('.container.diplomats.slider .slider-nav').slick({
	asNavFor: '.slider-main',
	dots: false,
	centerMode: true,
	variableWidth: true,
	focusOnSelect: true,
	infinite: false,
	initialSlide: 5,
});
//Торговый календарь
if($('.trade-calendar').length){
	$('.trade-calendar .trade-calendar__slider').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		swipe: false,
		fade: false,
		infinite: true,
		adaptiveHeight: true,
		asNavFor: '.trade-calendar__nav'
	});
	$('.trade-calendar .trade-calendar__nav').slick({
		slidesToShow: 1,
		asNavFor: '.trade-calendar__slider',
		arrows: true,
		dots: false,
		centerMode: true,
		infinite: true,
	});
}


//КАРТЫ
if($('#map').length>0){
	 ymaps.ready(function(){
		var myMap=new ymaps.Map('map',{
				center:[43.238419, 76.915798],
				zoom:15.5,
				behaviors:['default','scrollZoom'],controls:[]
			},{
				searchControlProvider:'yandex#search'
			}),
			myPlacemark=new ymaps.Placemark([43.237459, 76.915773],{
				balloonContent:'<p><b>Казахстанская фондовая биржа</b></p><p>ул. Байзакова, 280, Северная башня Многофункционального комплекса  "Almaty Towers", 8-й этаж</p><p>Заезд только с улицы Сатпаева при движении в западном направлении.</p>'
			},{
	//			balloonPanelMaxMapArea: 0
			});
		myMap.geoObjects.add(myPlacemark);
	});
}
//Мероприятия календарь
//$(document).ready(function(){
//	if($('.events-list__calendar-cal#calendar').length){
//		$(".events-list__calendar-cal#calendar").ionCalendar({
//			lang: "ru",
//			sundayFirst: false,
//			years: "5",
//			hideArrows: true,
//			format: "DD.MM.YYYY",
//			onClick: function(date){
//					alert('Это событие можно изменить в default.js, данные поля: '+date);
//			}
//		});
//	}
//});
$(document).ready(function(){
	var calendar = $('.events-list__calendar-cal#calendar');
	if(calendar.length){
		calendar.ionCalendar({
			lang: "ru",
			sundayFirst: false,
			years: "5",
			hideArrows: true,
			format: "DD.MM.YYYY",
		});
		var dataDay = '';
		var eventFlag = false;
		var dataDayDots = '';
		var today = false;
		var eventsLength = allEvents.length;
		function eventsDots(){
			for(i=1 ; i<=9 ; i++){
				for(j=1 ; j<8 ; j++){
					calendar.find('tbody > tr:nth-child('+i+') td:nth-child('+j+')').append('<div class="day-dots"></div>');
					var localDay = calendar.find('tbody > tr:nth-child('+i+') td:nth-child('+j+') .day-dots');
					var localData = localDay.parent('td').attr('data-day');
					for(k=0 ;  k<eventsLength;  k++){
						if(allEvents[k].date == localData){
							for(l=0 ;  l<allEvents[k].events.length; l++){
								localDay.append('<span></span>')
								calendar.find('tbody > tr:nth-child('+i+') td:nth-child('+j+')').addClass('evented');
							}
						}
					}
				}
			}
		}

		function dayDescription(){
			var block = $('.events-list__show');
			block.html(' ');
			block.fadeOut(1).fadeIn(500);
			if(today == true){
				block.append('<h3>Сегодня</h3>');
			} else{
				block.append('<h3>'+dataDay+'</h3>');
			}
			for(i=0;i<allEvents.length;i++){
				if(allEvents[i].date == dataDay){
					for(j=0;j<allEvents[i].events.length;j++){
						block.append('<div class="event" id="'+(j+1)+'"><a href="'+allEvents[i].events[j].href+'"><div class="event__title"><div class="event__title-preview"><img src="images/'+allEvents[i].events[j].imageSrc+'"></div><div class="event__title-text"><p><b>'+allEvents[i].events[j].eventTitle+'</b><br><span>'+allEvents[i].events[j].eventTime+'</span></p></div></div><div class="event__description"><p>'+allEvents[i].events[j].eventText+'</p></a></div>');
					}
				}
			}
		}
		function noDayDescription(){
			var block = $('.events-list__show');
			block.html(' ');
			block.fadeOut(1).fadeIn(500);
			if(today == true){
				block.append('<h3>Сегодня</h3>');
			} else{
				block.append('<h3>'+dataDay+'</h3>');
			}
			block.append('<div class="no-event"><p>На этот день нет никаких мероприятий</p></div>');
		}

		function todayDescription(){
			dataDay = calendar.find('.ic__day_state_current').attr('data-day');
			today = true;
			for(i=0;i<allEvents.length;i++){
				if(allEvents[i].date == dataDay){
					dayDescription();
				} else {
					noDayDescription();
				}
			}
		}

		function calendarStart(){
			for(i=1 ; i<=9 ; i++){
				calendar.find('.ic__days tr:nth-child('+i+')').attr('id', i);
			}
			calendar.find('.ic__prev').click(function(){
				calendarListener();
			});
			calendar.find('.ic__next').click(function(){
				calendarListener();
			});
			calendar.find('.ic__header select').on('change', function(){
				calendarListener();
			});
			eventsDots();
			calendar.find('.ic__day').click(function(){
				today = false;
				calendarListener();
				dataDay = $(this).attr('data-day');
				for(i=0;i<allEvents.length;i++){
					if(allEvents[i].date == dataDay){
						eventFlag = true;
					}
				}
				if(eventFlag == true){
					eventFlag = false;
					dayDescription();
				} else {
					noDayDescription();
				}
			});
		}
		todayDescription();
		function calendarListener(){
			if($('.ic__day').length){
				calendarStart();
			} else {
					setTimeOut(function(){
						calendarStart();
				}, 500);
			}
		}
		calendarListener();
	}
});
//Календарь в личном кабинете
$(document).ready(function(){
	var calendar = $('.cabinet-calendar__calendar#calendar');
	if(calendar.length){
		calendar.ionCalendar({
			lang: "ru",
			sundayFirst: false,
			years: "10",
			hideArrows: false,
			format: "DD.MM.YYYY"
		});
		var dataDay = '';
		var dataDayDots = '';
	
		var eventsLength = allEvents.length;
		function eventsDots(){
			for(i=1 ; i<=9 ; i++){
				for(j=1 ; j<8 ; j++){
					calendar.find('tbody > tr:nth-child('+i+') td:nth-child('+j+')').append('<div class="day-dots"></div>');
					var localDay = calendar.find('tbody > tr:nth-child('+i+') td:nth-child('+j+') .day-dots');
					var localData = localDay.parent('td').attr('data-day');
					for(k=0 ;  k<eventsLength;  k++){
						if(allEvents[k].date == localData){
							for(l=0 ;  l<allEvents[k].events.length; l++){
								localDay.append('<span></span>')
								calendar.find('tbody > tr:nth-child('+i+') td:nth-child('+j+')').addClass('evented');
							}
						}
					}
				}
			}
		}

		function dayDescription(){
			var block = calendar.find('.day-description td');
			block.fadeOut(1).fadeIn(500);
			for(i=0;i<eventsLength;i++){
				if(allEvents[i].date == dataDay){
					 for(j=0;j<allEvents[i].events.length; j++){
						block.append('<p>'+allEvents[i].events[j]+'</p>');
					}
				}
			}
		}

		function calendarStart(){
			for(i=1 ; i<=9 ; i++){
				calendar.find('.ic__days tr:nth-child('+i+')').attr('id', i);
			}
			calendar.find('.ic__prev').click(function(){
				calendarListener();
			});
			calendar.find('.ic__next').click(function(){
				calendarListener();
			});
			calendar.find('.ic__header select').on('change', function(){
				calendarListener();
			});
			eventsDots();
			calendar.find('.ic__day').click(function(){
				calendarListener();
				dataDay = $(this).attr('data-day');
				var parentStroke = $(this).parent('tr').attr('id');
				console.log(parentStroke);
				console.log(dataDay);
				for(i=0;i<allEvents.length;i++){
					if(allEvents[i].date == dataDay){
						calendar.find('.ic__days tr:nth-child('+parentStroke+')').after('<tr class="day-description"><td colspan="7" ></td></tr>');
						dayDescription();
					}
				}
			});
		}
		function calendarListener(){
			if($('.ic__day').length){
				calendarStart();
			} else {
					setTimeOut(function(){
						calendarStart();
				}, 500);
			}
		}
		calendarListener();
	}
});