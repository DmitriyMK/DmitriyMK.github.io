/*PRELOADER*/
// $(window).load(function() {
//     $('#preloader').delay(100).fadeOut('slow');
// });

$(document).ready(function() {

    /*    $("body).niceScroll({
            cursorcolor:"#fad94d",
            cursorwidth:"16px",
            zindex: [200],
            scrollspeed: 60,
        });*/


    $('.scrolling__link').on('click', function(e) {
        e.preventDefault();
        var t = 1500;
        var d = $(this).attr('data-href') ? $(this).attr('data-href') : $(this).attr('href');
        $('html,body').stop().animate({
            scrollTop: $(d).offset().top
        }, t);
    });

/*    $('.parallax').scrolly({
        bgParallax: true
    });*/


    $('.review__slider').slick({
        arrows: true,
        dots: true,
        infinite: true,
        slidesToShow: 1,
        speed: 500,
    });

    $('.example__slider').slick({
        arrows: true,
        dots: true,
        infinite: true,
        slidesToShow: 2,
        speed: 500,

        responsive: [{
            breakpoint: 1200,
            settings: {
                arrows: false
            }
        }, {
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
                arrows: false
            }
        }, ]
    });


    /*FORM POP-UP*/
    $('.open-popup-link').magnificPopup({
        type: 'inline',
        preloader: false

    });

    $('.phone-mask').mask('+38(999)999-99-99');

    

});
if (document.documentElement.clientWidth > 1200) {
         new WOW().init();
    
    };


/*FIXED SCROLL FOR MENU*/

$(window).scroll(function() {
    if ($(this).scrollTop() > 800) {
        $('#fixedTopMenu').addClass('fixed');
    } else if ($(this).scrollTop() < 800) {
        $('#fixedTopMenu').removeClass('fixed');
    }
});



//E-mail Ajax Send
$(".form__mail, .form__mail-site, .formBox__callback").submit(function() {
    var th = $(this);
    $.ajax({
        type: "POST",
        url: "js/mail.php",
        data: th.serialize()
    }).done(function() {
        $(th).find('.success').addClass('active').css("display", "block").hide().fadeIn();
        setTimeout(function() {
            $(th).find('.success').removeClass('active').fadeOut();
            th.trigger("reset");
        }, 3000);
    });
    return false;

});



function initMap() {

    var latlng = new google.maps.LatLng(48.5146569, 34.6026102);
    var settings = {
        zoom: 17,
        // center: latlng,
        center: {
            lat: 48.5146569,
            lng: 34.6026102
        },
        mapTypeControl: true,
        mapTypeControlOptions: {
            style: google.maps.MapTypeControlStyle.DROPDOWN_MENU
        },
        scrollwheel: false,
        disableDoubleClickZoom: true,
        navigationControlOptions: {
            style: google.maps.NavigationControlStyle.SMALL
        },
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        styles: [{
            "elementType": "geometry",
            "stylers": [{
                "color": "#ebe3cd"
            }]
        }, {
            "elementType": "labels.text.fill",
            "stylers": [{
                "color": "#523735"
            }]
        }, {
            "elementType": "labels.text.stroke",
            "stylers": [{
                "color": "#f5f1e6"
            }]
        }, {
            "featureType": "administrative",
            "elementType": "geometry.stroke",
            "stylers": [{
                "color": "#c9b2a6"
            }]
        }, {
            "featureType": "administrative.land_parcel",
            "elementType": "geometry.stroke",
            "stylers": [{
                "color": "#dcd2be"
            }]
        }, {
            "featureType": "administrative.land_parcel",
            "elementType": "labels.text.fill",
            "stylers": [{
                "color": "#ae9e90"
            }]
        }, {
            "featureType": "landscape.natural",
            "elementType": "geometry",
            "stylers": [{
                "color": "#dfd2ae"
            }]
        }, {
            "featureType": "poi",
            "elementType": "geometry",
            "stylers": [{
                "color": "#dfd2ae"
            }]
        }, {
            "featureType": "poi",
            "elementType": "labels.text.fill",
            "stylers": [{
                "color": "#93817c"
            }]
        }, {
            "featureType": "poi.park",
            "elementType": "geometry.fill",
            "stylers": [{
                "color": "#a5b076"
            }]
        }, {
            "featureType": "poi.park",
            "elementType": "labels.text.fill",
            "stylers": [{
                "color": "#447530"
            }]
        }, {
            "featureType": "road",
            "elementType": "geometry",
            "stylers": [{
                "color": "#f5f1e6"
            }]
        }, {
            "featureType": "road.arterial",
            "elementType": "geometry",
            "stylers": [{
                "color": "#fdfcf8"
            }]
        }, {
            "featureType": "road.highway",
            "elementType": "geometry",
            "stylers": [{
                "color": "#f8c967"
            }]
        }, {
            "featureType": "road.highway",
            "elementType": "geometry.stroke",
            "stylers": [{
                "color": "#e9bc62"
            }]
        }, {
            "featureType": "road.highway.controlled_access",
            "elementType": "geometry",
            "stylers": [{
                "color": "#e98d58"
            }]
        }, {
            "featureType": "road.highway.controlled_access",
            "elementType": "geometry.stroke",
            "stylers": [{
                "color": "#db8555"
            }]
        }, {
            "featureType": "road.local",
            "elementType": "labels.text.fill",
            "stylers": [{
                "color": "#806b63"
            }]
        }, {
            "featureType": "transit.line",
            "elementType": "geometry",
            "stylers": [{
                "color": "#dfd2ae"
            }]
        }, {
            "featureType": "transit.line",
            "elementType": "labels.text.fill",
            "stylers": [{
                "color": "#8f7d77"
            }]
        }, {
            "featureType": "transit.line",
            "elementType": "labels.text.stroke",
            "stylers": [{
                "color": "#ebe3cd"
            }]
        }, {
            "featureType": "transit.station",
            "elementType": "geometry",
            "stylers": [{
                "color": "#dfd2ae"
            }]
        }, {
            "featureType": "water",
            "elementType": "geometry.fill",
            "stylers": [{
                "color": "#b9d3c2"
            }]
        }, {
            "featureType": "water",
            "elementType": "labels.text.fill",
            "stylers": [{
                "color": "#92998d"
            }]
        }]

    };
    var map = new google.maps.Map(document.getElementById("google-map"), settings);
    var myLatlng = new google.maps.LatLng(48.5146569, 34.6026102);

    var myOptions = {
        zoom: 80,
        center: myLatlng,
        scrollwheel: false,
        disableDoubleClickZoom: true,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    }
    var image = 'img/pointer.png';
    var beachMarker = new google.maps.Marker({
        position: {
            lat: 48.5146569,
            lng: 34.6026102
        },
        map: map,
        icon: image
            // title: 'Push-k Solutions'
    });

};