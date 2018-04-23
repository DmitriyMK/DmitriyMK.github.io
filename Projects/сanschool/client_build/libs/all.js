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

 $('.phone__mask').mask('+380(99)999-99-99');




/*  $('.slider-for').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: false,
    arrow: true,
    asNavFor: '.slider-nav',
    fade: true
  });


  $('.slider-nav').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: '.slider-for',
    arrows: false,
    dots: false,
    focusOnSelect: true,
    responsive: [

      {
        breakpoint: 576,
        settings: {
          slidesToShow: 2,
          dots: true,
        }
      }

    ]
  });*/


});



/*$(window).on('resize orientationchange', function() {
  $('.slider').slick('resize');
});
*/



// $(".form").submit(function() {
//   var th = $(this);
//   $.ajax({
//     type: "POST",
//     url: "mail.php",
//     data: th.serialize()
//   }).done(function() {

//     var inst = $('[data-remodal-id=modal-thanks]').remodal();
//     inst.open();

//     setTimeout(function() {
//       th.trigger("reset");
//     }, 1000);
//   });
//   return false;
// });
