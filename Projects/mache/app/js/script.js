$(document).ready(function() {

	$("#menu").on("click", "a", function(event) {
		event.preventDefault();
		var id = $(this).attr('href'),
			top = $(id).offset().top;
		$('body,html').animate({
			scrollTop: top
		}, 1500);
	});

	$('.bxslider').bxSlider();


		$(".about_us h3, about_us .p").animated("fadeInLeft");





});

