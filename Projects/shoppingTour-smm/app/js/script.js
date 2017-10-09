$(document).ready(function() {

	/*MENU SCROLLING*/
	$('a[href^="#callback"], *[data-href^="#callback"]').on('click', function(e) {
		e.preventDefault();
		var t = 1000;
		var d = $(this).attr('data-href') ? $(this).attr('data-href') : $(this).attr('href');
		$('html,body').stop().animate({
			scrollTop: $(d).offset().top
		}, t);
	});


	/*GMAP POP-UP*/
	$('.popup-gmaps').magnificPopup({
		disableOn: 319,
		type: 'iframe',
		mainClass: 'mfp-fade',
		removalDelay: 160,
		preloader: false,
		fixedContentPos: false,
	});


	/*PHOTOGALLERY*/
	$('.popup-gallery').magnificPopup({
		delegate: 'a',
		type: 'image',
		tLoading: 'Loading image #%curr%...',
		mainClass: 'mfp-img-mobile',
		gallery: {
			enabled: true,
			navigateByImgClick: true,
			preload: [0, 1] // Will preload 0 - before current, and 1 after the current image
		},
		image: {
			tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
			titleSrc: function(item) {
				return item.el.attr('title') + '<small>Shoping Tour</small>';
			}
		}
	});

	/*VIDEO POP-UP*/
	$('.video').magnificPopup({
		items: {
			src: 'https://www.youtube.com/watch?v=XVFzBQTJTTM',
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

	$('.politics__link').magnificPopup({
		type: 'inline',
		preloader: false,
		focus: '#username',
	});

	$(document).on('click', '.popup-modal-dismiss', function(e) {
		e.preventDefault();
		$.magnificPopup.close();
	});

});


/*ANIMATION LET GO*/
new WOW().init();

jQuery('.tipso').tipso({
	background: '#de3ebe',
	color: '#fff',
	width: '300px',
	position: 'bottom',
});

/*LAZY LOAD*/
$(function() {
	$('.lazy').Lazy({
		// your configuration goes here
		scrollDirection: 'vertical',
		effect: 'fadeIn',
		visibleOnly: true,
		onError: function(element) {
			console.log('error loading ' + element.data('src'));
		}
	});
});

/*CAROUSEL*/
$(".owl-carousel").owlCarousel({
	loop: true,
	center: true,
	items: 1,
	smartSpeed: 400
});

var owl = $('.owl-carousel');
owl.owlCarousel();

$('.owl-next').click(function() {
	owl.trigger('next.owl.carousel');
})

$('.owl-prev').click(function() {
	owl.trigger('prev.owl.carousel');
});



/*EQUAL HEIGHT IN SELECT*/
$(document).ready(function() {

	var highestBox = 0;
	$('.list').each(function() {
		if ($(this).height() > highestBox) {
			highestBox = $(this).height();
		}
	});
	$('.list, .form__attention, .form-ask').height(highestBox);

});

/*CHANGE COLUMN`S COLOR*/
$(document).ready(function() {
	$('.form__item').click(function() {
		$('.form__item').removeClass('active');
		$(this).addClass('active');
	});
});





/*PRELOADER*/
$(window).load(function() {
	$('#preloader').delay(100).fadeOut('slow');
});