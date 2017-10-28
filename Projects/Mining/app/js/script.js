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
		var $gallery = $('.gallery a').simpleLightbox();

	});

	$('.popup-with-form').magnificPopup({
		type: 'inline',
		preloader: false,
		focus: '#name',

		callbacks: {
			beforeOpen: function() {
				if ($(window).width() < 700) {
					this.st.focus = false;
				} else {
					this.st.focus = '#name';
				}
			}
		}
	});

	$('.politics__link').magnificPopup({
		type: 'inline',
		preloader: false,
		focus: '#username',
	});

	$('.phone-mask').mask('+7 00-000-00-00');

	$('.notSpam, .form-line-num').styler();

});



/*PRELOADER*/
$(window).load(function() {
	$('#preloader').delay(100).fadeOut('slow');
});