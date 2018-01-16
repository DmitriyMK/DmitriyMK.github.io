$(document).ready(function(){
	$(".burger").click(function(){
		$(".nav__list").slideToggle();
	});

	$('.carousel').slick({
		infinite: true,
		dots: true,

	});
});



/*PRELOADER*/
$(window).load(function() {
	$('#preloader').delay(100).fadeOut('slow');

});