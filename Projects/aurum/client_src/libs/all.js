$(document).ready(function() {

  if (document.documentElement.clientWidth > 1200) {

    $(window).enllax();

    new WOW().init();

    $("body").niceScroll({
      scrollspeed: 70,
      mousescrollstep: 60,
      smoothscroll: true,
      cursorwidth: 8,
      cursorborder: 0,
      cursorcolor: '#cd0009',
      cursorborderradius: 2,
      autohidemode: true,
      horizrailenabled: false,
      cursoropacitymin: 1,
      background: false,
      zindex: "9999"
    });

    $('html').addClass('no-overflow-y');

  };


  $('.scrolling__link').on('click', function(e) {
    e.preventDefault();
    var t = 1500;
    var d = $(this).attr('data-href') ? $(this).attr('data-href') : $(this).attr('href');
    $('html,body').stop().animate({
      scrollTop: $(d).offset().top
    }, t);
  });


  var bLazy = new Blazy();


  $('.phone-mask').mask('+38(999)999-99-99');


  $('.slider-for').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    dots: false,
    fade: true,
    asNavFor: '.slider-nav'
  });

  $('.slider-nav').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    asNavFor: '.slider-for',
    dots: false,
    focusOnSelect: true,
    responsive: [

      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
        }
      }, {
        breakpoint: 500,
        settings: {
          slidesToShow: 2,
        }
      },

    ]
  });

  $('.photo__slider').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    dots: false,
    responsive: [

      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          dots: true
        }
      }
    ]
  });

  $('.review__slider-for').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    dots: true,
    fade: true,
    asNavFor: '.review__slider-nav'
  });

  $('.review__slider-nav').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: '.review__slider-for',
    arrows: true,
    dots: false,
    focusOnSelect: true,
    centerMode: true,
    centerPadding: '20px',
    responsive: [

      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          fade: true
        }
      }

    ]
  });



  $('[data-fancybox]').fancybox({
    loop: true,
    animationEffect: "zoom",
    transitionEffect: "tube",
    transitionDuration: 600,
    clickOutside: "close",
    protect: true,
    modal: false,

    touch: {
      vertical: true,
      momentum: true
    },
  });

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