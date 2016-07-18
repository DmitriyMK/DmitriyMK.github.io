// Navigation menu

$(function() {
  
    $('.dropdown').hover(
      function(){
        $(this).children('.submenu1').slideDown(500);
      },

      function(){       
        $(this).children('.submenu1').slideUp(500);
      });

    $('.dropright').hover(
      function(){
        $(this).children('.submenu2').slideDown(500);
      },
      function(){
        $(this).children('.submenu2').slideUp(500);
      });
});

// Carousel Autoscroll

$(function() {
    $('.jcarousel')
        .jcarouselAutoscroll({
    interval: 2000 
  })
});

// SELECT STYLE
$(document).ready(function(){
    $('#someSelectBox').customSelect();
});

var $cs = $('.styled').customSelect();