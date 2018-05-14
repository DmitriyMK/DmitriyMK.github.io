

/*FIXED SCROLL FOR MENU*/
$(document).ready(function() {


  $('[data-fancybox]').fancybox({
    loop: true,
    animationEffect: "zoom",
    transitionEffect: "fade",
    transitionDuration: 366,

    clickOutside: "close",
  });

  /*  $(window).scroll(function() {
      if ($(this).scrollTop() > 600) {
        $('#fixedTopMenu').addClass('fixed');
      } else if ($(this).scrollTop() < 600) {
        $('#fixedTopMenu').removeClass('fixed');
      }
    });*/

  });



// init Masonry
var grid = document.querySelector('.grid');

var msnry = new Masonry( grid, {
  itemSelector: '.grid-item',
  columnWidth: '.grid-sizer',
  percentPosition: true
});





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

 if (document.documentElement.clientWidth > 1200) {
  new WOW().init();

};


$('.phone__mask').mask('+38(999)999-99-99');


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



/*PRELOADER*/

$(window).load(function() {
  $('#preloader').delay(100).fadeOut('slow');


  var $grid = $('.grid').masonry({
    itemSelector: '.grid-item',
    percentPosition: true,
    columnWidth: '.grid-sizer',
  });

  
});