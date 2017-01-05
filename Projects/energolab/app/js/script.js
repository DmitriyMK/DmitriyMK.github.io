	
	/*LOADER*/
	$(window).load(function() {
		$('#preloader').find('i').fadeOut().end().delay(400).fadeOut('slow');
	});


	$(document).ready(function() {

		/*burger menu*/
		$('#nav').burgerMenu({
			buttonBg: 'none',
			lineColor: 'green',
			menuBackground: 'transparent',
			linkBackground: 'black',
			linkColor: 'white',
			linkBorderBottom: 'none'
		});

		/*accordion*/

		$(function() {
			$("#accordion").accordion({
				collapsible: true
			});
		});

		/*	$('.accordion__header').click(function(e) {

				e.preventDefault();

				$(this).siblings('.accordion-body').slideToggle()
					.parent().toggleClass('active')
					.siblings().removeClass('active')
					.children('.accordion-body').slideUp();
			});*/


	}); /*ready(function()*/