// var app = new PIXI.Application(800, 600, { backgroundColor: 0x1099bb });
// document.body.appendChild(app.view);

// // Scale mode for all textures, will retain pixelation
// PIXI.settings.SCALE_MODE = PIXI.SCALE_MODES.NEAREST;

// var sprite = PIXI.Sprite.fromImage('../images/loading_sprite.png');

// // Set the initial position
// sprite.anchor.set(0.5);
// sprite.x = app.screen.width / 2;
// sprite.y = app.screen.height / 2;

// // Opt-in to interactivity
// sprite.interactive = true;

// // Shows hand cursor
// sprite.buttonMode = true;

// // Pointers normalize touch and mouse
// sprite.on('pointerdown', onClick);

// // Alternatively, use the mouse & touch events:
// // sprite.on('click', onClick); // mouse-only
// // sprite.on('tap', onClick); // touch-only

// app.stage.addChild(sprite);

// function onClick () {
//     sprite.scale.x *= 1.25;
//     sprite.scale.y *= 1.25;
// }
// .



var renderer = PIXI.autoDetectRenderer({
  transparent: true,
});


var app = new PIXI.Application(800, 600, {
  backgroundColor: 0x1099bb
});

document.body.appendChild(renderer.view);


var stage = new PIXI.Container();


PIXI.loader
.add("spritesheet", "loading_sprite.png")
.load(setup);


function setup() {

  var rect = new PIXI.Rectangle(0, 0, 200, 351);
  var texture = PIXI.loader.resources["spritesheet"].texture;
  texture.frame = rect;

  sprite = new PIXI.Sprite(texture);


  stage.position.x = (sprite.width / 2) - (stage.width / 2);
  stage.position.y = (sprite.height / 2) - (stage.height / 2);

  // Opt-in to interactivity
  sprite.interactive = true;

  // Shows hand cursor
  sprite.buttonMode = true;

  // Pointers normalize touch and mouse
  sprite.on('pointerdown', onClick);


  function onClick() {

    var man = setInterval(function() {
      if (rect.x >= 200 * 6) rect.x = 0;
      if (rect.y >= 351 * 4) rect.y = 0;
      sprite.texture.frame = rect;
      rect.x += 200;
      rect.y += 351;
    }, 250);
    
  }


  stage.addChild(sprite);
  animationLoop();

};


function animationLoop() {
  requestAnimationFrame(animationLoop);
  renderer.render(stage);
};



