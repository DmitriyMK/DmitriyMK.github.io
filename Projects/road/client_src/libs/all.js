$(document).ready(function() {

  $("body").niceScroll({
    scrollspeed: 60,
    mousescrollstep: 60,
    smoothscroll: true,
    cursorwidth: 7,
    cursorborder: 0,
    cursorcolor: '#f0d91a',
    cursorborderradius: 2,
    autohidemode: true,
    horizrailenabled: false,
    cursoropacitymin: 1,
    background: false,
    zindex: "9999"
  });

  $('html').addClass('no-overflow-y');

});



if (document.documentElement.clientWidth > 1200) {
  $(window).enllax();

};


if (document.documentElement.clientWidth > 991) {

  $(window).scroll(function() {
    if ($(this).scrollTop() > 30) {
      $('#fixedTopMenu').addClass('fixed');
    } else if ($(this).scrollTop() < 30) {
      $('#fixedTopMenu').removeClass('fixed');
    }
  });
};



$('.btn__box .btn').click(function() {

  var options = {
    itemSelector: '.technics__items',
    layoutMode: 'fitRows'
  };

  $('.technics').isotope(options);

  if ($(this).hasClass('btn-active')) {
    $(this).removeClass('btn-active');
    $('.technics').isotope({
      filter: '.technics__items'
    });

  } else {
    
    $('.btn__box .btn').removeClass('btn-active')
    var slug = $(this).addClass('btn-active').data('slug');
    options.filter = '.' + slug;
    $('.technics').isotope({
      filter: '' + '.' + slug
    });
  }
});



$(document).ready(function() {

  $(".linkForSubMenu1").click(function() {

    $(this).toggleClass('active');
    $(".nav__list-submenu").slideToggle(300);

  });

  $(".linkForSubMenu2").click(function() {

    $(this).toggleClass('active');
    $(".nav__list-submenu2").slideToggle(300);

  });


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



  $('.slider-for').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    dots: false,
    asNavFor: '.slider-nav',
    fade: true,
  });


  $('.slider-nav').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    asNavFor: '.slider-for',
    arrows: true,
    dots: false,
    focusOnSelect: true,

    responsive: [

      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        }
      },

      {
        breakpoint: 700,
        settings: {
          slidesToShow: 2,
        }
      },

      {
        breakpoint: 500,
        settings: {
          slidesToShow: 1,
        }
      }

    ]
  });


  $('.slider-for-technics').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    dots: false,
    asNavFor: '.slider-nav-technics',
    fade: true,
  });


  $('.slider-nav-technics').slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    asNavFor: '.slider-for-technics',
    arrows: false,
    dots: false,
    focusOnSelect: true,
    /*    centerMode: true,*/

    responsive: [

      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 4,
        }
      },

      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          centerMode: true,
        }
      },

      {
        breakpoint: 500,
        settings: {
          slidesToShow: 2,
        }
      },

      /*    {
            breakpoint: 500,
            settings: {
              slidesToShow: 1,
            }
          }*/

    ]
  });

  $('[data-fancybox]').fancybox({
    loop: true,
    animationEffect: "zoom",
    transitionEffect: "fade",
    transitionDuration: 366,

    clickOutside: "close",
  });

});



$(window).on('resize orientationchange', function() {
  $('.slider').slick('resize');
});


/*GOOGLE MAP WITH STYLE*/

function initMap() {

  var latlng = new google.maps.LatLng(50.0211168, 36.2187095);
  var settings = {
    zoom: 17,
    center: latlng,
    center: {
      lat: 50.0211168,
      lng: 36.2187095
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
      "stylers": [{
        "saturation": -100
      }, {
        "lightness": 20
      }]
    }, {
      "elementType": "geometry",
      "stylers": [{
        "color": "#f5f5f5"
      }]
    }, {
      "elementType": "labels.icon",
      "stylers": [{
        "visibility": "off"
      }]
    }, {
      "elementType": "labels.text.fill",
      "stylers": [{
        "color": "#616161"
      }]
    }, {
      "elementType": "labels.text.stroke",
      "stylers": [{
        "color": "#f5f5f5"
      }]
    }, {
      "featureType": "administrative.land_parcel",
      "elementType": "labels.text.fill",
      "stylers": [{
        "color": "#bdbdbd"
      }, {
        "visibility": "off"
      }]
    }, {
      "featureType": "poi",
      "elementType": "geometry",
      "stylers": [{
        "color": "#eeeeee"
      }]
    }, {
      "featureType": "poi",
      "elementType": "labels.text.fill",
      "stylers": [{
        "color": "#757575"
      }]
    }, {
      "featureType": "poi.park",
      "elementType": "geometry",
      "stylers": [{
        "color": "#C0ECAE"
      }]
    }, {
      "featureType": "poi.park",
      "elementType": "labels.text.fill",
      "stylers": [{
        "color": "#9e9e9e"
      }]
    }, {
      "featureType": "road",
      "elementType": "geometry",
      "stylers": [{
        "color": "#ffffff"
      }]
    }, {
      "featureType": "road.arterial",
      "elementType": "geometry.fill",
      "stylers": [{
        "color": "#f3e999"
      }]
    }, {
      "featureType": "road.arterial",
      "elementType": "labels.text.fill",
      "stylers": [{
        "color": "#757575"
      }]
    }, {
      "featureType": "road.highway",
      "elementType": "geometry",
      "stylers": [{
        "color": "#f3e999"
      }]
    }, {
      "featureType": "road.highway",
      "elementType": "labels.text.fill",
      "stylers": [{
        "color": "#616161"
      }]
    }, {
      "featureType": "road.local",
      "elementType": "geometry.fill",
      "stylers": [{
        "color": "#f3e999"
      }]
    }, {
      "featureType": "road.local",
      "elementType": "geometry.stroke",
      "stylers": [{
        "color": "#f3e999"
      }]
    }, {
      "featureType": "road.local",
      "elementType": "labels.text.fill",
      "stylers": [{
        "color": "#9e9e9e"
      }]
    }, {
      "featureType": "transit.line",
      "elementType": "geometry",
      "stylers": [{
        "color": "#e5e5e5"
      }]
    }, {
      "featureType": "transit.station",
      "elementType": "geometry",
      "stylers": [{
        "color": "#eeeeee"
      }]
    }, {
      "featureType": "water",
      "elementType": "geometry",
      "stylers": [{
        "color": "#0082d7;"
      }]
    }, {
      "featureType": "water",
      "elementType": "labels.text.fill",
      "stylers": [{
        "color": "#9e9e9e"
      }]
    }]



  };
  var map = new google.maps.Map(document.getElementById("google-map"), settings);
  var myLatlng = new google.maps.LatLng(50.0211168, 36.2187095);

  var myOptions = {
    zoom: 10,
    center: myLatlng,
    scrollwheel: false,
    disableDoubleClickZoom: true,
    mapTypeId: google.maps.MapTypeId.ROADMAP
  }
  var image = 'images/icons/marker.png';
  var beachMarker = new google.maps.Marker({
    position: {
      lat: 50.0211168,
      lng: 36.2187095

    },
    map: map,
    icon: image
      // title: 'Push-k Solutions'
  });

};