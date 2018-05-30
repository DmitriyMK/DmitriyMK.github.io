$(document).ready(function() {



  if (document.documentElement.clientWidth > 1200) {

    new WOW().init();

    $("body").niceScroll({
      scrollspeed: 70,
      mousescrollstep: 60,
      smoothscroll: true,
      cursorwidth: 8,
      cursorborder: 0,
      cursorcolor: '#fe4980',
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


  $('.decorSection1').plaxmove({
    ratioH: 0.0055,
    ratioV: 0.0200,
  });

  $('.decorSection4').plaxmove({
    ratioH: 0.0095,
    ratioV: 0.0100,
  });

  $('.decorSection7').plaxmove({
    ratioH: -0.0055,
    ratioV: 0.0255,
    invertV: 0.0185,
  });


$('.decorSection10').plaxmove({
    ratioH: 0.0055,
    ratioV: 0.0200,
  });

$('.decorSection12').plaxmove({
    ratioH: -0.0055,
    ratioV: 0.0255,
    invertV: 0.0185
  });

$('.decorSection18').plaxmove({
    ratioH: -0.0055,
    ratioV: 0.0255,
    invertV: 0.0185,
  });







  /*  $('.slider-for-recipe').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      dots: false,
      asNavFor: '.slider-nav-recipe',
      fade: true,
      draggable: false,
      infinite: true,

    });*/


  /*  $('.slider-nav-recipe').slick({
      slidesToShow: 4,
      slidesToScroll: 1,
      asNavFor: '.slider-for-recipe',
      arrows: false,
      dots: false,
      focusOnSelect: true,
      infinite: true,
      centerMode: false,

      responsive: [

      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          arrows: true,

        }
      },

      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,

          arrows: true,
        }
      },

      ]

    });
    */

});


/*
$(window).on('resize orientationchange', function() {
  $('.slider').slick('resize');
});
*/


$(document).ready(function() {

  if (document.documentElement.clientWidth > 991) {

    $(window).scroll(function() {


      if ($(this).scrollTop() > 800) {
        $('#fixedTopMenu').removeClass('menuHide');
        $('#fixedTopMenu').addClass('fixed');

      } else if ($(this).scrollTop() < 800) {
        $('#fixedTopMenu').addClass('menuHide');
        $('#fixedTopMenu').removeClass('fixed');
      };



      if ($(this).scrollTop() > 20) {
        $('#fixedTopMenu').removeClass('menuDefault');

      } else if ($(this).scrollTop() < 20) {
        $('#fixedTopMenu').addClass('menuDefault');
      };


      if ($(this).scrollTop() > 250) {
        $('#fixedTopMenu').removeClass('menuResize');

      } else if ($(this).scrollTop() < 250) {
        $('#fixedTopMenu').addClass('menuResize');
      };

    });
  };

});



$('.phone-mask').mask('+38(999)999-99-99');



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