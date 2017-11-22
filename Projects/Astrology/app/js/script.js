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

	/*LAZY LOAD*/
/*	$(function() {
		$('.lazy').Lazy({
			// your configuration goes here
			scrollDirection: 'vertical',
			effect: 'fadeIn',
			visibleOnly: true,
			onError: function(element) {
				console.log('error loading ' + element.data('src'));
			}
		});
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

	$('.phone-mask').mask('+3000 000 00 00');



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


$(function() {
	$(".articles").slice(0, 1).show();
	$("#loadMore").on('click', function(e) {
		e.preventDefault();
		$(".articles:hidden").slice(0, 2).slideDown();
		if ($(".articles:hidden").length == 0) {
			$("#loadMore").fadeOut('slow');
		}
		$('html,body').animate({}, 1500);
		if ($(".articles:last").css('display') == 'block') {
			$('#loadMore').hide();
		}
	});
});

$(function() {
	$(".review__box").slice(0, 3).show();
	$("#loadMore").on('click', function(e) {
		e.preventDefault();
		$(".review__box:hidden").slice(0, 3).slideDown();
		if ($(".review__box:hidden").length == 0) {
			$("#loadMore").fadeOut('slow');
		}
		$('html,body').animate({}, 1500);
		if ($(".review__box:last").css('display') == 'flex') {
			$('#loadMore').hide();
		}
	});
});


/*EQUAL HEIGHT IN SELECT*/
$(document).ready(function() {

	var highestBox = 0;
	$('.review-content').each(function() {
		if ($(this).height() > highestBox) {
			highestBox = $(this).height();
		}
	});
	$('.review-content').height(highestBox);

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