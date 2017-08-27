$(document).ready(function() {

	/*RESPONSIVER BURGER MENU*/
	$(".burger").click(function() {
		$(this).toggleClass('active');
		$(".navigation__list").slideToggle('fast');
	})

	$('.burger').on('click', function() {
		$('.overlay').toggleClass('open').show;
	});

	$(window).resize(function() {
		if ($(window).width() > 768) {
			$('.navigation__list').removeAttr('style');
		}
	})
});



$(document).ready(function() {
	$("img").lazyload({
		threshold: 200,
		effect: "fadeIn"
	});

});



$('[data-remodal-id=modal]').remodal(options);