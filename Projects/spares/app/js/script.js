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
		var $gallery = $('.slide-gallery').simpleLightbox();

	});

	$('.select-line').selectize({
		create: true,
		sortField: 'text'
	});



	/*GMAP POP-UP*/
	/*	$('.popup-gmaps').magnificPopup({
			disableOn: 319,
			type: 'iframe',
			mainClass: 'mfp-fade',
			removalDelay: 160,
			preloader: false,
			fixedContentPos: false,
		});*/

	/*FORM POP-UP*/
	/*	$('.popup-with-form').magnificPopup({
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
		});*/

	$('.politics__link').magnificPopup({
		type: 'inline',
		preloader: false,
		focus: '#username',
	});

	$('.fullBackground').fullClip({
		images: ['../img/photo/carBig2.jpg', '../img/photo/carBig3.jpg'],
		transitionTime: 1000,
		wait: 5000
	});


	new WOW().init();

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