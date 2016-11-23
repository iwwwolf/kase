if($('#datePicker').length){
    $('#datePicker input').daterangepicker({
        "singleDatePicker": true,
        "showDropdowns": true,
        "locale": {
            "direction": "ltr",
            "format": "DD/MM/YYYY",
            /*"separator": " - ",
            "applyLabel": "Apply",
            "cancelLabel": "Cancel",*/
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
        "minDate": "20/06/2016",
        "maxDate": new Date(),
        "parentEl": "#datePicker"
    }, function(start, end, label) {
    }).focus();
}