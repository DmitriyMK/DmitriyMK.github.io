$(document).ready(function() {

	/*MENU SCROLLING*/
	$('.scroll__link').on('click', function(e) {
		e.preventDefault();
		var t = 1000;
		var d = $(this).attr('data-href') ? $(this).attr('data-href') : $(this).attr('href');
		$('html,body').stop().animate({
			scrollTop: $(d).offset().top
		}, t);
	});


	/*	$(function() {
			var $gallery = $('.galleryl a').simpleLightbox();

		});*/

	/*RESPONSIVER BURGER MENU*/
	$(".burgerMenu").click(function() {
		$(this).toggleClass('active');
		$(".overlay").fadeToggle(200);
	})


	$('.burgerMenu').on('click', function() {
		$('.overlay').toggleClass('open').show;
	});

	/*RESPONSIVER BURGER MENU*/
	$(".menuContact").click(function() {
		$(this).toggleClass('active');
		$(".hide").slideToggle('fast');
	})

	$(window).resize(function() {
		if ($(window).width() > 992) {
			$('.hide').removeAttr('style');
		}
	})

	



	$('.sliderText').slick({
		arrows: true,
		infinite: true,
		slidesToShow: 1,
		speed: 500,
		responsive: [{
			breakpoint: 768,
			settings: {
				arrows: false,
			}
		}]
	});

	$('#fullpage').fullpage({
		fixedElements: '#header',
		scrollingSpeed: 700,

		easing: 'easeInOutCubic',
		easingcss3: 'ease',

		hybrid: true,
		fitToSection: false,

		//Accessibility
		keyboardScrolling: true,
		animateAnchor: true,
		recordHistory: true,

	});

	$('.phone-mask').mask('+7000 000 00 00');

	$('.selectize').selectize();

	$('.selectize-input > input').prop('disabled', 'disabled');

	$('[data-toggle="datepicker"]').datepicker({
		language: 'ru-RU',
	});

	$('input.timepicker').timepicker({
		timeFormat: 'H:mm',
		interval: 30,
		minTime: '09:00',
		maxTime: '17:00',
		defaultTime: '10:00',
		startTime: '09:00',
		dynamic: false,
		dropdown: true,
		scrollbar: true
	});


	/*	$('.politics__link').magnificPopup({
			type: 'inline',
			preloader: false,
			focus: '#username',
		});*/


});


/*PRELOADER*/
$(window).load(function() {
	$('#preloader').delay(100).fadeOut('slow');

});