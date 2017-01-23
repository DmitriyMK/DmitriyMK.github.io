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

/*		$(function() {

			$('.accordion__header').click(function(e) {

				e.preventDefault();

				$(this).siblings('.accordion-body').slideToggle()
					.parent().toggleClass('active')
					.siblings().removeClass('active')
					.children('.accordion-body').slideUp();

			});

		});*/


		         $(function() {
		            $( "#accordion" ).accordion();
		         });



		/*Ajax popup*/

		$('.simple-ajax-popup-align-top').magnificPopup({
			type: 'ajax',
			alignTop: true,
			overflowY: 'scroll' // as we know that popup content is tall we set scroll overflow by default to avoid jump
		});

		$('.simple-ajax-popup').magnificPopup({
			type: 'ajax'
		});



	}); /*ready(function()*/