

$(window).load(function() {
  $('#preloader').find('i').fadeOut().end().delay(400).fadeOut('slow');
});





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

});

new WOW().init();