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


if (document.documentElement.clientWidth > 1200) {
  $(window).enllax();

};


/*FIXED SCROLL FOR MENU*/
$(document).ready(function() {

  $(window).scroll(function() {
     if ($(this).scrollTop() > 760) {
       $('#fixedTopMenu').addClass('fixed');
     } else if ($(this).scrollTop() < 760) {
       $('#fixedTopMenu').removeClass('fixed');
     }
   });

});


$(document).ready(function() {

  /*RESPONSIVER BURGER MENU*/

  var $menu = $('.menu');

  $('.burger').click(function() {
    $(this).toggleClass('active');
    $('.overlay').toggleClass('open').show;
    /*$menu.toggle();*/
  });

  $(document).mouseup(function(e) {
    if (!$menu.is(e.target) // if the target of the click isn't the container...
      &&
      $menu.has(e.target).length === 0) // ... nor a descendant of the container
    {
      /*$menu.hide();*/
      $('.overlay').removeClass('open');
      $(".burger").removeClass('active');
    }

    $('.burger').click(function() {
      $(this).toggleClass('active');
      $('.overlay').toggleClass('open').show;
      /*$menu.toggle();*/
    });

  });



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



  $('.slider-for').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    dots: false,
    asNavFor: '.slider-nav',
    fade: true,
  });


  $('.slider-nav').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    asNavFor: '.slider-for',
    arrows: true,
    dots: false,
    focusOnSelect: true,

    responsive: [

      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        }
      },

      {
        breakpoint: 700,
        settings: {
          slidesToShow: 2,
        }
      },

      {
        breakpoint: 500,
        settings: {
          slidesToShow: 1,
        }
      }

    ]
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