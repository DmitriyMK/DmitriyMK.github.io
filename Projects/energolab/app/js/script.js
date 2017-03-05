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

  }); /*ready(function()*/


