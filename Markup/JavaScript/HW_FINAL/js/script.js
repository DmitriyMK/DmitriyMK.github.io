(function($) {


  $(function() {


    $('.jcarousel').jcarousel({
      animation: 'slow',
      wrap: 'circular'
    })

    $('.left-arrow')
      .jcarouselControl({
        target: '-=1'
      });

    $('.right-arrow')
      .jcarouselControl({
        target: '+=1'
      });
  });

})(jQuery);


$('.grid').masonry({
  // options
  columnWidth: '.grid-sizer',
  gutter: 20
});

// jQuery
$('wrapper').imagesLoaded( { background: 'item' }, function() {
  console.log('all .item background images loaded');
});