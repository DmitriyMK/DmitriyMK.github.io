$(document).ready(function() {

    $("body").niceScroll({
        scrollspeed: 60,
        mousescrollstep: 60,
        smoothscroll: true,
        cursorwidth: 10,
        cursorborder: 0,
        cursorcolor: '#55c202',
        cursorborderradius: 2,
        autohidemode: true,
        horizrailenabled: false,
        cursoropacitymin: 1,
        background: false,
        zindex: "9999"
    });

    $('html').addClass('no-overflow-y');

});


$(document).ready(function() {

    if (document.documentElement.clientWidth > 1200) {
        $(window).enllax();
        new WOW().init();
    };

    /*RESPONSIVER BURGER MENU*/

    var $menu = $('.nav');

    $('.burger').click(function() {
        $(this).toggleClass('active');
        $('.overlay').toggleClass('open').show;
    });


    $(document).mouseup(function(e) {
        if (!$menu.is(e.target) // if the target of the click isn't the container...
            &&
            $menu.has(e.target).length === 0) // ... nor a descendant of the container
        {

            $('.overlay').removeClass('open');
            $(".burger").removeClass('active');
        }
    });


    $('.scrolling__link').on('click', function(e) {
        e.preventDefault();
        var t = 1500;
        var d = $(this).attr('data-href') ? $(this).attr('data-href') : $(this).attr('href');
        $('html,body').stop().animate({
            scrollTop: $(d).offset().top
        }, t);
    });


    $('.tabs__link').click(function() {
        var tabID = $(this).attr('data-tabs');

        $(this).addClass('tabs__link-active').siblings().removeClass('tabs__link-active');
        $('#tabs-' + tabID).addClass('tabs__content-active').siblings().removeClass('tabs__content-active');
    });


    $('.phone__mask').mask('+380(99)999-99-99');

    $('.counter').counterUp({
        delay: 10,
        time: 1000
    });


    // $('.review__slider').slick({
    //     arrows: true,
    //     infinite: true,
    //     slidesToShow: 1,
    //     speed: 500,
    // });

    $('.centerHeader__slider').slick({
        arrows: true,
        fade: true,
        dots: true,
        autoplay: true,
        pauseOnHover: true,
        infinite: true,
        slidesToShow: 1,
        speed: 1000,
    });
});


$(".form").submit(function() {
    var th = $(this);
    $.ajax({
        type: "POST",
        url: "mail.php",
        data: th.serialize()
    }).done(function() {

        var inst = $('[data-remodal-id=modal-thanks]').remodal();
        inst.open();

        setTimeout(function() {
            th.trigger("reset");
        }, 1000);
    });
    return false;
});



function initMap() {

    var latlng = new google.maps.LatLng(50.4601337, 30.4527605);
    var settings = {
        zoom: 16,
        center: latlng,
        center: {
            lat: 50.461100,
            lng: 30.4527605
        },
        mapTypeControl: false,
        mapTypeControlOptions: {
            style: google.maps.MapTypeControlStyle.DROPDOWN_MENU
        },
        scrollwheel: false,
        disableDoubleClickZoom: true,
        navigationControlOptions: {
            style: google.maps.NavigationControlStyle.SMALL
        },
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        styles:

        [


        ]



    };


    var map = new google.maps.Map(document.getElementById("google-map"), settings);

    var image = 'img/icons/mark.png';
    var beachMarker = new google.maps.Marker({
        position: {
            lat: 50.4601337,
            lng: 30.4527605
        },
        map: map,
        icon: image

    });

};



/*PRELOADER*/
$(window).load(function() {
    $('#preloader').delay(100).fadeOut('slow');

});