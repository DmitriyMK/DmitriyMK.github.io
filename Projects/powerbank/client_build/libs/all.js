var price = 9999999999;

$(document).ready(function() {

  if (document.documentElement.clientWidth > 1200) {

    new WOW().init();

    $("body").niceScroll({
      scrollspeed: 70,
      mousescrollstep: 60,
      smoothscroll: true,
      cursorwidth: 8,
      cursorborder: 0,
      cursorcolor: '#fe4980',
      cursorborderradius: 2,
      autohidemode: true,
      horizrailenabled: false,
      cursoropacitymin: 1,
      background: false,
      zindex: "9999"
    });

    $('html').addClass('no-overflow-y');
  };


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



  $('.product__slider-decor').slick({

    dots: false,
    arrow: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    rows: 2,
    infinite: true,
    slidesToScroll: 1,
    infinite: false,
    lazyLoad: 'ondemand',

    responsive: [{
      breakpoint: 768,
      settings: {
        slidesToShow: 3,
      }
    }, ]
  });


  $('.container').each(function() {
    slideNumber = 0;
    $(this).find('.present__item').each(function() {
      slideNumber++;
    })
    if (slideNumber > 3) {

      $(this).find('.present').slick({

        slidesToShow: 4,
        infinite: false,
        dots: false,
        arrow: true,

        responsive: [{
          breakpoint: 768,
          settings: {
            slidesToShow: 3,
          }
        }, ]

      });

    };
  })

});



/*
 */
/*
if(sliderItem > 3) {
*/

/*  

};*/



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


$(document).ready(function() {

  $('.scrolling__link').on('click', function(e) {
    e.preventDefault();
    var t = 1500;
    var d = $(this).attr('data-href') ? $(this).attr('data-href') : $(this).attr('href');
    $('html,body').stop().animate({
      scrollTop: $(d).offset().top
    }, t);
  });


  $('.decorSection1').each(function() {
    $(this).plaxmove({
      ratioH: 0.0055,
      ratioV: 0.0200,
    });
  });

  $('.decorSection4').each(function() {
    $(this).plaxmove({
      ratioH: 0.0095,
      ratioV: 0.0100,
    });
  });

  $('.decorSection7').each(function() {
    $(this).plaxmove({
      ratioH: -0.0055,
      ratioV: 0.0255,
      invertV: 0.0185,
    });
  });

  $('.decorSection10').each(function() {
    $(this).plaxmove({
      ratioH: 0.0055,
      ratioV: 0.0200,
    });
  });

  $('.decorSection12').each(function() {
    $(this).plaxmove({
      ratioH: -0.0055,
      ratioV: 0.0255,
      invertV: 0.0185,
    });
  });

  $('.decorSection18').each(function() {
    $(this).plaxmove({
      ratioH: -0.0055,
      ratioV: 0.0255,
      invertV: 0.0185,
    });
  });

});



if (document.documentElement.clientWidth > 991) {

  $(window).scroll(function() {


    if ($(this).scrollTop() > 800) {
      $('#fixedTopMenu').removeClass('menuHide');
      $('#fixedTopMenu').addClass('fixed');

    } else if ($(this).scrollTop() < 800) {
      $('#fixedTopMenu').addClass('menuHide');
      $('#fixedTopMenu').removeClass('fixed');
    };



    if ($(this).scrollTop() > 20) {
      $('#fixedTopMenu').removeClass('menuDefault');

    } else if ($(this).scrollTop() < 20) {
      $('#fixedTopMenu').addClass('menuDefault');
    };


    if ($(this).scrollTop() > 250) {
      $('#fixedTopMenu').removeClass('menuResize');

    } else if ($(this).scrollTop() < 250) {
      $('#fixedTopMenu').addClass('menuResize');
    };

  });
};



$(document).ready(function() {

  $('.phone-mask').mask('+38(999)999-99-99');


  $('[data-fancybox]').fancybox({
    loop: true,
    animationEffect: "zoom",
    transitionEffect: "fade",
    transitionDuration: 366,

    clickSlide: "close",
    modal: false,
  });


  $('.product__decor').click(function() {
    var selector = '#' + $(this).data('decor');
    $('.bigPhoto__item.active').removeClass('active');
    $(selector).addClass('active');
    $('.product__decor .img-active').removeClass('img-active');
    $(this).children('.img__wrap').addClass('img-active');
  })


  $('.present-radio').change(function() {
    $(this).parents('.present').find('.present__img').removeClass('presentActive');
    $('.present__item a.present__img').off("click.fb-start");
    var $block = $(this).parents('.present__item');
    $block.find('.present__img').addClass('presentActive').fancybox({

      loop: false,
      animationEffect: "zoom",
      transitionEffect: "fade",
      transitionDuration: 366,

      clickOutside: "close",
    });
  });


  $('.present__item a.present__img').click(function(event) {
    if (!$(this).hasClass('presentActive')) {
      $(this).parents('.present__item').find('.present-radio').trigger('click');
      return false;
    }
  });

  $('.present__img.presentActive').fancybox({
    loop: false,
    animationEffect: "zoom",
    transitionEffect: "fade",
    transitionDuration: 366,

    clickOutside: "close",
  });


});



$(window).on('resize orientationchange', function() {
  $('.slider').slick('resize');
});



$(".form").submit(function() {
  var th = $(this);
  var $active_big = $('.bigPhoto__item.active');
  var selector = '.capacity' + capacity + ' input:checked';
  console.log(selector)

  var $active_podarok = $(selector);
  var podarok = 'no';
  if ($active_podarok[0])
    podarok = $active_podarok.val();

  var whatform = $active_big.data('capacity') + 'mA*h>' + $active_big.data('decor') + ' PLUS podarok ' + podarok + '; ' + price + 'грн';

  console.log(whatform);
  th.children('input[name="whatform"]').val(whatform);

  $.ajax({
    type: "POST",
    url: "/mail.php",
    data: th.serialize()
  }).done(function() {

    var inst = $('[data-remodal-id=modal-thanks]').remodal();
    inst.open();

    setTimeout(function() {
      th.trigger("reset");
    }, 1000);

    console.log(th.serialize());

  });
  return false;
});