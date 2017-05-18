$(document).ready(function() {

/*COUNTER*/
$('.countdown').downCount({
	date: '06/17/2017 20:00:00',
});


/*POP-UP WINDOW*/

$(function() {
	$('[data-popup-open]').on('click', function(e) {
		var targeted_popup_class = jQuery(this).attr('data-popup-open');
		$('[data-popup="' + targeted_popup_class + '"]').fadeIn(350);

		e.preventDefault();
	});

       	$('[data-popup-close]').on('click', function(e) {
       		var targeted_popup_class = jQuery(this).attr('data-popup-close');
       		$('[data-popup="' + targeted_popup_class + '"]').fadeOut(350);

       		e.preventDefault();
       	});
       });

/*equalHeight*/
var highestCol = Math.max($('.info-left').height(),$('.info-right').height());
$('.column').height(highestCol);

});


/*animation*/
new WOW().init();