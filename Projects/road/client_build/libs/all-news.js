$(document).ready(function() {

  $("body").niceScroll({
    scrollspeed: 60,
    mousescrollstep: 60,
    smoothscroll: true,
    cursorwidth: 10,
    cursorborder: 0,
    cursorcolor: '#f0d91a',
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
$(document).ready(function() {

  var $menu = $("#fixedTopMenu");

  $(window).scroll(function() {
    if ($(this).scrollTop() > 35 && $menu.hasClass("default")) {
      $menu.fadeOut(100, function() {
        $(this).removeClass("default")
          .addClass("fixed")
          .fadeIn(100);
      });
    } else if ($(this).scrollTop() < 35 && $menu.hasClass("fixed")) {
      $menu.fadeOut(150, function() {
        $(this).removeClass("fixed")
          .addClass("default")
          .fadeIn(100);
      });
    }
  });
});


/*RESPONSIVER BURGER MENU*/
var $menu = $('.nav');

$('.burger').click(function() {
  $(this).toggleClass('active');
  $('.overlay').toggleClass('open').show;
});


$(document).mouseup(function(e) {
  if (!$menu.is(e.target) // if the target of the click isn't the container...
    &&
    $menu.has(e.target).length === 0) // ... nor a descendant of the container
  {

    $('.overlay').removeClass('open');
    $(".burger").removeClass('active');
  }
});



$(document).ready(function() {

  $(".linkForSubMenu1").click(function() {

    $(this).toggleClass('active');
    $(".nav__list-submenu").slideToggle(300);
  });

  $(".linkForSubMenu2").click(function() {

    $(this).toggleClass('active');
    $(".nav__list-submenu2").slideToggle(300);
  });

  $('.scrolling__link').on('click', function(e) {
    e.preventDefault();
    var t = 1500;
    var d = $(this).attr('data-href') ? $(this).attr('data-href') : $(this).attr('href');
    $('html,body').stop().animate({
      scrollTop: $(d).offset().top
    }, t);
  });

});