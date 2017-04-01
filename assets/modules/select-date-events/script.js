if($('#datePicker-events').length){
    $('#datePicker-events input').daterangepicker({
        "singleDatePicker": true,
        "showDropdowns": true,
        "locale": {
            "direction": "ltr",
            "format": "DD/MM/YYYY",
            "minDate": "17.11.1993",
            isInvalidDate : function (date) {
                var thisMonth = date._d.getMonth()+1;

                if (thisMonth<10){
                    thisMonth = "0"+thisMonth;
                }

                var thisDate = date._d.getDate();

                if (thisDate<10){
                    thisDate = "0"+thisDate;
                }

                var thisYear = date._d.getYear()+1900;
                var thisCompare = thisDate +"."+ thisMonth +"."+ thisYear;

                if($.inArray(thisCompare,KASE_HOLIDAYS)!=-1){
                    return date._pf = {userInvalidated: true};
                }
            }, 
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