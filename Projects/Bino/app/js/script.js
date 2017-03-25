$(window).load(function() {
	$('#preloader').find('i').fadeOut().end().delay(100).fadeOut('slow');
});

$(document).ready(function() {

	/*RESPONSIVER BURGER MENU*/
	$(".burger").click(function() {
		$(this).toggleClass('active');
		$(".navigation__list-item").slideToggle('fast');
	})

	$(window).resize(function() {
		if ($(window).width() > 768) {
			$('.navigation__list-item').removeAttr('style');
		}
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
		// With optional speed parameter
		// Parameters has to be in square bracket '[]'
		owl.trigger('prev.owl.carousel', [700]);
	});

});


/*FIXED SCROLL FOR MENU*/
jQuery(function($) {
	$(window).scroll(function() {
		if ($(this).scrollTop() > 40) {
			$('#fixedTopMenu').addClass('fixed');
		} else if ($(this).scrollTop() < 40) {
			$('#fixedTopMenu').removeClass('fixed');
		}
	});
});

/*BACK TO TOP SCROLL FOR MENU*/
jQuery(function(f){
	var element = f('#scrollToTop');
	f(window).scroll(function(){
		element['fade'+ (f(this).scrollTop() > 300 ? 'In': 'Out')](400);           
	});
});

/*MENU SCROLLING*/
$(document).ready(function(){
	$('a[href^="#"], *[data-href^="#"]').on('click', function(e){
		e.preventDefault();
		var t = 1000;
		var d = $(this).attr('data-href') ? $(this).attr('data-href') : $(this).attr('href');
		$('html,body').stop().animate({ scrollTop: $(d).offset().top }, t);
	});
});

new WOW().init();