/*CAROUSEL*/
var $item = $('.carousel .item');
var $wHeight = $(window).height();
$item.eq(0).addClass('active');
$item.height($wHeight);
$item.addClass('full-screen');

$('.carousel img').each(function() {
  var $src = $(this).attr('src');
  $(this).parent().css({
    'background-image': 'url(' + $src + ')'
  });
  $(this).remove();
});

$(window).on('resize', function() {
  $wHeight = $(window).height();
  $item.height($wHeight);
});

$('.carousel').carousel({
  interval: 10000,
  pause: "false"
});

/*MENU*/
$('#toggle').click(function() {
  $(this).toggleClass('active');
  $('#overlay').toggleClass('open');
});

/*FILTER*/
$(function() {
  var selectedClass = "";
  $(".fil-cat").click(function() {
    selectedClass = $(this).attr("data-rel");
    $("#grid").fadeTo(100, 0.1);
    $("#grid figure").not("." + selectedClass).fadeOut().removeClass('scale-anm');
    setTimeout(function() {
      $("." + selectedClass).fadeIn().addClass('scale-anm');
      $("#grid").fadeTo(300, 1);
    }, 300);

  });
});

$('a[data-rel^=lightcase]').lightcase({
  swipe: true
});

/*PRELOADER*/
$(window).load(function() {
  $('#preloader').find('i').fadeOut().end().delay(100).fadeOut('slow');

  var $grid = $('.grid').masonry({
    itemSelector: '.grid-item',
    percentPosition: true,
    columnWidth: '.grid-sizer'

  });
});