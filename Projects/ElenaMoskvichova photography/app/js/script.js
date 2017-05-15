/*CAROUSEL*/
var $item = $('.carousel .item');
var $wHeight = $(window).height();
$item.eq(0).addClass('active');
$item.height($wHeight);
$item.addClass('full-screen');

$('.carousel img').each(function() {
	var $src = $(this).attr('src');
	$(this).parent().css({
		'background-image': 'url(' + $src + ')'
	});
	$(this).remove();
});

$(window).on('resize', function() {
	$wHeight = $(window).height();
	$item.height($wHeight);
});

$('.carousel').carousel({
	interval: 100000,
	pause: "false"
});



/*MENU*/
$('#toggle').click(function() {
	$(this).toggleClass('active');
	$('#overlay').toggleClass('open');
});

/*FILTER*/
$(function() {
	var $grid = $('.grid').masonry({
		itemSelector: '.grid-item',
		percentPosition: true,
		columnWidth: '.grid-sizer',
	});
	var selectedClass = "";
	$(".fil-cat").click(function() {
		selectedClass = $(this).attr("data-rel");
		/*    $("#grid").fadeTo(100, 0.1);*/
		$("#grid .grid-item").not("." + selectedClass).fadeOut().hide();
		$('.grid').masonry();
		setTimeout(function() {
			$("." + selectedClass).fadeIn();
			$('.grid').masonry();
			/*      $("#grid").fadeTo(100, 1);*/
		}, 300);

	});
});


/*POPUP SLIDER-GALLERY*/
jQuery(document).ready(function($) {
	$('a[data-rel^=lightcase]').lightcase();
});

/*PRELOADER*/
$(window).load(function() {
    /* $('#preloader').find('i').fadeOut().end().delay(100).fadeOut('slow');	*/
	$('#preloader').delay(1000).fadeOut('slow');

	var $grid = $('.grid').masonry({
		itemSelector: '.grid-item',
		percentPosition: true,
		columnWidth: '.grid-sizer',
	});
});