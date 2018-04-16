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



/*FIXED SCROLL FOR MENU*/

/*$(document).ready(function() {

  $(window).scroll(function() {
    if ($(this).scrollTop() > 780) {
      $('#fixedTopMenu').addClass('fixed');
    } else if ($(this).scrollTop() < 780) {
      $('#fixedTopMenu').removeClass('fixed');
    }
  });

});*/


$(document).ready(function() {

  if (document.documentElement.clientWidth > 1200) {
    new WOW().init();

  };



  /*LAZY LOAD*/
  $('.lazy').lazy({
    effect: "fadeIn",
    effectTime: 200,
    threshold: 0,
    visibleOnly: true,
  });


  $('.phone__mask').mask('+380(99)999-99-99');


  $('.models__slider').slick({
    slidesToShow: 7,
    dots: false,
    arrow: false,
    autoplay: true,
    autoplaySpeed: 3000,
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
  });


  $("certificates").fancybox({
    transitionEffect  : "none"

  });

  


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


$(window).on('resize orientationchange', function() {
  $('.slider').slick('resize');
});


/*$(window).enllax();*/

$(document).ready(function() {
  
  //Init ScrollMagic
  var controller = new ScrollMagic.Controller();

  //build a scene
  var ourScene = new ScrollMagic.Scene({
    triggerElement: "#battery1",
/*    duration: 100*/
  })
  .setClassToggle("#battery1", "batteryGoUp1") // add class to project01

  var ourScene = new ScrollMagic.Scene({
    triggerElement: "#battery2",
/*    duration: 100*/
  })
  .setClassToggle("#battery2", "batteryGoUp2") // add class to project01


  .addIndicators ({
    name: 'start',
    colorTrigger: 'black',
    indent: 200,
    colorStart: "red"
  })
  .addTo(controller);

});




/*let canvas = {state:0};
tl.fromTo(canvas,1,{state: 3},{state:36,delay:0.1,onUpdate: function() {
  Ex(canvas.state);
}});
tl.to('.iphone',1,{scale:0.5,transformOrigin: '50% 50%'},0);


let tl1 = new TimelineMax();
tl1.to('.iphone',1,{y:-50});

var controller = new ScrollMagic.Controller();

var scene = new ScrollMagic.Scene({
  duration: '1000', // resposive duration in %
  offset: 0, // offset trigger position by 100px
  triggerElement: '#trigger', // what will trigger scene
  triggerHook: 0
});
scene.addIndicators({name:'Blah blah'});
scene.setTween(tl);
scene.setPin('.animation');
scene.addTo(controller);


var scene0 = new ScrollMagic.Scene({
  duration: '800', // resposive duration in %
  offset: '1000', // offset trigger position by 100px
  triggerElement: '#trigger', // what will trigger scene
  triggerHook: 0
});
scene0.addIndicators({name:'Iphone Flies away'});
scene0.setTween(tl1);
scene0.addTo(controller);



var scene1 = new ScrollMagic.Scene({
  duration: '0', // resposive duration in %
  offset: 44, // offset trigger position by 100px
  triggerElement: '#trigger', // what will trigger scene
  triggerHook: 0
});
scene1.addIndicators({name:'Subheader'});
scene1.setPin('.subheader');
scene1.addTo(controller);*/





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



var bool = 0;

$('.product__details').mouseover(function() {

  if (bool == 0) {

    $('.bar-percentage[data-percentage]').each(function() {
      var progress = $(this);
      var percentage = Math.ceil($(this).attr('data-percentage'));
      $({
        countNum: 0
      }).animate({
        countNum: percentage
      }, {
        duration: 1500,
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
  /*else {
     false;
   }*/

 });


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


    [
    {
      "featureType": "landscape",
      "stylers": [
      {
        "visibility": "simplified"
      },
      {
        "color": "#9debff"
      },
      {
        "weight": 0.1
      }
      ]
    },
    {
      "featureType": "water",
      "stylers": [
      {
        "visibility": "simplified"
      },
      {
        "color": "#ebebeb"
      }
      ]
    },
    {
      "featureType": "road.arterial",
      "elementType": "geometry",
      "stylers": [
      {
        "visibility": "on"
      },
      {
        "color": "#51dbff"
      }
      ]
    },
    {
      "featureType": "poi.park",
      "elementType": "geometry.fill",
      "stylers": [
      {
        "visibility": "on"
      },
      {
        "color": "#51dbff"
      }
      ]
    },
    {
      "featureType": "poi"
    },
    {
      "featureType": "transit.line",
      "stylers": [
      {
        "color": "#ff4e80"
      },
      {
        "visibility": "off"
      }
      ]
    },
    {
      "featureType": "road",
      "elementType": "geometry.stroke",
      "stylers": [
      {
        "visibility": "on"
      },
      {
        "weight": 1.5
      },
      {
        "color": "#51dbff"
      }
      ]
    },
    {
      "featureType": "road.arterial",
      "elementType": "geometry",
      "stylers": [
      {
        "visibility": "simplified"
      },
      {
        "color": "#51dbNaN"
      }
      ]
    },
    {
      "featureType": "road.highway",
      "elementType": "geometry",
      "stylers": [
      {
        "visibility": "simplified"
      },
      {
        "color": "#51dbff"
      }
      ]
    },
    {
      "featureType": "poi.business",
      "stylers": [
      {
        "color": "#9debff"
      },
      {
        "visibility": "off"
      }
      ]
    },
    {},
    {
      "featureType": "poi.government",
      "stylers": [
      {
        "visibility": "off"
      }
      ]
    },
    {
      "featureType": "poi.school",
      "stylers": [
      {
        "visibility": "off"
      }
      ]
    },
    {
      "featureType": "administrative",
      "stylers": [
      {
        "visibility": "on"
      }
      ]
    },
    {
      "featureType": "poi.medical",
      "stylers": [
      {
        "visibility": "off"
      }
      ]
    },
    {
      "featureType": "poi.attraction",
      "elementType": "geometry",
      "stylers": [
      {
        "visibility": "on"
      },
      {
        "color": "#51dbff"
      }
      ]
    },
    {
      "featureType": "poi.place_of_worship",
      "stylers": [
      {
        "visibility": "off"
      }
      ]
    },
    {
      "featureType": "poi.sports_complex",
      "stylers": [
      {
        "visibility": "off"
      }
      ]
    },
    {},
    {
      "featureType": "road.arterial",
      "elementType": "labels.text.stroke",
      "stylers": [
      {
        "color": "#000000"
      },
      {
        "visibility": "off"
      }
      ]
    },
    {
      "featureType": "road.highway",
      "elementType": "labels.text",
      "stylers": [
      {
        "visibility": "off"
      }
      ]
    },
    {
      "featureType": "road.highway.controlled_access",
      "stylers": [
      {
        "visibility": "off"
      }
      ]
    },
    {
      "featureType": "road"
    }
    ]

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