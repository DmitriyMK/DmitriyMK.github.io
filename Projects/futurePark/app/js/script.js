/*PRELOADER*/
$(window).load(function() {
	$('#preloader').delay(100).fadeOut('slow');
});

/*MENU SCROLLING*/
$(document).ready(function() {
	$('a[href^="#"], *[data-href^="#"]').on('click', function(e) {
		e.preventDefault();
		var t = 1000;
		var d = $(this).attr('data-href') ? $(this).attr('data-href') : $(this).attr('href');
		$('html,body').stop().animate({
			scrollTop: $(d).offset().top
		}, t);
	});


	/*POPUP SERTIFICATE*/

	$('.popup-gallery').magnificPopup({
		delegate: 'a',
		type: 'image',
		tLoading: 'Loading image #%curr%...',
		mainClass: 'mfp-img-mobile',
		gallery: {
			enabled: true,
			navigateByImgClick: true,
			preload: [0, 1] // Will preload 0 - before current, and 1 after the current image
		}
	});
});

$(function() {
	$('.lazy').Lazy({
		// your configuration goes here
		scrollDirection: 'vertical',
		effect: 'fadeIn',
		visibleOnly: true,
		onError: function(element) {
			console.log('error loading ' + element.data('src'));
		}
	});
});

/*COUNTER WITH ANIMATION*/

var time = 4;
$('p').each(function() {
	var i = 1,
		num = $(this).data('num'),
		step = 1000 * time / num,
		that = $(this),
		int = setInterval(function() {
			if (i <= num) {
				that.html(i);
			} else {
				clearInterval(int);
			}
			i++;
		}, step);
});