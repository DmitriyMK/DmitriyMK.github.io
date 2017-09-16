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

	/*CAROUSEL #1 COMMENT*/
	var owl = $('.comment__carousel');
	owl.owlCarousel();

	$('.owl-next').click(function() {
		owl.trigger('next.owl.carousel');
	})

	$('.owl-prev').click(function() {
		owl.trigger('prev.owl.carousel');
	});

	/*CAROUSEL #2 PUBLICATION*/

	var owlPublic = $('.publication__carousel');
	owlPublic.owlCarousel();

	$('.owl-next2').click(function() {
		owlPublic.trigger('next.owl.carousel');
	})

	$('.owl-prev2').click(function() {
		owlPublic.trigger('prev.owl.carousel');
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
				return item.el.attr('title') + '<small>SARTO VIKTOR</small>';
			}
		}
	});

	$('.popup-gmaps').magnificPopup({
		disableOn: 319,
		type: 'iframe',
		mainClass: 'mfp-fade',
		removalDelay: 160,
		preloader: false,
		fixedContentPos: false,
	});

	$('.publication__link, .politics__link').magnificPopup({
		type: 'inline',
		preloader: false,
		focus: '#username',
	});

	$(document).on('click', '.popup-modal-dismiss', function(e) {
		e.preventDefault();
		$.magnificPopup.close();
	});

});



/*PRELOADER*/
$(window).load(function() {
	$('#preloader').delay(100).fadeOut('slow');
});