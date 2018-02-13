$(document).ready(function() {

	/*STYLE SCROLL*/
	$("body").niceScroll({
		cursorcolor:"#fad94d",
		cursorwidth:"16px",
		zindex: [200],
		scrollspeed: 60,
	});

	/*MENU SCROLLING*/
	$('.scroll__link').on('click', function(e) {
		e.preventDefault();
		var t = 1000;
		var d = $(this).attr('data-href') ? $(this).attr('data-href') : $(this).attr('href');
		$('html,body').stop().animate({
			scrollTop: $(d).offset().top
		}, t);
	});

	$('.review__slider').slick({
		arrows: true,
		dots: true,
		infinite: true,
		slidesToShow: 1,
		speed: 500,
	});

	$('.example__slider').slick({
		arrows: true,
		dots: true,
		infinite: true,
		slidesToShow: 2,
		slidesToScroll: 2,
		speed: 500,
		responsive: [
		{
			breakpoint: 768,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
			}
		}
		]
	});


	/*FORM POP-UP*/
	$('.open-popup-link').magnificPopup({
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

	$('.phone-mask').mask('+38(000)000-00-00');

	/*	new WOW().init();*/

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