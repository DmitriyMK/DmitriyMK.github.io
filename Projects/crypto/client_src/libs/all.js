$(document).ready(function() {

  if (document.documentElement.clientWidth > 1200) {

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

    new WOW().init();

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


  var cardWrap = document.getElementsByClassName('header__img');
  document.body.addEventListener('mousemove', cursorPositionHandler);

  function cursorPositionHandler(e) {
    var decimalX = e.clientX / window.innerWidth - 0.5;
    var decimalY = e.clientY / window.innerHeight - 0.5;

    TweenMax.to(cardWrap, 0.5, {
      rotationY: 20 * decimalX,
      rotationX: -20 * decimalY,
      ease: Quad.easeOut,
      transformPerspective: 700,
      transformOrigin: "center"
    });
  }


  // $(function() {
  //   controller = new ScrollMagic.Controller();


  //   var scene1 = new ScrollMagic.Scene({
  //     triggerElement: '#advantages',
  //     duration: 180
  //   })

  //   .setPin('#inside__img2', {
  //     pushFollowers: false
  //   })

  //   .addTo(controller)

  // });

});



$(window).on('resize orientationchange', function() {
  $('.slider').slick('resize');
});


window.onload = function() {
  if (document.documentElement.clientWidth > 1200) {
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
}