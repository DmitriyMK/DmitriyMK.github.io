$(document).ready(function() {

    $(".owl-carousel").owlCarousel({
        loop: true,
        items: 1,
        singleItem: true,
        center: true
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
