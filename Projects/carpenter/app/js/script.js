$(document).ready(function() {

	/*RESPONSIVER BURGER MENU*/
	$(".burger").click(function() {
		$(this).toggleClass('active');
		$(".navigation__list-item").slideToggle('fast');
	})

	$(window).resize(function() {
		if ($(window).width() > 768) {
			$('.navigation__list-item').removeAttr('style');
		}
	})
});


/*FIXED SCROLL FOR MENU*/
jQuery(function($) {
	$(window).scroll(function() {
		if ($(this).scrollTop() > 40) {
			$('#fixedTopMenu').addClass('fixed');
		} else if ($(this).scrollTop() < 40) {
			$('#fixedTopMenu').removeClass('fixed');
		}
	});
});

/*BACK TO TOP SCROLL FOR MENU*/

jQuery(function(f){
	var element = f('#scrollToTop');
	f(window).scroll(function(){
		element['fade'+ (f(this).scrollTop() > 300 ? 'In': 'Out')](400);           
	});
});

/*MENU SCROLLING*/
$(document).ready(function(){
	$('a[href^="#"], *[data-href^="#"]').on('click', function(e){
		e.preventDefault();
		var t = 1000;
		var d = $(this).attr('data-href') ? $(this).attr('data-href') : $(this).attr('href');
		$('html,body').stop().animate({ scrollTop: $(d).offset().top }, t);
	});
});


/*CAROUSEL*/
$(document).ready(function() {

	$(".owl-carousel").owlCarousel({
		loop: true,
		margin: 40,
		items: 3,
		responsive: {
			992: {
				items: 2
			},
			480: {
				items: 1
			},
			320: {
				items: 1
			}
		}
	});

	var owl = $('.owl-carousel');
	owl.owlCarousel();

	$('.owl-next').click(function() {
		owl.trigger('next.owl.carousel');
	})

	$('.owl-prev').click(function() {
		owl.trigger('prev.owl.carousel');
	});


});



/*    $(".owl-carousel").owlCarousel({

        center: true,
        items: 2,

        margin: 60,
        responsive: {
            480: {
                items: 2,
                margin: 40
            },
            320: {
                items: 1,
                margin: 0
            }
        }
    });

});*/

$(window).on('load', function() {
	$('#preloader').delay(100).fadeOut('slow');
});
