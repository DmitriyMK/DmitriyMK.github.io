

$('.grid').masonry({
	// options
	columnWidth: '.grid-item',
	gutter: 20
});

$(function() {
	$('.menu').click(function() {
		$(".menu-container__list").slideToggle('5000');
	});
})

