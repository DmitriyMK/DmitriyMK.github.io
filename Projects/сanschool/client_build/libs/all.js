$(document).ready(function() {

  $("body").niceScroll({
    scrollspeed: 60,
    mousescrollstep: 60,
    smoothscroll: true,
    cursorwidth: 10,
    cursorborder: 0,
    cursorcolor: '#fb0035',
    cursorborderradius: 2,
    autohidemode: true,
    horizrailenabled: false,
    cursoropacitymin: 1,
    background: false,
    zindex: "9999"
  });

  $('html').addClass('no-overflow-y');

});




$(document).ready(function() {

  if (document.documentElement.clientWidth > 1200) {
    new WOW().init();

  };

  $('.scrolling__link ').on('click', function(e) {
    e.preventDefault();
    var t = 1000;
    var d = $(this).attr('data-href') ? $(this).attr('data-href') : $(this).attr('href');
    $('html,body').stop().animate({
      scrollTop: $(d).offset().top
    }, t);
  });

  /*FIXED SCROLL TO TOP*/


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



  $("gallery").fancybox({
    transitionEffect: "none"

  });

  $("certificates").fancybox({
    transitionEffect: "none"

  });

  $(".js-video-button").modalVideo({
        youtube:{
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


  $('.slider').slick({
    slidesToShow: 3,
    dots: true,
    arrow: true,
    focusOnSelect: true,
    centerMode: true,
    initialSlide: 1,
    centerPadding: '20px',
    lazyLoad: 'ondemand',

    responsive: [

    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 2,

      }
    },

    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        centerMode: false,
      }
    },

    ]

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