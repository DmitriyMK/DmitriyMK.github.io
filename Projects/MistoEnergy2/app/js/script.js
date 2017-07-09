$(document).ready(function() {

	/*RESPONSIVER BURGER MENU*/
	$(".burger").click(function() {
		$(this).toggleClass('active');
		$(".navigation__list").slideToggle('fast');
	})

	$(window).resize(function() {
		if ($(window).width() > 768) {
			$('.navigation__list').removeAttr('style');
		}
	})
});