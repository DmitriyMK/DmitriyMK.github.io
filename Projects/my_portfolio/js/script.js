$(window).load(function() {
	$('#preloader').find('i').fadeOut().end().delay(200).fadeOut('slow');

	var $grid = $('.grid').masonry({
		itemSelector: '.grid-item',
		percentPosition: true,
		columnWidth: '.grid-sizer'
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