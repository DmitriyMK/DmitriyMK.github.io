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

	$('.slider').slick({
		arrows: true,
		infinite: true,
		slidesToShow: 2,
		slidesToScroll: 1,
		speed: 500,
	});


	$(function() {
		var $gallery1 = $('.slide-gallery').simpleLightbox();

	});

	$(function() {
		var $gallery2 = $('.set-gallery').simpleLightbox();

	});

	$('.select-line').selectize({
		create: true,
		sortField: 'text'
	});


	$('.politics__link').magnificPopup({
		type: 'inline',
		preloader: false,
		focus: '#username',
	});

	$('.phone-mask').mask('+7000 000 00 00');

	$('.selectize-input > input').prop('disabled', 'disabled');

	/*RESPONSIVER BURGER MENU*/
	$(".burger").click(function() {
		$(this).toggleClass('active');
		$(".nav").slideToggle('fast');
	})

	$('.burger').on('click', function() {
		$('.overlay').toggleClass('open').show;
	});

	$(window).resize(function() {
		if ($(window).width() > 480) {
			$('.nav').removeAttr('style');
		}
	})
	
});



//E-mail Ajax Send
$("form.open-popup-link").submit(function() {
	var th = $(this);
	$.ajax({
		type: "POST",
		url: "../js/mail.php",
		data: th.serialize()
	}).done(function() {
		$(th).find('.success').addClass('active').css("display", "flex").hide().fadeIn();
		setTimeout(function() {
			$(th).find('.success').removeClass('active').fadeOut();
			th.trigger("reset");
		}, 3000);
	});
	return false;
});



/*PRELOADER*/
$(window).load(function() {
	$('#preloader').delay(100).fadeOut('slow');

});