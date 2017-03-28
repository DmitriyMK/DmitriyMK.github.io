/*LOADER*/
$(window).load(function() {
	$('#preloader').find('i').fadeOut().end().delay(300).fadeOut('slow');
});

$(document).ready(function() {

	/*BURGEM MENU - PLUGIN*/
	$('#nav').burgerMenu({
		buttonBg: 'none',
		lineColor: 'green',
		menuBackground: 'transparent',
		linkBackground: 'black',
		linkColor: 'white',
		linkBorderBottom: 'none'
	});

    $('#email').blur(function() {
        if($(this).val() != '') {
            var pattern = /^([a-z0-9_\.-])+@[a-z0-9-]+\.([a-z]{2,4}\.)?[a-z]{2,4}$/i;
            if(pattern.test($(this).val())){
                $(this).css({'border' : '1px solid #569b44'});
                $('#valid').text('Верно');
            } else {
                $(this).css({'border' : '1px solid #ff0000'});
                $('#valid').text('Не верно');
            }
        } else {
            $(this).css({'border' : '1px solid #ff0000'});
            $('#valid').text('Поле email не должно быть пустым');
        }
    });

	
});

/*ANIMATION PLUGUN*/
new WOW().init();

