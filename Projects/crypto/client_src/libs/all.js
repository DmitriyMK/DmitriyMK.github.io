$(document).ready(function() {

  if (document.documentElement.clientWidth > 1200) {

    // new WOW().init();

    $("body").niceScroll({
      scrollspeed: 70,
      mousescrollstep: 60,
      smoothscroll: true,
      cursorwidth: 8,
      cursorborder: 0,
      cursorcolor: '#de390a',
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



    $('.review__slider').slick({
      slidesToShow: 2,
      slidesToScroll: 1,
      arrows: true,
      dots: true,
      infinite: false,
      lazyLoad: 'ondemand',

      responsive: [

      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
        }
      },

      ]

    });
  

});



$(window).on('resize orientationchange', function() {
  $('.slider').slick('resize');
});