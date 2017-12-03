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


	$(function() {
		var $gallery1 = $('.gallery__link-gallery').simpleLightbox();
		var $gallery2 = $('.gallery__link-about').simpleLightbox();
		var $gallery3 = $('.gallery__link-process').simpleLightbox();
	});


	$('.hall__slider').slick({
		arrows: true,
		infinite: true,
		slidesToShow: 1,
		speed: 500,
	});

	$('.politics__link').magnificPopup({
		type: 'inline',
		preloader: false,
		focus: '#username',
	});

	$('.phone-mask').mask('+38000 000 00 00');

	/*	new WOW().init();*/

});


/*PRELOADER*/
$(window).load(function() {
	$('#preloader').delay(100).fadeOut('slow');

});