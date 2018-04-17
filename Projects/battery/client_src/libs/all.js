$(document).ready(function() {

  $("body").niceScroll({
    scrollspeed: 60,
    mousescrollstep: 60,
    smoothscroll: true,
    cursorwidth: 10,
    cursorborder: 0,
    cursorcolor: '#272b35',
    cursorborderradius: 2,
    autohidemode: true,
    horizrailenabled: false,
    cursoropacitymin: 1,
    background: false,
    zindex: "9999"
  });

  $('html').addClass('no-overflow-y');

});



/*FIXED SCROLL FOR MENU*/

$(document).ready(function() {

  $(window).scroll(function() {
    if ($(this).scrollTop() > 780) {
      $('#fixedTopMenu').addClass('fixed');
    } else if ($(this).scrollTop() < 780) {
      $('#fixedTopMenu').removeClass('fixed');
    }
  });

});


$(document).ready(function() {

  if (document.documentElement.clientWidth > 1200) {
    new WOW().init();

  };


  $('.phone__mask').mask('+380(99)999-99-99');


  /*LAZY LOAD*/
/*  $('.lazy').lazy({
    effect: "fadeIn",
    effectTime: 200,
    threshold: 0,
    scrollDirection: 'vertical',
    visibleOnly: true,

    onError: function(element) {
      console.log('error loading ' + element.data('src'));
    }

  });*/


  $('.models__slider').slick({
    slidesToShow: 7,
    dots: false,
    arrow: false,
    autoplay: true,
    autoplaySpeed: 3000,

    /*  
     responsive: [

       {
         breakpoint: 576,
         settings: {
           slidesToShow: 2,
           dots: true,
         }
       }

     ]
   
     */

  });


  $('.partners__slider').slick({
    slidesToShow: 6,
    dots: false,
    arrow: false,
    autoplay: true,
    autoplaySpeed: 3000,
  });


  $('.review__slider').slick({
    slidesToShow: 1,
    dots: true,
    arrow: true,
  });


  $('.award__slider').slick({
    slidesToShow: 3,
    dots: true,
    arrow: true,
    focusOnSelect: true,
    centerMode: true,
    centerPadding: '20px',
    lazyLoad: 'ondemand',
  });


  $("certificates").fancybox({
    transitionEffect: "none"

  });

});


$(window).on('resize orientationchange', function() {
  $('.slider').slick('resize');
});



$(function() {
  controller = new ScrollMagic.Controller();


  var scene1 = new ScrollMagic.Scene({
    triggerElement: '#premium__box',
    duration: 200
  })

  .setPin('#inside__img2', {
    pushFollowers: false
  })

  .addTo(controller)
  .addIndicators();


  var scene2 = new ScrollMagic.Scene({
      triggerElement: '#premium__box',
      duration: 400
    })
    .setPin('#inside__img3')
    .addTo(controller)
    .addIndicators();


    var scene2 = new ScrollMagic.Scene({
      triggerElement: '#premium__box',
      duration: 500
    })
    .setPin('#inside__img4')
    .addTo(controller)
    .addIndicators();

    var scene2 = new ScrollMagic.Scene({
      triggerElement: '#inside__img4',
      duration: 500
    })
    .setPin('#inside__img5')
    .addTo(controller)
    .addIndicators();

});



/*PERCENTAGE ANIMATION */

$(document).ready(function() {
  var bool = 0;

  $(window).scroll(function() {

    if ($(this).scrollTop() > 2020)
      if (bool == 0) {

        $('.bar-percentage[data-percentage]').each(function() {
          var progress = $(this);
          var percentage = Math.ceil($(this).attr('data-percentage'));
          $({
            countNum: 0
          }).animate({
            countNum: percentage
          }, {
            duration: 2000,
            easing: 'linear',
            step: function() {
              // What todo on every count
              var pct = Math.floor(this.countNum) + '%';
              progress.text(pct) && progress.siblings().children().css('width', pct);
            }
          });
        })

        bool = 1;

      }
  });

});


