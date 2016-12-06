	

	$(window).load(function() {
		$('#preloader').find('i').fadeOut().end().delay(400).fadeOut('slow');
	});

	/*MASONRY PLUGIN*/
	$('.grid').masonry({
		// options
		columnWidth: '.grid-item',
		gutter: 20
	});