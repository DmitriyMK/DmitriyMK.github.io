/*PRELOADER*/

$(window).load(function() {
	$('#preloader').find('i').fadeOut().end().delay(200).fadeOut('slow');

	var $grid = $('.grid').masonry({
		itemSelector: '.grid-item',
		percentPosition: true,
		columnWidth: '.grid-sizer'

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


$(document).ready(function() {

	/*TOGGLE EFFECT MENU IN MOBILE DEKSTOP*/
	$('.menu__toggle').click(function() {
		$(".menu").slideToggle('500');
	});

});


/*POPUP GALLERY*/
/*
$(document).ready(function() {
			$('.popup-gallery').magnificPopup({
						delegate: 'a',
						type: 'image',
						tLoading: 'Loading image #%curr%...',
						removalDelay: 300, //delay removal by X to allow out-animation
						mainClass: 'mfp-zoom-in',
						gallery: {
							enabled: true,
							navigateByImgClick: true,
							animate: true,
							preload: [0, 1] // Will preload 0 - before current, and 1 after the current image
						},
						retina: {
							ratio: 1, // Increase this number to enable retina image support.
							// Image in popup will be scaled down by this number.
							// Option can also be a function which should return a number (in case you support multiple ratios). For example:
							// ratio: function() { return window.devicePixelRatio === 1.5 ? 1.5 : 2  }


							replaceSrc: function(item, ratio) {
									return item.src.replace(/\.\w+$/, function(m) {
										return '@2x' + m;
									});
								} // function that changes image source
						},
						image: {
							tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
							titleSrc: function(item) {
								return item.el.attr('title') + '<small>by Elena Moskvi4eva</small>';
							},
						},
	});
});
*/