/*FORM SENDING*/

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


/*GOOGLE MAP WITH STYLE*/

function initMap() {

  var latlng = new google.maps.LatLng(49.9915345, 36.2334419);
  var settings = {
    zoom: 17,
    center: latlng,
    center: {
      lat: 49.9916345,
      lng: 36.2344419
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
    styles:


      [{
      "featureType": "landscape",
      "stylers": [{
        "visibility": "simplified"
      }, {
        "color": "#9debff"
      }, {
        "weight": 0.1
      }]
    }, {
      "featureType": "water",
      "stylers": [{
        "visibility": "simplified"
      }, {
        "color": "#ebebeb"
      }]
    }, {
      "featureType": "road.arterial",
      "elementType": "geometry",
      "stylers": [{
        "visibility": "on"
      }, {
        "color": "#51dbff"
      }]
    }, {
      "featureType": "poi.park",
      "elementType": "geometry.fill",
      "stylers": [{
        "visibility": "on"
      }, {
        "color": "#51dbff"
      }]
    }, {
      "featureType": "poi"
    }, {
      "featureType": "transit.line",
      "stylers": [{
        "color": "#ff4e80"
      }, {
        "visibility": "off"
      }]
    }, {
      "featureType": "road",
      "elementType": "geometry.stroke",
      "stylers": [{
        "visibility": "on"
      }, {
        "weight": 1.5
      }, {
        "color": "#51dbff"
      }]
    }, {
      "featureType": "road.arterial",
      "elementType": "geometry",
      "stylers": [{
        "visibility": "simplified"
      }, {
        "color": "#51dbNaN"
      }]
    }, {
      "featureType": "road.highway",
      "elementType": "geometry",
      "stylers": [{
        "visibility": "simplified"
      }, {
        "color": "#51dbff"
      }]
    }, {
      "featureType": "poi.business",
      "stylers": [{
        "color": "#9debff"
      }, {
        "visibility": "off"
      }]
    }, {}, {
      "featureType": "poi.government",
      "stylers": [{
        "visibility": "off"
      }]
    }, {
      "featureType": "poi.school",
      "stylers": [{
        "visibility": "off"
      }]
    }, {
      "featureType": "administrative",
      "stylers": [{
        "visibility": "on"
      }]
    }, {
      "featureType": "poi.medical",
      "stylers": [{
        "visibility": "off"
      }]
    }, {
      "featureType": "poi.attraction",
      "elementType": "geometry",
      "stylers": [{
        "visibility": "on"
      }, {
        "color": "#51dbff"
      }]
    }, {
      "featureType": "poi.place_of_worship",
      "stylers": [{
        "visibility": "off"
      }]
    }, {
      "featureType": "poi.sports_complex",
      "stylers": [{
        "visibility": "off"
      }]
    }, {}, {
      "featureType": "road.arterial",
      "elementType": "labels.text.stroke",
      "stylers": [{
        "color": "#000000"
      }, {
        "visibility": "off"
      }]
    }, {
      "featureType": "road.highway",
      "elementType": "labels.text",
      "stylers": [{
        "visibility": "off"
      }]
    }, {
      "featureType": "road.highway.controlled_access",
      "stylers": [{
        "visibility": "off"
      }]
    }, {
      "featureType": "road"
    }]

  };
  var map = new google.maps.Map(document.getElementById("google-map"), settings);
  var myLatlng = new google.maps.LatLng(49.9915345, 36.2334419);

  var myOptions = {
    zoom: 10,
    center: myLatlng,
    scrollwheel: false,
    disableDoubleClickZoom: true,
    mapTypeId: google.maps.MapTypeId.ROADMAP
  }
  var image = 'images/marker.png';
  var beachMarker = new google.maps.Marker({
    position: {
      lat: 49.9910345,
      lng: 36.2334419

      /*      lat: 49.9916345,
      lng: 36.2344419*/

    },
    map: map,
    icon: image
      // title: 'Push-k Solutions'
  });

};