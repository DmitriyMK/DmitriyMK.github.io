$(document).ready(function() {

    /*MENU SCROLLING*/
    $(document).ready(function() {
        $(".navigation__list").on("click", "a", function(event) {
            event.preventDefault();
        })
    });

    $(".owl-carousel").owlCarousel({
        items: 1,
        loop: true,
        center: true,
    });

    var owl = $('.owl-carousel');
    owl.owlCarousel();

    $('.owl-next').click(function() {
        owl.trigger('next.owl.carousel');
    })

    $('.owl-prev').click(function() {
        owl.trigger('prev.owl.carousel');
    });


    $("img").lazyload({
        threshold: 200,
        effect: "fadeIn"
    });


    $('.radio').styler({});

    /*ANIMATION PLUGUN*/
    new WOW().init();

    /*MENU SCROLLING*/
/*  $('a[href^="#"], *[data-href^="#"]').on('click', function(e) {
        e.preventDefault();
        var t = 1000;
        var d = $(this).attr('data-href') ? $(this).attr('data-href') : $(this).attr('href');
        $('html,body').stop().animate({
            scrollTop: $(d).offset().top}, t);
        });

    });

$(document).ready(function() {

    /*RESPONSIVER BURGER MENU*/
    $(".burger").click(function() {
        $(this).toggleClass('active');
        $(".navigation__list").slideToggle('fast');
    })

    $('.burger').on('click', function() {
        $('.overlay').toggleClass('open').show;
    });

    $(window).resize(function() {
        if ($(window).width() > 599) {
            $('.navigation__list').removeAttr('style');
        }
    })
});


$(function() {

    var note = $('#note'),
    ts = new Date(2017, 0, 1),
    newYear = true;

    if ((new Date()) > ts) {
        // The new year is here! Count towards something else.
        // Notice the *1000 at the end - time must be in milliseconds
        ts = (new Date()).getTime() + 20 * 60 * 60 * 1000;
        newYear = false;
    }

    $('#countdown').countdown({
        timestamp: ts,
        callback: function(days, hours, minutes, seconds) {

            var message = "";

            message += days + " day" + (days == 1 ? '' : 's') + ", ";
            message += hours + " hour" + (hours == 1 ? '' : 's') + ", ";
            message += minutes + " minute" + (minutes == 1 ? '' : 's') + " and ";
            message += seconds + " second" + (seconds == 1 ? '' : 's') + " <br />";

            if (newYear) {
                message += "left until the new year!";
            } else {
                message += "left to 10 days from now!";
            }

            note.html(message);
        }
    });
});



$(window).on('load', function() {
    $('#preloader').delay(100).fadeOut('slow');
});