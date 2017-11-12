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

	/*RESPONSIVER BURGER MENU*/
	$(".burger").click(function() {
		$(this).toggleClass('active');
		$(".nav__list").slideToggle('fast');
	})

	$('.burger').on('click', function() {
		$('.overlay').toggleClass('open').show;
	});

	$(window).resize(function() {
		if ($(window).width() > 768) {
			$('.nav__list').removeAttr('style');
		}
	})


	/*	$(function() {
			var $gallery = $('.galleryl a').simpleLightbox();

		});*/


		$('.review__slides').slick({
			infinite: true,
			speed: 500,
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


		/*	new WOW().init();*/

		jQuery('.tipso').tipso({
			background: '#fff',
			color: '#000',
			width: '250px',
			position: 'top',
		});

	});

$(function() {
  $('.select-line').selectize({});
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