/*PRELOADER*/

$(window).load(function() {
	$('#preloader').find('i').fadeOut().end().delay(200).fadeOut('slow');

	var $grid = $('.grid').masonry({
		itemSelector: '.grid-item',
		percentPosition: true,
		columnWidth: '.grid-sizer'
/*		gutter: 1%*/

	});
	// layout Isotope after each image loads
	$grid.imagesLoaded().progress(function() {
		$grid.masonry('layout');
	});
});

/*CAROUSEL*/

var $item = $('.carousel .item'); 
var $wHeight = $(window).height();
$item.eq(0).addClass('active');
$item.height($wHeight); 
$item.addClass('full-screen');

$('.carousel img').each(function() {
  var $src = $(this).attr('src');
  var $color = $(this).attr('data-color');
  $(this).parent().css({
    'background-image' : 'url(' + $src + ')',
    'background-color' : $color
  });
  $(this).remove();
});

$(window).on('resize', function (){
  $wHeight = $(window).height();
  $item.height($wHeight);
});

$('.carousel').carousel({
  interval: 6000,
  pause: "false"
});

/*menu responsive*/
$(function() {
  $('.icon').click(function() {
    
    if($('.items').is(':visible')) {
      $('.items').removeClass('showitems'); 
    }
    else {
      $('.items').addClass('showitems'); 
    }   
 }); 
});
