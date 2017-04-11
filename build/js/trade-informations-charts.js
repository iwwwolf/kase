//Торговая информация
document.addEventListener("DOMContentLoaded", function(event) {
	if($('.trade-information__donut').length){
		//ЗДЕСЬ ВСЕ ГРАФИКИ И ИХ ПАРАМЕТРЫ
		AmCharts.makeChart("donut-val",
			{
				"type": "pie",
				"balloonText": "<p class='donut-chart-description'>[[percents]]% <br> ([[title]])<br><span>[[kzt-count]]</span></p>",
				"innerRadius": "92%",
				"pullOutRadius": 0,
				"colors": [
				// ТУТ ЦВЕТА ПОЛОСОК (ПО ОЧЕРЕДИ)
					"#33952b",
					"#b3d407",
					"#FFF",
					"#4ba0eb",
					"#eed01d"
				],
				"labelsEnabled": false,
				"marginBottom": 0,
				"startAngle": 57.6, //ЭТО УГОЛ ПОВОРОТА ГРАФИКА
				"marginTop": 0,
				"pullOutDuration": 0,
				"sequencedAnimation": false,
				"startDuration": 0,
				"titleField": "category",
				"valueField": "column-1",
				"allLabels": [],
				"balloon": {
					"adjustBorderColor": false,
					"borderThickness": 0,
					"color": "#FFF",
					"fillAlpha": 1,
					"fixedPosition": false,
					"offsetX": 0,
					"pointerWidth": 4
				},
				"dataProvider": [
				//ТУТ МОЖНО ДОБАВИТЬ НОВЫЕ ПОЛОСКИ))
				//И ПОМЕНЯТЬ ИХ ТЕКСТА ПО НАВЕДЕНИЮ
					{
						"category": "Спот-рынок",
						"column-1": 8,
						"kzt-count": "1 000 000, 00 <br> млн KZT"
					},
					{
						"category": "Своп-рынок",
						"column-1": 6,
						"kzt-count": "2 000 000, 00 <br> млн KZT"
					},
					{
						"category": "Свободно",
						"column-1": 2,
						"kzt-count": " "
					},
					{
						"category": "Что то синее",
						"column-1": 0,
						"kzt-count": "Какой нибудь текст"
					},
					{
						"category": "Что то оранжевое",
						"column-1": 0,
						"kzt-count": "Какой нибудь текст"
					}
				]
			}
		);
		
		
		
		AmCharts.makeChart("donut-gcb",
			{
				"type": "pie",
				"balloonText": "<p class='donut-chart-description'>[[percents]]% <br> ([[title]])<br><span>[[kzt-count]]</span></p>",
				"innerRadius": "92%",
				"pullOutRadius": 0,
				"colors": [
				// ТУТ ЦВЕТА ПОЛОСОК (ПО ОЧЕРЕДИ)
					"#33952b",
					"#b3d407",
					"#FFF",
					"#4ba0eb",
					"#eed01d"
				],
				"labelsEnabled": false,
				"marginBottom": 0,
				"startAngle": 0, //ЭТО УГОЛ ПОВОРОТА ГРАФИКА
				"marginTop": 0,
				"pullOutDuration": 0,
				"sequencedAnimation": false,
				"startDuration": 0,
				"titleField": "category",
				"valueField": "column-1",
				"allLabels": [],
				"balloon": {
					"adjustBorderColor": false,
					"borderThickness": 0,
					"color": "#FFF",
					"fillAlpha": 1,
					"fixedPosition": false,
					"offsetX": 0,
					"pointerWidth": 4
				},
				"dataProvider": [
				//ТУТ МОЖНО ДОБАВИТЬ НОВЫЕ ПОЛОСКИ))
				//И ПОМЕНЯТЬ ИХ ТЕКСТА ПО НАВЕДЕНИЮ
					{
						"category": "Спот-рынок",
						"column-1": 3,
						"kzt-count": "1 000 000, 00 <br> млн KZT"
					},
					{
						"category": "Своп-рынок",
						"column-1": 5,
						"kzt-count": "2 000 000, 00 <br> млн KZT"
					},
					{
						"category": "Свободно",
						"column-1": 4,
						"kzt-count": " "
					},
					{
						"category": "Что то синее",
						"column-1": 0,
						"kzt-count": "Какой нибудь текст"
					},
					{
						"category": "Что то оранжевое",
						"column-1": 0,
						"kzt-count": "Какой нибудь текст"
					}
				]
			}
		);
		
		
		
		AmCharts.makeChart("donut-gcb",
			{
				"type": "pie",
				"balloonText": "<p class='donut-chart-description'>[[percents]]% <br> ([[title]])<br><span>[[kzt-count]]</span></p>",
				"innerRadius": "92%",
				"pullOutRadius": 0,
				"colors": [
				// ТУТ ЦВЕТА ПОЛОСОК (ПО ОЧЕРЕДИ)
					"#33952b",
					"#b3d407",
					"#FFF",
					"#4ba0eb",
					"#eed01d"
				],
				"labelsEnabled": false,
				"marginBottom": 0,
				"startAngle": 0, //ЭТО УГОЛ ПОВОРОТА ГРАФИКА
				"marginTop": 0,
				"pullOutDuration": 0,
				"sequencedAnimation": false,
				"startDuration": 0,
				"titleField": "category",
				"valueField": "column-1",
				"allLabels": [],
				"balloon": {
					"adjustBorderColor": false,
					"borderThickness": 0,
					"color": "#FFF",
					"fillAlpha": 1,
					"fixedPosition": false,
					"offsetX": 0,
					"pointerWidth": 4
				},
				"dataProvider": [
				//ТУТ МОЖНО ДОБАВИТЬ НОВЫЕ ПОЛОСКИ))
				//И ПОМЕНЯТЬ ИХ ТЕКСТА ПО НАВЕДЕНИЮ
					{
						"category": "Спот-рынок",
						"column-1": 3,
						"kzt-count": "1 000 000, 00 <br> млн KZT"
					},
					{
						"category": "Своп-рынок",
						"column-1": 5,
						"kzt-count": "2 000 000, 00 <br> млн KZT"
					},
					{
						"category": "Свободно",
						"column-1": 4,
						"kzt-count": " "
					},
					{
						"category": "Что то синее",
						"column-1": 0,
						"kzt-count": "Какой нибудь текст"
					},
					{
						"category": "Что то оранжевое",
						"column-1": 0,
						"kzt-count": "Какой нибудь текст"
					}
				]
			}
		);
		
		
		
		AmCharts.makeChart("donut-act",
			{
				"type": "pie",
				"balloonText": "<p class='donut-chart-description'>[[percents]]% <br> ([[title]])<br><span>[[kzt-count]]</span></p>",
				"innerRadius": "92%",
				"pullOutRadius": 0,
				"colors": [
				// ТУТ ЦВЕТА ПОЛОСОК (ПО ОЧЕРЕДИ)
					"#33952b",
					"#b3d407",
					"#FFF",
					"#4ba0eb",
					"#eed01d"
				],
				"labelsEnabled": false,
				"marginBottom": 0,
				"startAngle": 30, //ЭТО УГОЛ ПОВОРОТА ГРАФИКА
				"marginTop": 0,
				"pullOutDuration": 0,
				"sequencedAnimation": false,
				"startDuration": 0,
				"titleField": "category",
				"valueField": "column-1",
				"allLabels": [],
				"balloon": {
					"adjustBorderColor": false,
					"borderThickness": 0,
					"color": "#FFF",
					"fillAlpha": 1,
					"fixedPosition": false,
					"offsetX": 0,
					"pointerWidth": 4
				},
				"dataProvider": [
				//ТУТ МОЖНО ДОБАВИТЬ НОВЫЕ ПОЛОСКИ))
				//И ПОМЕНЯТЬ ИХ ТЕКСТА ПО НАВЕДЕНИЮ
					{
						"category": "Спот-рынок",
						"column-1": 5,
						"kzt-count": "1 000 000, 00 <br> млн KZT"
					},
					{
						"category": "Своп-рынок",
						"column-1": 5,
						"kzt-count": "2 000 000, 00 <br> млн KZT"
					},
					{
						"category": "Свободно",
						"column-1": 0,
						"kzt-count": " "
					},
					{
						"category": "Что то синее",
						"column-1": 0,
						"kzt-count": "Какой нибудь текст"
					},
					{
						"category": "Что то оранжевое",
						"column-1": 0,
						"kzt-count": "Какой нибудь текст"
					}
				]
			}
		);
		
		
		
		AmCharts.makeChart("donut-corp",
			{
				"type": "pie",
				"balloonText": "<p class='donut-chart-description'>[[percents]]% <br> ([[title]])<br><span>[[kzt-count]]</span></p>",
				"innerRadius": "92%",
				"pullOutRadius": 0,
				"colors": [
				// ТУТ ЦВЕТА ПОЛОСОК (ПО ОЧЕРЕДИ)
					"#33952b",
					"#b3d407",
					"#FFF",
					"#4ba0eb",
					"#eed01d"
				],
				"labelsEnabled": false,
				"marginBottom": 0,
				"startAngle": 30, //ЭТО УГОЛ ПОВОРОТА ГРАФИКА
				"marginTop": 0,
				"pullOutDuration": 0,
				"sequencedAnimation": false,
				"startDuration": 0,
				"titleField": "category",
				"valueField": "column-1",
				"allLabels": [],
				"balloon": {
					"adjustBorderColor": false,
					"borderThickness": 0,
					"color": "#FFF",
					"fillAlpha": 1,
					"fixedPosition": false,
					"offsetX": 0,
					"pointerWidth": 4
				},
				"dataProvider": [
				//ТУТ МОЖНО ДОБАВИТЬ НОВЫЕ ПОЛОСКИ))
				//И ПОМЕНЯТЬ ИХ ТЕКСТА ПО НАВЕДЕНИЮ
					{
						"category": "Спот-рынок",
						"column-1": 5,
						"kzt-count": "1 000 000, 00 <br> млн KZT"
					},
					{
						"category": "Своп-рынок",
						"column-1": 5,
						"kzt-count": "2 000 000, 00 <br> млн KZT"
					},
					{
						"category": "Свободно",
						"column-1": 3,
						"kzt-count": " "
					},
					{
						"category": "Что то синее",
						"column-1": 1,
						"kzt-count": "Какой нибудь текст"
					},
					{
						"category": "Что то оранжевое",
						"column-1": 6,
						"kzt-count": "Какой нибудь текст"
					}
				]
			}
		);
		
		
		
		AmCharts.makeChart("donut-repo",
			{
				"type": "pie",
				"balloonText": "<p class='donut-chart-description'>[[percents]]% <br> ([[title]])<br><span>[[kzt-count]]</span></p>",
				"innerRadius": "92%",
				"pullOutRadius": 0,
				"colors": [
				// ТУТ ЦВЕТА ПОЛОСОК (ПО ОЧЕРЕДИ)
					"#33952b",
					"#b3d407",
					"#FFF",
					"#4ba0eb",
					"#eed01d"
				],
				"labelsEnabled": false,
				"marginBottom": 0,
				"startAngle": 45, //ЭТО УГОЛ ПОВОРОТА ГРАФИКА
				"marginTop": 0,
				"pullOutDuration": 0,
				"sequencedAnimation": false,
				"startDuration": 0,
				"titleField": "category",
				"valueField": "column-1",
				"allLabels": [],
				"balloon": {
					"adjustBorderColor": false,
					"borderThickness": 0,
					"color": "#FFF",
					"fillAlpha": 1,
					"fixedPosition": false,
					"offsetX": 0,
					"pointerWidth": 4
				},
				"dataProvider": [
				//ТУТ МОЖНО ДОБАВИТЬ НОВЫЕ ПОЛОСКИ))
				//И ПОМЕНЯТЬ ИХ ТЕКСТА ПО НАВЕДЕНИЮ
					{
						"category": "Спот-рынок",
						"column-1": 5,
						"kzt-count": "1 000 000, 00 <br> млн KZT"
					},
					{
						"category": "Своп-рынок",
						"column-1": 5,
						"kzt-count": "2 000 000, 00 <br> млн KZT"
					},
					{
						"category": "Свободно",
						"column-1": 0,
						"kzt-count": " "
					},
					{
						"category": "Что то синее",
						"column-1": 5,
						"kzt-count": "Какой нибудь текст"
					},
					{
						"category": "Что то оранжевое",
						"column-1": 5,
						"kzt-count": "Какой нибудь текст"
					}
				]
			}
		);
		
		
		
		AmCharts.makeChart("donut-cb",
			{
				"type": "pie",
				"balloonText": "<p class='donut-chart-description'>[[percents]]% <br> ([[title]])<br><span>[[kzt-count]]</span></p>",
				"innerRadius": "92%",
				"pullOutRadius": 0,
				"colors": [
				// ТУТ ЦВЕТА ПОЛОСОК (ПО ОЧЕРЕДИ)
					"#33952b",
					"#b3d407",
					"#FFF",
					"#4ba0eb",
					"#eed01d"
				],
				"labelsEnabled": false,
				"marginBottom": 0,
				"startAngle": 45, //ЭТО УГОЛ ПОВОРОТА ГРАФИКА
				"marginTop": 0,
				"pullOutDuration": 0,
				"sequencedAnimation": false,
				"startDuration": 0,
				"titleField": "category",
				"valueField": "column-1",
				"allLabels": [],
				"balloon": {
					"adjustBorderColor": false,
					"borderThickness": 0,
					"color": "#FFF",
					"fillAlpha": 1,
					"fixedPosition": false,
					"offsetX": 0,
					"pointerWidth": 4
				},
				"dataProvider": [
				//ТУТ МОЖНО ДОБАВИТЬ НОВЫЕ ПОЛОСКИ))
				//И ПОМЕНЯТЬ ИХ ТЕКСТА ПО НАВЕДЕНИЮ
					{
						"category": "Спот-рынок",
						"column-1": 5,
						"kzt-count": "1 000 000, 00 <br> млн KZT"
					},
					{
						"category": "Своп-рынок",
						"column-1": 5,
						"kzt-count": "2 000 000, 00 <br> млн KZT"
					},
					{
						"category": "Свободно",
						"column-1": 0,
						"kzt-count": " "
					},
					{
						"category": "Что то синее",
						"column-1": 5,
						"kzt-count": "Какой нибудь текст"
					},
					{
						"category": "Что то оранжевое",
						"column-1": 5,
						"kzt-count": "Какой нибудь текст"
					}
				]
			}
		);
		
		
		
		AmCharts.makeChart("donut-mfo",
			{
				"type": "pie",
				"balloonText": "<p class='donut-chart-description'>[[percents]]% <br> ([[title]])<br><span>[[kzt-count]]</span></p>",
				"innerRadius": "92%",
				"pullOutRadius": 0,
				"colors": [
				// ТУТ ЦВЕТА ПОЛОСОК (ПО ОЧЕРЕДИ)
					"#33952b",
					"#b3d407",
					"#FFF",
					"#4ba0eb",
					"#eed01d"
				],
				"labelsEnabled": false,
				"marginBottom": 0,
				"startAngle": 45, //ЭТО УГОЛ ПОВОРОТА ГРАФИКА
				"marginTop": 0,
				"pullOutDuration": 0,
				"sequencedAnimation": false,
				"startDuration": 0,
				"titleField": "category",
				"valueField": "column-1",
				"allLabels": [],
				"balloon": {
					"adjustBorderColor": false,
					"borderThickness": 0,
					"color": "#FFF",
					"fillAlpha": 1,
					"fixedPosition": false,
					"offsetX": 0,
					"pointerWidth": 4
				},
				"dataProvider": [
				//ТУТ МОЖНО ДОБАВИТЬ НОВЫЕ ПОЛОСКИ))
				//И ПОМЕНЯТЬ ИХ ТЕКСТА ПО НАВЕДЕНИЮ
					{
						"category": "Спот-рынок",
						"column-1": 5,
						"kzt-count": "1 000 000, 00 <br> млн KZT"
					},
					{
						"category": "Своп-рынок",
						"column-1": 5,
						"kzt-count": "2 000 000, 00 <br> млн KZT"
					},
					{
						"category": "Свободно",
						"column-1": 0,
						"kzt-count": " "
					},
					{
						"category": "Что то синее",
						"column-1": 5,
						"kzt-count": "Какой нибудь текст"
					},
					{
						"category": "Что то оранжевое",
						"column-1": 5,
						"kzt-count": "Какой нибудь текст"
					}
				]
			}
		);
		
		
		
		AmCharts.makeChart("donut-fut",
			{
				"type": "pie",
				"balloonText": "<p class='donut-chart-description'>[[percents]]% <br> ([[title]])<br><span>[[kzt-count]]</span></p>",
				"innerRadius": "92%",
				"pullOutRadius": 0,
				"colors": [
				// ТУТ ЦВЕТА ПОЛОСОК (ПО ОЧЕРЕДИ)
					"#33952b",
					"#b3d407",
					"#FFF",
					"#4ba0eb",
					"#eed01d"
				],
				"labelsEnabled": false,
				"marginBottom": 0,
				"startAngle": 45, //ЭТО УГОЛ ПОВОРОТА ГРАФИКА
				"marginTop": 0,
				"pullOutDuration": 0,
				"sequencedAnimation": false,
				"startDuration": 0,
				"titleField": "category",
				"valueField": "column-1",
				"allLabels": [],
				"balloon": {
					"adjustBorderColor": false,
					"borderThickness": 0,
					"color": "#FFF",
					"fillAlpha": 1,
					"fixedPosition": false,
					"offsetX": 0,
					"pointerWidth": 4
				},
				"dataProvider": [
				//ТУТ МОЖНО ДОБАВИТЬ НОВЫЕ ПОЛОСКИ))
				//И ПОМЕНЯТЬ ИХ ТЕКСТА ПО НАВЕДЕНИЮ
					{
						"category": "Спот-рынок",
						"column-1": 5,
						"kzt-count": "1 000 000, 00 <br> млн KZT"
					},
					{
						"category": "Своп-рынок",
						"column-1": 5,
						"kzt-count": "2 000 000, 00 <br> млн KZT"
					},
					{
						"category": "Свободно",
						"column-1": 0,
						"kzt-count": " "
					},
					{
						"category": "Что то синее",
						"column-1": 5,
						"kzt-count": "Какой нибудь текст"
					},
					{
						"category": "Что то оранжевое",
						"column-1": 5,
						"kzt-count": "Какой нибудь текст"
					}
				]
			}
		);
	}
});