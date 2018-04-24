$(document).ready(function() {

  $("body").niceScroll({
    scrollspeed: 60,
    mousescrollstep: 60,
    smoothscroll: true,
    cursorwidth: 10,
    cursorborder: 0,
    cursorcolor: '#d50032',
    cursorborderradius: 2,
    autohidemode: true,
    horizrailenabled: false,
    cursoropacitymin: 1,
    background: false,
    zindex: "9999"
  });

  $('html').addClass('no-overflow-y');

});



/*FIXED SCROLL FOR MENU*/
/*$(document).ready(function() {

  $(window).scroll(function() {
    if ($(this).scrollTop() > 600) {
      $('#fixedTopMenu').addClass('fixed');
    } else if ($(this).scrollTop() < 600) {
      $('#fixedTopMenu').removeClass('fixed');
    }
  });

});*/


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

  };*/

  $('.scrolling__link ').on('click', function(e) {
    e.preventDefault();
    var t = 1500;
    var d = $(this).attr('data-href') ? $(this).attr('data-href') : $(this).attr('href');
    $('html,body').stop().animate({
      scrollTop: $(d).offset().top
    }, t);
  });


  $("gallery").fancybox({
    transitionEffect: "none"

  });
  
  $("certificates").fancybox({
    transitionEffect: "none"

  });



  $('.phone__mask').mask('+380(99)999-99-99');



  $('.slider').slick({
    slidesToShow: 3,
    dots: false,
    arrow: true,
    focusOnSelect: true,
    centerMode: true,
    initialSlide: 1,
    centerPadding: '20px',
    lazyLoad: 'ondemand',

    responsive: [

    {
      breakpoint: 1025,
      settings: {
        slidesToShow: 2
      }
    },

    {
      breakpoint: 768,
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
