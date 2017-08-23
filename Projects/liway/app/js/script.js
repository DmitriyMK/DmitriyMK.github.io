$('.video').magnificPopup({
  items: {
    src: 'https://www.youtube.com/watch?v=bqOQG0IquaM'

  },
  type: 'iframe',
  iframe: {
    markup: '<div class="mfp-iframe-scaler">' +
      '<div class="mfp-close"></div>' +
      '<iframe class="mfp-iframe" frameborder="0" allowfullscreen></iframe>' +
      '</div>',
    patterns: {
      youtube: {
        index: 'youtube.com/',
        id: 'v=',
        src: '//www.youtube.com/embed/%id%?autoplay=1'
      }
    },
    srcAction: 'iframe_src',
  }
});

$('.video-prev').magnificPopup({
  items: {
    src: 'https://www.youtube.com/watch?v=f6HGmOCQGSg'
  },
  type: 'iframe',
  iframe: {
    markup: '<div class="mfp-iframe-scaler">' +
      '<div class="mfp-close"></div>' +
      '<iframe class="mfp-iframe" frameborder="0" allowfullscreen></iframe>' +
      '</div>',
    patterns: {
      youtube: {
        index: 'youtube.com/',
        id: 'v=',
        src: '//www.youtube.com/embed/%id%?autoplay=1'
      }
    },
    srcAction: 'iframe_src',
  }
});

//E-mail Ajax Send
$("form.callback").submit(function() {
  var th = $(this);
  $.ajax({
    type: "POST",
    url: "mail.php",
    data: th.serialize()
  }).done(function() {
    $(th).find('.success').addClass('active').css("display", "flex").hide().fadeIn();
    setTimeout(function() {
      $(th).find('.success').removeClass('active').fadeOut();
      th.trigger("reset");
    }, 5000);
  });
  return false;
});

/*PRELOADER*/
$(window).load(function() {
  $('#preloader').delay(1000).fadeOut('slow');

});