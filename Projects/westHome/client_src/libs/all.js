$(document).ready(function() {


  if (document.documentElement.clientWidth > 1200) {

    new WOW().init();

    $("body").niceScroll({
      scrollspeed: 70,
      mousescrollstep: 60,
      smoothscroll: true,
      cursorwidth: 8,
      cursorborder: 0,
      cursorcolor: '#ff4200',
      cursorborderradius: 2,
      autohidemode: true,
      horizrailenabled: false,
      cursoropacitymin: 1,
      background: false,
      zindex: "9999"
    });

    $('html').addClass('no-overflow-y');

  };

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


  $('.counter').counterUp({
    delay: 10,
    time: 1000
  });


  $('.phone-mask').mask('+38(999)999-99-99');

  $('.review-slider').slick({

    arrows: true,
    dots: true,
    focusOnSelect: true,
    infinite: false,
    fade: true,
    lazyLoad: 'ondemand',

  });


  $(".stone__item-active a").fancybox({
    arrows: true,
    dots: true,
    focusOnSelect: true,
    infinite: false,
    fade: true,
  });


  $('.stone__item a').click(function() {

    if (!$(this).parents('.stone__item').hasClass('stone__item-active')) {
      $(this).parents('.stone__box').find(".stone__item").removeClass("stone__item-active");
      $(this).parents('.stone__item').addClass('stone__item-active');
      $(this).parents('.catalog__box').find(".catalog__item.catalog__item-active").removeClass("catalog__item-active");
      $('#' + $(this).data('model')).addClass('catalog__item-active');
      $(this).parents('.catalog__box').find('.colorStone').html($(this).children('img').data('color'))
      $('.colorMaterial input[name="whatform2"]').val($(this).children('img').data('color'));

    }



    $('.stone__item a').off("click.fb-start");

    $(this).fancybox({

      arrows: true,
      dots: true,
      focusOnSelect: true,
      infinite: false,
      fade: true,
    });

    return false;
  });


});



$(window).on('resize orientationchange', function() {
  $('.slider').slick('resize');
});


var bLazy = new Blazy();



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