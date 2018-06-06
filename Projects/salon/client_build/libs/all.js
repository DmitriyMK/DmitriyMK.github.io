$(document).ready(function() {


  if (document.documentElement.clientWidth > 1200) {

    /*new WOW().init();*/

    $("body").niceScroll({
      scrollspeed: 70,
      mousescrollstep: 60,
      smoothscroll: true,
      cursorwidth: 8,
      cursorborder: 0,
      cursorcolor: '#feaf00',
      cursorborderradius: 2,
      autohidemode: true,
      horizrailenabled: false,
      cursoropacitymin: 1,
      background: false,
      zindex: "9999"
    });

    $('html').addClass('no-overflow-y');

  };

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


  $('.counter').counterUp({
    delay: 10,
    time: 1000
  });


  $('.phone-mask').mask('+38(999)999-99-99');


  $('.slider__present').slick({
    slidesToShow: 7,
    slidesToScroll: 1,
    arrows: false,
    dots: false,
    infinite: true,
  });


  $('.office__slider').slick({
    arrows: true,
    dots: false,
  });


  $('.review__slider').slick({
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: true,
    dots: true,
  });


  $('[data-fancybox]').fancybox({
    loop: true,
    animationEffect: "zoom",
    transitionEffect: "fade",
    transitionDuration: 366,

    clickOutside: "close",
  });


 $('.tabs__link').click(function() {

  var tabID = $(this).attr('data-tabs');

  $(this).addClass('active').siblings().removeClass('active');

  $('#tabs-' + tabID).addClass('active').siblings().removeClass('active');
  
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