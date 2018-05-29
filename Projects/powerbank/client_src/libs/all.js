
$(document).ready(function() {


  if (document.documentElement.clientWidth > 1200) {

/*    new WOW().init();*/

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


  $('.decorSection').plaxmove({
    ratioH:0.015,
    ratioV:0.015
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
    if ($(this).scrollTop() > 700) {
      $('#fixedTopMenu').addClass('fixed');
    } else if ($(this).scrollTop() < 700) {
      $('#fixedTopMenu').removeClass('fixed');
    }
  });
};

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