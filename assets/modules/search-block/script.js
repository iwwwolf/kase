$('input[name="daterange"]').daterangepicker({
    "autoApply": true,
    "singleDatePicker": false,
    "locale": {
        "format": "DD.MM.YYYY",
        "separator": " - ",
        "fromLabel": "От",
        "toLabel": "До",
        "customRangeLabel": "Custom",
        "weekLabel": "Нед.",
        "daysOfWeek": ["Вс","Пн","Вт","Ср","Чт","Пт","Сб"],
        "monthNames": ["Январь","Февраль","Март","Апрель","Май","Июнь","Июль","Август","Сентябрь","Октябрь","Ноябрь","Декабрь"],
        "firstDay": 1
    },
    "linkedCalendars": false,
    "minDate": "17.11.1993",
    "maxDate": new Date(),
    isInvalidDate: function (date) {
        var thisMonth = date._d.getMonth()+1;   // Months are 0 based
        if (thisMonth<10){
            thisMonth = "0"+thisMonth; // Leading 0
        }
        var thisDate = date._d.getDate();
        if (thisDate<10){
            thisDate = "0"+thisDate; // Leading 0
        }
        var thisYear = date._d.getYear()+1900;   // Years are 1900 based
        var thisCompare = thisDate +"."+ thisMonth +"."+ thisYear;
        if($.inArray(thisCompare,KASE_HOLIDAYS)!=-1)
        {
            return true;
        }
        else
        {
            return false;
        }
    },
    "opens": "left"
}, function(start, end, label) {
});

if($('#datePicker').length){
    $('#datePicker input').daterangepicker({
        "singleDatePicker": true,
        "showDropdowns": true,
        "locale": {
            "direction": "ltr",
            "format": "DD.MM.YYYY",
            "daysOfWeek": ["Вс","Пн","Вт","Ср","Чт","Пт","Сб"],
            "monthNames": ["Январь","Февраль","Март","Апрель","Май","Июнь","Июль","Август","Сентябрь","Октябрь","Ноябрь","Декабрь"],
            "firstDay": 1
        },
        "minDate": "17.11.1993",
        "maxDate": new Date(),
        isInvalidDate: function (date) {
            var thisMonth = date._d.getMonth()+1;   // Months are 0 based
            if (thisMonth<10){
                thisMonth = "0"+thisMonth; // Leading 0
            }
            var thisDate = date._d.getDate();
            if (thisDate<10){
                thisDate = "0"+thisDate; // Leading 0
            }
            var thisYear = date._d.getYear()+1900;   // Years are 1900 based

            var thisCompare = thisDate +"."+ thisMonth +"."+ thisYear;

            if($.inArray(thisCompare,KASE_HOLIDAYS)!=-1){
                return date._pf = {userInvalidated: true};
            }
        },
        "parentEl": "#datePicker"
    }, function(start, end, label) {
    }).focus();
}