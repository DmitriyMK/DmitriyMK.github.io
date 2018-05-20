

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


// init Masonry
var grid = document.querySelector('.grid');

var msnry = new Masonry( grid, {
  itemSelector: '.grid-item',
  columnWidth: '.grid-sizer',
  percentPosition: true,
  horizontalOrder: true
});


/*MENU*/
$('#toggle').click(function() {
  $(this).toggleClass('active');
  $('#overlay').toggleClass('open');
});



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




/*$(".form").submit(function() {
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
});*/



/*PRELOADER*/

$(window).load(function() {
  $('#preloader').delay(100).fadeOut('slow');
  
});