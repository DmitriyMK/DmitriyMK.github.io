$(document).ready(function() {

	/*MENU SCROLLING*/
/*	$('.scroll__link').on('click', function(e) {
		e.preventDefault();
		var t = 1000;
		var d = $(this).attr('data-href') ? $(this).attr('data-href') : $(this).attr('href');
		$('html,body').stop().animate({
			scrollTop: $(d).offset().top
		}, t);
	});*/


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
		scrollingSpeed: 700,
		lazyLoading: true,

		//Accessibility
		keyboardScrolling: true,
		animateAnchor: true,
		recordHistory: true,

		//Design
		fixedElements: '#header',
		parallax: true,
		parallaxOptions: {type: 'reveal', percentage: 62, property: 'translate'},

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

/*	$('.politics__link').magnificPopup({
		type: 'inline',
		preloader: false,
		focus: '#username',
	});*/


	/*	new WOW().init();*/

});



//E-mail Ajax Send
/*$("form.open-popup-link").submit(function() {
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
*/
/*PRELOADER*/
$(window).load(function() {
	$('#preloader').delay(100).fadeOut('slow');

});