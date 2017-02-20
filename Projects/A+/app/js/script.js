

$(document).ready(function() {

/*RESPONSIVER BURGER MENU*/
$(".burger").click(function() {
    $(this).toggleClass('active');
    $(".top-header__navigation-item").slideToggle('fast');
})

$(window).resize(function() {
    if ($(window).width() > 768) {
        $('.top-header__navigation-item').removeAttr('style');
    }
})




/*CAROUSEL*/
    $(".owl-carousel").owlCarousel({

        center: true,
        items: 2,
        loop: true,
        margin: 50,
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

    var owl = $('.carousel1');
    owl.owlCarousel();
    $('.powerSMMNext').click(function() {
        owl.trigger('next.owl.carousel');
    })
    $('.powerSMMPrev').click(function() {
        // With optional speed parameter
        // Parameters has to be in square bracket '[]'
        owl.trigger('prev.owl.carousel', [700]);
    });

    var owlCase = $('.carousel2');
    owlCase.owlCarousel();
    $('.caseNext1').click(function() {
        owlCase.trigger('next.owl.carousel');
    })
    $('.casePrev1').click(function() {
        owlCase.trigger('prev.owl.carousel', [700]);
    });

    var owlCase2 = $('.carousel3');
    owlCase2.owlCarousel();
    $('.caseNext2').click(function() {
        owlCase2.trigger('next.owl.carousel');
    })
    $('.casePrev2').click(function() {
        owlCase2.trigger('prev.owl.carousel', [700]);
    });

    var owlCase3 = $('.carousel4');
    owlCase3.owlCarousel();
    $('.caseNext3').click(function() {
        owlCase3.trigger('next.owl.carousel');
    })
    $('.casePrev3').click(function() {
        owlCase3.trigger('prev.owl.carousel', [700]);
    });

    var owlCase4 = $('.carousel5');
    owlCase4.owlCarousel();
    $('.caseNext4').click(function() {
        owlCase4.trigger('next.owl.carousel');
    })
    $('.casePrev4').click(function() {
        owlCase4.trigger('prev.owl.carousel', [700]);
    });

    var owlCase5 = $('.ourTeam__block');
    owlCase5.owlCarousel();
    $('.caseNext5').click(function() {
        owlCase5.trigger('next.owl.carousel');
    })
    $('.casePrev5').click(function() {
        owlCase5.trigger('prev.owl.carousel', [700]);
    });
});



/*RANGE SLIDER*/

$(function() {
    var output = document.querySelectorAll('output')[0];

    $(document).on('input', 'input[type="range"]', function(e) {
        output.innerHTML = e.currentTarget.value * 20;
    });

    $('input[type=range]').rangeslider({
        polyfill: false
    });
});

//when slider changes, hide start message
$("input").on("change", function() {
    $("small").fadeOut("slow");
})

/*ACCORDION*/
$(function() {

    $('.accordion__header').click(function(e) {

        e.preventDefault();

        $(this).siblings('.accordion-body').slideToggle()
            .parent().toggleClass('active')
            .siblings().removeClass('active')
            .children('.accordion-body').slideUp();

    });
});