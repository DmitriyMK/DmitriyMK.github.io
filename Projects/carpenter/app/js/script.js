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

jQuery(function(f) {
	var element = f('#scrollToTop');
	f(window).scroll(function() {
		element['fade' + (f(this).scrollTop() > 300 ? 'In' : 'Out')](400);
	});
});

/*MENU SCROLLING*/
$(document).ready(function() {
	$('a[href^="#"], *[data-href^="#"]').on('click', function(e) {
		e.preventDefault();
		var t = 1000;
		var d = $(this).attr('data-href') ? $(this).attr('data-href') : $(this).attr('href');
		$('html,body').stop().animate({
			scrollTop: $(d).offset().top
		}, t);
	});
});


/*CAROUSEL*/
$(document).ready(function() {

	$(".owl-carousel").owlCarousel({
		loop: true,
		thumbs: true,
		thumbsPrerendered: true,
		margin: 10,
		responsive: {
			992: {
				items: 3,
				margin: 10
			},
			768: {
				items: 2
			},
			320: {
				items: 1,
				center: true
			}
		}
	});

	var owl = $('.owl-carousel');
	owl.owlCarousel();

	$('.owl-next').click(function() {
		owl.trigger('next.owl.carousel');
	})

	$('.owl-prev').click(function() {
		owl.trigger('prev.owl.carousel');
	});

	/*ANIMATION PLUGUN*/
	new WOW().init();
});


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

$(window).on('load', function() {
	$('#preloader').delay(100).fadeOut('slow');
});