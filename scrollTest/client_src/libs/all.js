$(document).ready(function() {

  // Init ScrollMagic
  var controller = new ScrollMagic.Controller();


  //pin the intro
  var pinToScene = new ScrollMagic.Scene({
      triggerElement: '#intro',
      triggerHook: 0,
      duration: '20%'
    })
    .setPin('#intro', {pushFollowers: false})
    .addTo(controller);


  //pin again
  var pinToScene = new ScrollMagic.Scene({
      triggerElement: '#project01',
      triggerHook: 0.4
    })
    .setPin('#intro', {pushFollowers: false})
    .addTo(controller);


    //parallax scene
    var parallaxTl = new TimelineMax();
  parallaxTl
      .from('.content-wrapper', 0.4, {autoAlpha: 0, ease:Power0.easeNone}, 0.4)
      .from('.bcg', 2, {y: '-50%', ease:Power0.easeNone}, 0);


    var slideParallaxScene = new ScrollMagic.Scene({
      triggerElement: '.bcg-parallax',
      triggerHook: 1,
      duration: '100%'
    })

    .setTween(parallaxTl)
    .addTo(controller);


  //build loop for all project
  $('.project').each(function() {

    // build a scene
    var ourScene = new ScrollMagic.Scene({
      triggerElement: this.children[0],
      triggerHook: 0.8,
      reverse: false,
    })

    .setClassToggle(this, 'fade-in') // add class to project01

    .addIndicators({
        name: 'fade scene',
        colorTrigger: 'black',
        indent: 200,
        colorStart: '#75C695',
        colorEnd: 'red'
      }) // this requires a plugin

    .addTo(controller);

  });



});