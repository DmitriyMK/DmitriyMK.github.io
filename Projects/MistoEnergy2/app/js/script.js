$(document).ready(function() {

	/*RESPONSIVER BURGER MENU*/
	$(".burger").click(function() {
		$(this).toggleClass('active');
		$(".navigation__list").slideToggle('fast');
	})

	$('.burger').on('click', function() {
		$('.overlay').toggleClass('open').show;
	});

	$(window).resize(function() {
		if ($(window).width() > 768) {
			$('.navigation__list').removeAttr('style');
		}
	})

	$("img").lazyload({
		threshold: 200,
		effect: "fadeIn"
	});

	$('.ajax-popup-link').magnificPopup({
		type: 'ajax',
		overflowY: 'scroll' // as we know that popup content is tall we set scroll overflow by default to avoid jump
	});

	/*MENU SCROLLING*/
	$('.navigation__link[href^="#"], .offer__link[href^="#"], *[data-href^="#"]').on('click', function(e) {
		e.preventDefault();
		var t = 1000;
		var d = $(this).attr('data-href') ? $(this).attr('data-href') : $(this).attr('href');
		$('html,body').stop().animate({
			scrollTop: $(d).offset().top
		}, t);
	});
});

/*ANIMATION LET GO*/
new WOW().init();

$(window).on('load', function() {
	$('#preloader').delay(100).fadeOut('slow');
});