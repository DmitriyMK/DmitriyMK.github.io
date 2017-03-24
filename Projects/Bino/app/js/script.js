$(document).ready(function() {

  /*CAROUSEL*/
  $(".owl-carousel").owlCarousel({
    center: true,
    items: 1,
    loop: true
  });
  var owl = $('.owl-carousel');
  owl.owlCarousel();
  $('.owl-next').click(function() {
    owl.trigger('next.owl.carousel');
  })
  $('.owl-prev').click(function() {
    // With optional speed parameter
    // Parameters has to be in square bracket '[]'
    owl.trigger('prev.owl.carousel', [700]);
  });

});

// ===== Scroll to Top ==== 
$(window).scroll(function() {
    if ($(this).scrollTop() >= 400) {        
        $('#scrollToTop').fadeIn(200);    
    } else {
        $('#scrollToTop').fadeOut(200);   
    }
});
$('#scrollToTop').click(function() {      
    $('body,html').animate({
        scrollTop : 0                       
    }, 500);
});


/*STICKY MENU*/
var num = 52; //number of pixels before modifying styles

$(window).bind('scroll', function () {
    if ($(window).scrollTop() > num) {
        $('.navigation__list').addClass('fixed');
    } else {
        $('.navigation__list').removeClass('fixed');
    }
});