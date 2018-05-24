/*FIXED SCROLL FOR MENU*/
$(document).ready(function() {


  $('[data-fancybox]').fancybox({
    loop: true,
    animationEffect: "zoom",
    transitionEffect: "fade",
    transitionDuration: 366,
    protect: true,

    clickOutside: "close",
  });



  /*MENU*/
  $('#toggle').click(function() {
    $(this).toggleClass('active');
    $('#overlay').toggleClass('open');
  });

});


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
