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

	$("img").lazyload({
		threshold: 200,
		effect: "fadeIn"
	});

	$('.ajax-popup-link').magnificPopup({
		type: 'ajax',
        overflowY: 'scroll' // as we know that popup content is tall we set scroll overflow by default to avoid jump
	});
	
});



