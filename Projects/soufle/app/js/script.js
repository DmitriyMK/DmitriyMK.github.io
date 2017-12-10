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

	$('.sliderText').slick({
		arrows: true,
		infinite: true,
		slidesToShow: 1,
		speed: 500,
	});

	$('#fullpage').fullpage({
		fixedElements: '#header',
		scrollingSpeed: 700,

		hybrid:true,
		fitToSection: false,

		//Accessibility
		keyboardScrolling: true,

		


	});

	$('.phone-mask').mask('+7000 000 00 00');

	$('.selectize').selectize();

	$('.selectize-input > input').prop('disabled', 'disabled');


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
