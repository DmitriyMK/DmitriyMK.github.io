$(document).ready(function() {
  if (document.documentElement.clientWidth > 1200) {

    $("body").niceScroll({
      scrollspeed: 70,
      mousescrollstep: 60,
      smoothscroll: true,
      cursorwidth: 8,
      cursorborder: 0,
      cursorcolor: '#fff200',
      cursorborderradius: 2,
      autohidemode: true,
      horizrailenabled: false,
      cursoropacitymin: 1,
      background: false,
      zindex: "9999"
    });

    $('html').addClass('no-overflow-y');

  };


  $('.scrolling__link').on('click', function(e) {
    e.preventDefault();
    var t = 1500;
    var d = $(this).attr('data-href') ? $(this).attr('data-href') : $(this).attr('href');
    $('html,body').stop().animate({
      scrollTop: $(d).offset().top - 70
    }, t);
  });


  $('.tabs__link').click(function() {
    var tabID = $(this).attr('data-tabs');

    $(this).addClass('tabs__link-active').siblings().removeClass('tabs__link-active');
    $('#tabs-' + tabID).addClass('tabs__content-active').siblings().removeClass('tabs__content-active');
  });

  // $('.tabs__content ').each(function() {
  //   slideNumber = 0;
  //   $(this).find('.product__slide').each(function() {
  //     slideNumber++;
  //   })
  //   if (slideNumber > 2) {
  //     $(this).find('.product__slider').slick({
  //       slidesToShow: 3,
  //       slidesToScroll: 1,
  //       infinite: false,
  //       arrows: true,
  //       dots: true,
  //       responsive: [
  //         {
  //           breakpoint: 992,
  //           settings: {
  //             slidesToShow: 2,
  //           }
  //         },
  //         {
  //           breakpoint: 767,
  //           settings: {
  //             slidesToShow: 1,
  //             fade: true,
  //           }
  //         },
  //       ]

  //     });

  //   };
  // })


  $('.phone-mask').mask('+38(999)999-99-99');


  $('.product__slider-color').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    arrows: false,
    dots: true,
  });


  $('.brand__list').slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    arrows: true,
    dots: false,
    autoplay: true,
    pauseOnHover: true,

    responsive: [

    {
      breakpoint: 992,
      settings: {
        slidesToShow: 4,
      }
    },

    {
      breakpoint: 767,
      settings: {
        slidesToShow: 2,
      }
    },

    {
      breakpoint: 400,
      settings: {
        slidesToShow: 1,
      }
    },

    ]

  });


  $('[data-fancybox]').fancybox({
    arrows: true,
    dots: true,
    focusOnSelect: true,
    infinite: false,
    fade: true,
  });


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
});


/*RESPONSIVER BURGER MENU*/

var $menu = $('.nav');

$('.burger').click(function() {
  $('.burger').toggleClass('active');
  $('.overlay').toggleClass('open').show;
});


$('.header__link').click(function() {
  $(".burger").removeClass('active').fast;
  $('.overlay').removeClass('open').fast;
});


$(document).mouseup(function(e) {
  if (!$menu.is(e.target) && $menu.has(e.target).length === 0) {
    $(".burger").removeClass('active');
    $('.overlay').removeClass('open');
  }
});


if (document.documentElement.clientWidth > 991) {

  $(window).scroll(function() {
    if ($(this).scrollTop() > 270) {
      $('#fixedTopMenu').addClass('fixed');
    } else if ($(this).scrollTop() < 270) {
      $('#fixedTopMenu').removeClass('fixed');
    };
  });
};




$(window).load(function() {

  $('.tabs__content ').each(function() {
    slideNumber = 0;
    $(this).find('.product__slide').each(function() {
      slideNumber++;
    })

    if (document.documentElement.clientWidth > 991) {
      if (slideNumber > 2) {
        $(this).find('.product__slider').slick({
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: false,
          arrows: true,
          dots: true,
          responsive: [{
            breakpoint: 992,
            settings: {
              slidesToShow: 2,
            }
          }, 
          // {
          //   breakpoint: 767,
          //   settings: {
          //     slidesToShow: 1,
          //     fade: true,
          //     arrows: false,
          //     draggable: false,
          //   }
          // }, 
          ]

        });
      };
    };

    if (document.documentElement.clientWidth < 991) {
      if (slideNumber > 1) {
        $(this).find('.product__slider').slick({
          // slidesToShow: 1,
          // slidesToScroll: 1,
          // infinite: false,
          // arrows: true,
          // dots: true,
          

          // responsive: [{
          //   breakpoint: 992,
          //   settings: {
          //     slidesToShow: 2,
          //   }
          // }, {
          //   breakpoint: 767,
          //   settings: {
            arrows: true,
            dots: true,
            slidesToShow: 1,
            fade: true,
            swipe: false,
            infinite: false,
          //   }
          // }, 
          // ]

        });
      };
    };
  })

  // $(window).on('resize orientationchange', function() {
  //   $('.slider').slick('resize');
  // });

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