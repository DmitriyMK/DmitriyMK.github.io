$(document).ready(function () {


  $(".scrolling__link").on("click", function (event) {
    event.preventDefault();
    var id = $(this).attr('href'),

      top = $(id).offset().top;

    $('body,html').animate({
      scrollTop: top
    }, 1000);
  });


  var bLazy = new Blazy();

  $('.phone-mask').mask('+38(099)999-99-99');


  $(".js-video-button").modalVideo({
    youtube: {
      autoplay: 1,
      nocookie: false,
      cc_load_policy: 1,
      color: null,
      controls: 1,
      disablekb: 0,
      enablejsapi: 0,
      end: null,
      fs: 1,
      h1: null,
      iv_load_policy: 1,
      list: null,
      listType: null,
      loop: 0,
      modestbranding: null,
      origin: null,
      playlist: null,
      playsinline: null,
      rel: 0,
      showinfo: 1,
      start: 0,
      wmode: 'transparent',
      theme: 'dark'
    }
  });



  $('.header__slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    dots: true,
    autoplay: true,
    fade: true
  });


  $('.catalog__slider1, .catalog__slider2').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
    dots: true,

    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 2,
          arrows: true
        }
      },
      {
        breakpoint: 420,
        settings: {
          slidesToShow: 1,
          arrows: true
        }
      }
    ]
  });


  $('.media__slider').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    dots: true,
    responsive: [
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 420,
        settings: {
          slidesToShow: 1,
          arrows: true
        }
      }
    ]
  });

  
  // BURGER RESPONSIVE < 992px
  $('.burger').click(function() {
  	$(this).toggleClass('active');
  	$(this).parents('.header__top').find('.overlay').toggleClass('open');
  });


  $(".linkSubmenu").hover(function() {
  	if (document.documentElement.clientWidth > 992) {
      $(this).find(".nav__link").toggleClass("nav__link-active");
    };
  });


  $('.linkSubmenu').click(function() {
  	if (document.documentElement.clientWidth < 992) {

  		$(this).find(".nav__hide").toggleClass("nav__show");
  		$(this).find(".nav__link").toggleClass("nav__link-active");

  	};
  });
});



$(window).on('resize orientationchange', function () {
  $('.slider').slick('resize');
});



$(".form").submit(function () {
  var th = $(this);
  $.ajax({
    type: "POST",
    url: "mail.php",
    data: th.serialize()
  }).done(function () {

    window.location = 'thank.html'

    setTimeout(function () {
      th.trigger("reset");
    }, 1000);
  });
  return false;
});