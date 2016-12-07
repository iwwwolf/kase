$('input[name="daterange"]').daterangepicker({
	//"parentEl": '#getDate',
    "autoApply": true,
    "locale": {
        "format": "DD/MM/YYYY",
        "separator": " - ",
        "fromLabel": "От",
        "toLabel": "До",
        "customRangeLabel": "Custom",
        "weekLabel": "Нед.",
        "daysOfWeek": [
            "Вс",
            "Пн",
            "Вт",
            "Ср",
            "Чт",
            "Пт",
            "Сб"
        ],
        "monthNames": [
            "Январь",
            "Февраль",
            "Март",
            "Апрель",
            "Май",
            "Июнь",
            "Июль",
            "Август",
            "Сентябрь",
            "Октябрь",
            "Ноябрь",
            "Декабрь"
        ],
        "firstDay": 1
    },
    "linkedCalendars": false,
    "startDate": "01/12/2016",
    "endDate": "07/12/2016",
    "opens": "left"
}, function(start, end, label) {
  console.log("New date range selected: ' + start.format('YYYY-MM-DD') + ' to ' + end.format('YYYY-MM-DD') + ' (predefined range: ' + label + ')");
});