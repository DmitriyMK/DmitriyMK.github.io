$(document).ready(function() {

	/*CAROUSEL*/
	$(".owl-carousel").owlCarousel({
		center: true,
		items: 1,
		loop: true
	});
	var owl = $('.owl-carousel');
	owl.owlCarousel();
	$('.owl-next').click(function() {
		owl.trigger('next.owl.carousel');
	})
	$('.owl-prev').click(function() {
		// With optional speed parameter
		// Parameters has to be in square bracket '[]'
		owl.trigger('prev.owl.carousel', [700]);
	});

});

/*FIXED SCROLL FOR MENU*/
jQuery(function($) {
	$(window).scroll(function() {
		if ($(this).scrollTop() > 60) {
			$('#navigation').addClass('fixed');
		} else if ($(this).scrollTop() < 60) {
			$('#navigation').removeClass('fixed');
		}
	});
});
