$(document).ready(function() {

  $("body").niceScroll({
    scrollspeed: 70,
    mousescrollstep: 60,
    smoothscroll: true,
    cursorwidth: 8,
    cursorborder: 0,
    cursorcolor: '#ff4200',
    cursorborderradius: 2,
    autohidemode: true,
    horizrailenabled: false,
    cursoropacitymin: 1,
    background: false,
    zindex: "9999"
  });

  $('html').addClass('no-overflow-y');

});



/*FIXED SCROLL TO TOP*/
/*$(document).ready(function() {

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

});*/



$(document).ready(function() {

  /*  if (document.documentElement.clientWidth > 1200) {
      new WOW().init();

    };

    */

  if (document.documentElement.clientWidth > 1200) {
    $(window).enllax();

  };

  $('.scrolling__link').on('click', function(e) {
    e.preventDefault();
    var t = 1500;
    var d = $(this).attr('data-href') ? $(this).attr('data-href') : $(this).attr('href');
    $('html,body').stop().animate({
      scrollTop: $(d).offset().top
    }, t);
  });

  $(".js-video-button").modalVideo({
    youtube: {
      autoplay: 1,
      nocookie: true,
      cc_load_policy: 1,
      color: null,
      controls: 1,
      disablekb: 0,
      enablejsapi: 0,
      end: null,
      fs: 1,
      h1: null,
      iv_load_policy: 1,
      list: null,
      listType: null,
      loop: 0,
      modestbranding: null,
      origin: null,
      playlist: null,
      playsinline: null,
      rel: 0,
      showinfo: 1,
      start: 0,
      wmode: 'transparent',
      theme: 'dark'

    }
  });


  $('.slider__barbecue').slick({
    slidesToShow: 5,
    arrows: false,
    dots: false,
  });


  $('.slider__product').slick({
    slidesToShow: 5,
    arrows: false,
    dots: false,
  });



  $('.slider-for-recipe').slick({
    slidesToShow: 1,
    arrows: false,
    dots: false,
    asNavFor: '.slider-nav-recipe',
    fade: true,
    draggable: false,
    infinite: true,
  });


  $('.slider-nav-recipe').slick({
    slidesToShow: 4,
    asNavFor: '.slider-for-recipe',
    arrows: false,
    dots: false,
    focusOnSelect: true,
    infinite: true,

    responsive: [

      /*    {
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
          }*/

    ]
  });

  $('.slider-review').slick({
    slidesToShow: 1,
    draggable: false,
    infinite: true,
    dots: true,
    fade: true,
  });



  $('.tabletop__item a').click(function() {
    var clicknumber = $(this).data('clicknumber');
    clicknumber++;

    if (clicknumber == 1) {

      $('.tabletop__item a .click__img').removeClass('borderActive');
      $(this).find('.click__img').addClass('borderActive');
      $('#tabletopType').html($(this).data('color'));
      $('.big__item').removeClass('active');
      var selector = '#' + $('.construction__item a .borderActive').data('construction') + $('.tabletop__item a .borderActive').data('color');
      $(selector).addClass('active');
    }

    $('.tabletop__item a').attr('data-clicknumber', 0).off("click.fb-start");
    $(this).attr('data-clicknumber', clicknumber);

    $(this).fancybox({
      loop: false,
      animationEffect: "zoom",
      transitionEffect: "fade",
      transitionDuration: 366,

      clickOutside: "close",
    });
    return false;
  });



  $('.tabletop__item a').click(function() {

    $(".tabletop__item").removeClass("itemActive");
    $(this).parents('.tabletop__item').addClass('itemActive');

  });


  $('.construction__item a').click(function() {
    var clicknumber = $(this).data('clicknumber');
    clicknumber++;

    if (clicknumber == 1) {

      $('.construction__item .click__img').removeClass('borderActive');
      $(this).find('.click__img').addClass('borderActive');
      $('.big__item').removeClass('active');
      var selector = '#' + $('.construction__item a .borderActive').data('construction') + $('.tabletop__item a .borderActive').data('color');
      $(selector).addClass('active');
    }

    $('.construction__item a').attr('data-clicknumber', 0).off("click.fb-start");
    $(this).attr('data-clicknumber', clicknumber);

    $(this).fancybox({
      loop: false,
      animationEffect: "zoom",
      transitionEffect: "fade",
      transitionDuration: 366,

      clickOutside: "close",
    });
    return false;
  });

});

$('.construction__item a').click(function() {

    $(".construction__item").removeClass("itemActive");
    $(this).parents('.construction__item').addClass('itemActive');

  });



$(window).on('resize orientationchange', function() {
  $('.slider').slick('resize');
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

  var latlng = new google.maps.LatLng(48.4410735, 35.0167546);
  var settings = {
    zoom: 17,
    center: latlng,
    center: {
      lat: 48.4410735,
      lng: 35.0187546
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
    /*    styles:*/



  };
  var map = new google.maps.Map(document.getElementById("google-map"), settings);
  var myLatlng = new google.maps.LatLng(48.4410735, 35.0167546);

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
      lat: 48.4410735,
      lng: 35.0167546
    },
    map: map,
    icon: image
      // title: 'Push-k Solutions'
  });

};