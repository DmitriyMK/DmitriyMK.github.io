$(document).ready(function() {

  $("body").niceScroll({
    scrollspeed: 60,
    mousescrollstep: 60,
    smoothscroll: true,
    cursorwidth: 10,
    cursorborder: 0,
    cursorcolor: '#55c202',
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

  };
  */


  $('.srolling__link').on('click', function(e) {
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

 /* $('.phone__mask').mask('+38(999)999-99-99');


  $('.counter').counterUp({
    delay: 10,
    time: 1000
  });*/


  $('.slider').slick({
    arrows: true,
    infinite: true,
    slidesToShow: 1,
    speed: 500,

  });


});



$(window).on('resize orientationchange', function() {
  $('.slider').slick('resize');
});




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



/*
(function() {

  'use strict';

  // define variables
  var items = document.querySelectorAll(".timeline li");

  // check if an element is in viewport
  // http://stackoverflow.com/questions/123999/how-to-tell-if-a-dom-element-is-visible-in-the-current-viewport
  function isElementInViewport(el) {
    var rect = el.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }

  function callbackFunc() {
    for (var i = 0; i < items.length; i++) {
      if (isElementInViewport(items[i])) {
        items[i].classList.add("in-view");
      }
    }
  }

  // listen for events
  window.addEventListener("load", callbackFunc);
  window.addEventListener("resize", callbackFunc);
  window.addEventListener("scroll", callbackFunc);

})();
*/



/*PRELOADER*/
$(window).load(function() {
	$('#preloader').delay(100).fadeOut('slow');

});