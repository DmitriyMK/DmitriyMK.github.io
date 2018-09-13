$(document).ready(function() {

  if (document.documentElement.clientWidth > 1200) {

    // new WOW().init();

    $("body").niceScroll({
      scrollspeed: 70,
      mousescrollstep: 60,
      smoothscroll: true,
      cursorwidth: 8,
      cursorborder: 0,
      cursorcolor: '#de390a',
      cursorborderradius: 2,
      autohidemode: true,
      horizrailenabled: false,
      cursoropacitymin: 1,
      background: false,
      zindex: "9999"
    });

    $('html').addClass('no-overflow-y');
  };


  $('.scrolling__link').on('click', function(e) {
    e.preventDefault();
    var t = 1500;
    var d = $(this).attr('data-href') ? $(this).attr('data-href') : $(this).attr('href');
    $('html,body').stop().animate({
      scrollTop: $(d).offset().top
    }, t);
  });


  var bLazy = new Blazy();



  $('.review__slider').slick({
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: true,
    dots: true,
    infinite: false,
    lazyLoad: 'ondemand',

    responsive: [

      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
        }
      },

    ]

  });


});



$(window).on('resize orientationchange', function() {
  $('.slider').slick('resize');
});


window.onload = function() {
  // get our canvas wrapper
  var canvasContainer = document.getElementById("canvas");

  // set up our WebGL context and append the canvas to our wrapper
  var webGLCurtain = new Curtains("canvas");

  // get our plane element
  var planeElement = document.getElementsByClassName("dancingDots")[0];

  // set our initial parameters (basic uniforms)
  var params = {
    vertexShaderID: "plane-vs", // our vertex shader ID
    fragmentShaderID: "plane-fs", // our framgent shader ID

    uniforms: {
      time: {
        name: "uTime", // uniform name that will be passed to our shaders
        type: "1f", // this means our uniform is a float
        value: 0,
      },
    }
  }

  // create our plane mesh
  var plane = webGLCurtain.addPlane(planeElement, params);

  // set up our basic methods
  plane.onRender(function() { // fired at each requestAnimationFrame call
    plane.uniforms.time.value++; // update our time uniform value
  });

}