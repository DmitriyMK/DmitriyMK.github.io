
$(window).load(function() {
	$('#preloader').find('i').fadeOut().end().delay(200).fadeOut('slow');

	var $grid = $('.grid').masonry({
		itemSelector: '.grid-item',
		percentPosition: true,
		columnWidth: '.grid-sizer'
	});
});

