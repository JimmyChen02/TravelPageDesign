function currentTime() {
    let date = new Date();
    let hh = date.getHours();
    let mm = date.getMinutes();
    let ss = date.getSeconds();
    let session = "";

    if (hh === 0) {
        hh = 12;
    }
    //   if(hh > 12){
    //       hh = hh - 12;
    //       session = "PM";
    //    }

    hh = (hh < 10) ? "0" + hh : hh;
    mm = (mm < 10) ? "0" + mm : mm;
    ss = (ss < 10) ? "0" + ss : ss;

    let time = hh + ":" + mm + ":" + ss + " " + session;

    document.getElementById("clock").innerText = time;
    let t = setTimeout(function () { currentTime() }, 1000);
}

$(document).ready(function () {
    currentTime();

    var totalHumansNumber = 0;




    $('.menu-icon').on('click', function () {
        $('.sliding-menu').toggleClass('active');
        $('.menu-icon').toggleClass('active');
    });

    $('.btn-close').on('click', function () {
        $('.sliding-menu').removeClass('active');
    });




    $('.calendar-popup i').on('click', function () {
        $('.calendar-popup input').click();
    });




    $('.plus-icon').on('click', function () {
        if (totalHumansNumber < 99) {
            totalHumansNumber = totalHumansNumber + 1;
        }

        if (totalHumansNumber >= 0 && totalHumansNumber < 10) {
            $('.human-number').html('0' + totalHumansNumber);
        }

        else {
            $('.human-number').html(totalHumansNumber);
        }
    })

    $('.minus-icon').on('click', function () {
        if (totalHumansNumber > 0) {
            totalHumansNumber = totalHumansNumber - 1;
        }
        if (totalHumansNumber >= 0 && totalHumansNumber < 10) {
            $('.human-number').html('0' + totalHumansNumber)
        }
        else {
            $('.human-number').html(totalHumansNumber);
        }
    })



    $('input[name="daterange"]').daterangepicker({
        drops: 'up',
        autoApply: true,
        singleDatePicker: true,
        alwaysShowCalendars: true,
    },
        function (start, end, label) {
            console.log("A new date selection was made: " + start.format('YYYY-MM-DD') + ' to ' + end.format('YYYY-MM-DD'));
        });

    $('input[name="daterange"]').on('apply.daterangepicker', function (ev, picker) {
        $(this).val(picker.startDate.format('MM/DD/YYYY') + ' - ' + picker.endDate.format('MM/DD/YYYY'));

        console.log(picker);
        console.log(picker.startDate.format('YYYY-MM-DD'));

        //picker.endDate = picker.startDate + 10;

        var day = 60 * 60 * 24 * 1000 * 11;
        var startDate = new Date(picker.startDate.format('YYYY-MM-DD'));

        var newEndDate = new Date(startDate.getTime() + day);

        //console.log(newEndDate);

        //picker.endDate = newEndDate.format('YYYY-MM-DD');

        //picker.endDate = '03/31/2022';

        //$('input[name="daterange"]').data('daterangepicker').setEndDate(newEndDate);

        $('#start_date').html(picker.startDate.format('MM/DD/YYYY'));
        $('#end_date').html((newEndDate.getMonth() + 1) + '/' + newEndDate.getDate() + '/' + newEndDate.getFullYear());
    });

    //$('#daterange').data('daterangepicker').setEndDate('03/31/2014');



    $.scrollify({
        section : ".scrollify-item",
        //sectionName : "section-name",
        //interstitialSection : "",
        //easing: "easeOutExpo",
        scrollSpeed: 1500,
        offset : 0,
        //scrollbars: true,
        //standardScrollElements: "",
        //setHeights: false,
        //overflowScroll: true,
        updateHash: true,
        //touchScroll:true,
        before:function() {},
        after:function() {},
        afterResize:function() {},
        afterRender:function() {}
      });
            
    
      new WOW({ offset: 40 }).init();

    // var lastScrollTop = 0;

    // // element should be replaced with the actual target element on which you have applied scroll, use window in case of no target element.
    // document.addEventListener("scroll", function(){ // or window.addEventListener("scroll"....
    //     var st = window.pageYOffset || document.documentElement.scrollTop; // Credits: "https://github.com/qeremy/so/blob/master/so.dom.js#L426"
    //     if (st > lastScrollTop){
    //         console.log('down');
    //         new WOW({ offset: 40 }).init();
    //     } else {
    //         console.log('up');
    //     }
    //     lastScrollTop = st <= 0 ? 0 : st; // For Mobile or negative scrolling
    // }, false);

});


