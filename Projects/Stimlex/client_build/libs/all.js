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

    });
    */

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



  $('[data-fancybox]').fancybox({
    loop: false,
    animationEffect: "zoom",
    transitionEffect: "fade",
    transitionDuration: 366,

    clickOutside: "close",
  });

});




/*SWITCH BARBECUE GALLERY*/

$(".crasia").bind("click", function() {

  $(".construction img").removeClass("borderActive");
  $(".click__imgCrasia").addClass("borderActive");

});


$(".steel").bind("click", function() {

  $(".construction img").removeClass("borderActive");
  $(".click__imgSteel").addClass("borderActive"); //Рамочки

  $(".construction img").removeClass("borderActive");
  $(".click__imgCrasia").addClass("borderActive");

});


$(".steel").bind("click", function() {

  $(".construction img").removeClass("borderActive");
  $(".click__imgSteel").addClass("borderActive");

});


$(".labradorit").bind("click", function() {
  $(".tabletop img").removeClass("borderActive");
  $(".click__imgLabr").addClass("borderActive");

$(".labradorit").bind("click", function() {
  $(".tabletop img").removeClass("borderActive");
  $(".click__imgLabr").addClass("borderActive"); //Рамочки

  $(".tabletopType").text("«Лабрадорит»"); // Изменение текста в описании

  $(".big__item").removeClass("active");
  $("#CrasiaBLF").addClass("active");  //Изначально display: none. при добавлении класа active, display: block;
});


$(".megerichka").bind("click", function() {
  $(".tabletop img").removeClass("borderActive");
  $(".click__imgMeger").addClass("borderActive");

  $(".tabletopType").text("«Межеричка»");

  $(".tabletopType").text("«Лабрадорит»");

  $(".big__item").removeClass("active");
  $("#CrasiaBLF").addClass("active");
});


$(".megerichka").bind("click", function() {
  $(".tabletop img").removeClass("borderActive");
  $(".click__imgMeger").addClass("borderActive");

  $(".tabletopType").text("«Межеричка»");

  $(".big__item").removeClass("active");
  $("#CrasiaBMF").addClass("active");
});


  $(".construction img").removeClass("borderActive");
  $(".click__imgSteel").addClass("borderActive");

});

$(".pokostovskiy").bind("click", function() {
  $(".tabletop img").removeClass("borderActive");
  $(".click__imgPokost").addClass("borderActive");

  $(".tabletopType").text("«Покостовский»");

  $(".big__item").removeClass("active");
  $("#CrasiaBPF").addClass("active");
});

$(".labradorit").bind("click", function() {
  $(".tabletop img").removeClass("borderActive");
  $(".click__imgLabr").addClass("borderActive");

  $(".tabletopType").text("«Лабрадорит»");

  $(".big__item").removeClass("active");
  $("#CrasiaBLF").addClass("active");
});


$(".megerichka").bind("click", function() {
  $(".tabletop img").removeClass("borderActive");
  $(".click__imgMeger").addClass("borderActive");

  $(".tabletopType").text("«Межеричка»");

  $(".big__item").removeClass("active");
  $("#CrasiaBMF").addClass("active");
});


$(".pokostovskiy").bind("click", function() {
  $(".tabletop img").removeClass("borderActive");
  $(".click__imgPokost").addClass("borderActive");

  $(".tabletopType").text("«Покостовский»");

  $(".big__item").removeClass("active");
  $("#CrasiaBPF").addClass("active");
});

/*
  



  $("#labradorit").bind("click", function() {

/*$("#labradorit").bind("click", function() {

    $(".tabletop img").removeClass("borderActive");
    $(".click__imgLabr").addClass("borderActive");

    $(".tabletopType").text("«Лабрадорит»");

    $(".big__item").removeClass("active");
    $("#SteelBLF").addClass("active");
  });


  $("#megerichka").bind("click", function() {
    $(".tabletop img").removeClass("borderActive");
    $(".click__imgMeger").addClass("borderActive");

    $(".tabletopType").text("«Межеричка»");

    $(".big__item").removeClass("active");
    $("#SteelBMF").addClass("active");
  });


  $("#pokostovskiy").bind("click", function() {
    $(".tabletop img").removeClass("borderActive");
    $(".click__imgPokost").addClass("borderActive");



/*$("#labradorit").bind("click", function() {
    $(".tabletop img").removeClass("borderActive");
    $(".click__imgLabr").addClass("borderActive");

    $(".tabletopType").text("«Лабрадорит»");

    $(".big__item").removeClass("active");
    $("#SteelBLF").addClass("active");
  });


  $("#megerichka").bind("click", function() {
    $(".tabletop img").removeClass("borderActive");
    $(".click__imgMeger").addClass("borderActive");

    $(".tabletopType").text("«Межеричка»");

    $(".big__item").removeClass("active");
    $("#SteelBMF").addClass("active");
  });


  $("#pokostovskiy").bind("click", function() {
    $(".tabletop img").removeClass("borderActive");
    $(".click__imgPokost").addClass("borderActive");


    $(".tabletopType").text("«Покостовский»");

    $(".big__item").removeClass("active");
    $("#SteelBPF").addClass("active");
  });*/



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