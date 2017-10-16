$(document).ready(function() {

	$(function() {
		$('.header__link').magnificPopup({
			type: 'inline',
			preloader: false,
			focus: '#name',
		});
		$(document).on('click', '.popup-modal-dismiss', function(e) {
			e.preventDefault();
			$.magnificPopup.close();
		});
	});

	$(function() {
		$('.video__link').magnificPopup({
			type: 'inline',
			preloader: false,
			focus: '#name',
		});
		$(document).on('click', '.popup-modal-dismiss', function(e) {
			e.preventDefault();
			$.magnificPopup.close();
		});
	});

	/*CAROUSEL*/
	$(".owl-carousel").owlCarousel({
		center: true,
		loop: true,
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
				return item.el.attr('title') + '<small></small>';
			}
		}
	});

	$('.grid').masonry({
		temSelector: '.grid-item',
		percentPosition: true,
		columnWidth: '.grid-sizer',
	});

});

/*PRELOADER*/
$(window).load(function() {
	$('#preloader').delay(100).fadeOut('slow');
});