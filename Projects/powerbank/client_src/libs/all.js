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


  $(".js-video-button").modalVideo({
    youtube: {
      autoplay: 1,
      nocookie: false,
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

   $('.product__slider-decor').slick({
            
      dots: false,
      arrow: true,
      slidesToShow: 5,
      slidesToScroll: 1,
      rows: 2,
/*      slidesPerRow: 5,*/


      infinite: true,
/*      focusOnSelect: true,*/
      slidesToScroll: 1,


      infinite: false,


      responsive: [
/*
        {
          breakpoint: 1600,
          settings: {
            slidesToShow: 5,
          }
        },*/


      ]

    });

});


/*RESPONSIVER BURGER MENU*/

var $menu = $('.nav');

$('.burger').click(function() {

  $('.burger').toggleClass('active');
  $('.overlay').toggleClass('open').show;

});


$('.header__link').click(function() {

  $(".burger").removeClass('active').fast;
  $('.overlay').removeClass('open').fast;

});



$(document).mouseup(function(e) {
  if (!$menu.is(e.target) && $menu.has(e.target).length === 0) {

    $(".burger").removeClass('active');
    $('.overlay').removeClass('open');

  }
});


$(document).ready(function() {

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
    invertV: 0.0185,
  });

  $('.decorSection18').plaxmove({
    ratioH: -0.0055,
    ratioV: 0.0255,
    invertV: 0.0185,
  });

});



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



$(document).ready(function() {

  $('.phone-mask').mask('+38(999)999-99-99');


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