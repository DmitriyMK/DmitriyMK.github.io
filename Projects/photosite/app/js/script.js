
/*PRELOADER*/

$(window).on('load', function() {
	var $preloader = $('#page-preloader'),
		$loader = $preloader.find('.loader');
	$loader.fadeOut();
	$preloader.delay(250).fadeOut('slow');
});

$(window).on('load', function() {
	/*MASONRY PLUGIN*/
	$('.grid').masonry({
		// options
		columnWidth: '.grid-item',
		gutter: 10
	});
});

$(document).ready(function() {
	/*MASONRY PLUGIN*/
	$('.grid').masonry({
	// options
	columnWidth: '.grid-item',
	gutter: 10
});

/*TOGGLE EFFECT MENU IN MOBILE DEKSTOP*/
	$('.menu').click(function() {
		$(".menu-container__list").slideToggle('5000');
	});
});


/*POPUP GALLERY*/
	$(function() {
	// Initialize the gallery
	$('.thumbs a').touchTouch();
});

//Аякс отправка форм
//Документация: http://api.jquery.com/jquery.ajax/
$("#callback").submit(function() {
	$.ajax({
		type: "POST",
		url: "mail.php",
		data: $(this).serialize()
	}).done(function() {
		alert("Спасибо за заявку!");
		setTimeout(function() {

		}, 1000);
	});
	return false;
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