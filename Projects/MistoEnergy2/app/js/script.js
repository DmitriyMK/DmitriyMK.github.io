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

	$("lazy").lazyload({
		effect: "fadeIn"
	});


/*if($(window).innerWidth() < 768) {

$('.reorder__bottom').appendTo( $('.counters__col2') );
$('.reorder__top').appendTo( $('.counters__col1') );

} */