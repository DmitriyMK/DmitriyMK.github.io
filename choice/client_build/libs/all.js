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
$(document).ready(function() {

  $(window).scroll(function() {
    if ($(this).scrollTop() > 600) {
      $('#fixedTopMenu').addClass('fixed');
    } else if ($(this).scrollTop() < 600) {
      $('#fixedTopMenu').removeClass('fixed');
    }
  });

});


/*FIXED SCROLL TO TOP*/
$(document).ready(function() {

  $(window).scroll(function() {
    if ($(this).scrollTop() > 400) {
      $('.scrollup').fadeIn();
    } else {
      $('.scrollup').fadeOut();
    }
  });

  $('.scrollup').click(function() {
    $("html, body").animate({
      scrollTop: 0
    }, 600);
    return false;
  });

});

$(document).ready(function() {

  if (document.documentElement.clientWidth > 1200) {
    new WOW().init();

  };

  $('.srolling__link').on('click', function(e) {
    e.preventDefault();
    var t = 1500;
    var d = $(this).attr('data-href') ? $(this).attr('data-href') : $(this).attr('href');
    $('html,body').stop().animate({
      scrollTop: $(d).offset().top
    }, t);
  });

  /*LAZY LOAD*/
  $('.lazy').lazy({
    effect: "fadeIn",
    effectTime: 200,
    threshold: 0,
    scrollDirection: 'vertical',
    visibleOnly: true,

    onError: function(element) {
      console.log('error loading ' + element.data('src'));
    }

  });


  $('.phone__mask').mask('+38(999)999-99-99');


  $('.counter').counterUp({
    delay: 10,
    time: 1000
  });


  $('.linkTouch').touchTouch();


  $('.slider-for').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: false,
    arrow: true,
    asNavFor: '.slider-nav',
    fade: true
  });


  $('.slider-nav').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: '.slider-for',
    arrows: false,
    dots: false,
    focusOnSelect: true,
    responsive: [

      {
        breakpoint: 576,
        settings: {
          slidesToShow: 2,
          dots: true,
        }
      }

    ]
  });


  $('.slider-for-award').slick({
    slidesToShow: 1,
    dots: false,
    arrow: true,
    asNavFor: '.slider-nav-award',
    fade: true
  });


  $('.slider-nav-award').slick({
    slidesToShow: 4,
    asNavFor: '.slider-for-award',
    arrows: false,
    dots: false,
    focusOnSelect: true,
    responsive: [

      {
        breakpoint: 576,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          dots: true,
        }
      }

    ]
  });
});


/*SWITCH VIDEO GALLERY*/

$("#item1").bind("click", function() {
  $("li").removeClass("activity");
  $("#item1").addClass("activity");
  $("#mainVideo").attr("src", "https://www.youtube.com/embed/YNMNs1h8UfE");
});


$("#item2").bind("click", function() {
  $("li").removeClass("activity");
  $("#item2").addClass("activity");
  $("#mainVideo").attr("src", "https://www.youtube.com/embed/AjtV2tJp28M");
});


$("#item3").bind("click", function() {
  $("li").removeClass("activity");
  $("#item3").addClass("activity");
  $("#mainVideo").attr("src", "https://www.youtube.com/embed/gk9gaqNgfhA");
});


$("#item4").bind("click", function() {
  $("li").removeClass("activity");
  $("#item4").addClass("activity");
  $("#mainVideo").attr("src", "https://www.youtube.com/embed/sGD6whmlyGQ");
});


$("#item5").bind("click", function() {
  $("li").removeClass("activity");
  $("#item5").addClass("activity");
  $("#mainVideo").attr("src", "https://www.youtube.com/embed/SLWLwVKGf1o");
});


$("#item6").bind("click", function() {
  $("li").removeClass("activity");
  $("#item6").addClass("activity");
  $("#mainVideo").attr("src", "https://www.youtube.com/embed/gk9gaqNgfhA");
});


$(window).on('resize orientationchange', function() {
  $('.slider').slick('resize');
});


/*ADD SWIPE FOR GALLERY*/

$(function() {
  $("#sliderBig, #sliderBig-award").swipe({
    //Generic swipe handler for all directions
    swipe: function(event, direction, distance, duration, fingerCount, fingerData) {
      $(this).text("You swiped " + direction);
    }
  });

  //Set some options later
  $("#sliderBig, #sliderBig-award").swipe({
    fingers: 3
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



//E-mail Ajax Send
/*$(".form__mail, .form__mail-site, .formBox__callback").submit(function() {
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
*/

//E-mail Ajax Send

/*$("#modal-recieve-form").validate({

  submitHandler: function() {
    var th = $(".form__mail-1");
    $.ajax({
      type: "POST",
      url: "mail.php", //Change
      data: th.serialize()
    }).done(function() {
      var inst = $('[data-remodal-id=modal-thanks]').remodal();
      inst.open();

      setTimeout(function() {
        // Done Functions
        th.trigger("reset");
      }, 1000);
    });
    return false;
  }
});*/



function initMap() {

  var latlng = new google.maps.LatLng(50.45843182, 30.40665988);
  var settings = {
    zoom: 15,
    center: latlng,
    center: {
      lat: 50.45843182,
      lng: 30.40665988
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
        "color": "#e5e5e5"
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
      "elementType": "labels.text.fill",
      "stylers": [{
        "color": "#757575"
      }]
    }, {
      "featureType": "road.highway",
      "elementType": "geometry",
      "stylers": [{
        "color": "#dadada"
      }]
    }, {
      "featureType": "road.highway",
      "elementType": "labels.text.fill",
      "stylers": [{
        "color": "#616161"
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
        "color": "#c9c9c9"
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
  var myLatlng = new google.maps.LatLng(50.45843182, 30.40665988);

  var myOptions = {
    zoom: 10,
    center: myLatlng,
    scrollwheel: false,
    disableDoubleClickZoom: true,
    mapTypeId: google.maps.MapTypeId.ROADMAP
  }
  var image = 'images/mark.png';
  var beachMarker = new google.maps.Marker({
    position: {
      lat: 50.45843182,
      lng: 30.40665988
    },
    map: map,
    icon: image
      // title: 'Push-k Solutions'
  });

};