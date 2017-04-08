$(window).load(function() {
	$('#preloader').find('i').fadeOut().end().delay(200).fadeOut('slow');
});


$(document).ready(function() {

	$(".nav__icon").click(function() {
		$(this).toggleClass('active');
		$(".nav__list").slideToggle('fast');
	})

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
		owl.trigger('prev.owl.carousel', [700]);
	});

});


