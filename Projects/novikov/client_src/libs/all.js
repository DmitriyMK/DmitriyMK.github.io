$(document).ready(function() {


  if (document.documentElement.clientWidth > 1200) {

    // new WOW().init();

    $("body").niceScroll({
      scrollspeed: 70,
      mousescrollstep: 60,
      smoothscroll: true,
      cursorwidth: 8,
      cursorborder: 0,
      cursorcolor: '#cfad38',
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


  $('[data-fancybox]').fancybox({
    arrows: true,
    dots: true,
    focusOnSelect: true,
    infinite: false,
    fade: true,

  });


  $('.leather').slick({

    dots: false,
    arrow: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    rows: 3,
    infinite: false,

    // responsive: [{
    //   breakpoint: 768,
    //   settings: {
    //     slidesToShow: 3,
    //   }
    // }, 
    // ]
    // 
  });

  $('.alcantara').slick({

    dots: false,
    arrow: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    rows: 3,
    infinite: false,

  });

  $('.review__box').slick({
    dots: true,
    arrow: true,
    fade: true,
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