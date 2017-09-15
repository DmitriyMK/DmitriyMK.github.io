$(document).ready(function() {

	/*MENU SCROLLING*/
	$('a[href^="#"], *[data-href^="#"]').on('click', function(e) {
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
		smartSpeed:900
	});

	var owl = $('.owl-carousel');
	owl.owlCarousel();

	$('.owl-next').click(function() {
		owl.trigger('next.owl.carousel');
	})

	$('.owl-prev').click(function() {
		owl.trigger('prev.owl.carousel');
	});

	/*CAROUSEL #2*/
	$(".owl-carousel").owlCarousel({
		loop: true,
		center: true,
		items: 1,
		smartSpeed:700,
	});

	var owl = $('.owl-carousel');
	owl.owlCarousel();

	$('.owl-next2').click(function() {
		owl.trigger('next.owl.carousel');
	})

	$('.owl-prev2').click(function() {
		owl.trigger('prev.owl.carousel');
	});


	$('.popup-gallery').magnificPopup({
		delegate: 'a',
		type: 'image',
		tLoading: 'Loading image #%curr%...',
		mainClass: 'mfp-img-mobile',
		gallery: {
			enabled: true,
			navigateByImgClick: true,
			preload: [0,1] // Will preload 0 - before current, and 1 after the current image
		},
		image: {
			tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
			titleSrc: function(item) {
				return item.el.attr('title') + '<small>by SARTO VIKTOR</small>';
			}
		}
	});
});



/*PRELOADER*/
$(window).load(function() {
	$('#preloader').delay(100).fadeOut('slow');
});