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
// 

var renderer = PIXI.autoDetectRenderer(512.512, {
  transparent: true,
  resolution: 1
});

document.getElementById("display").appendChild(renderer.view);

var stage = new PIXI.Container();

PIXI.loader
  .add("spritesheet", "../images/loading_sprite.png")
  .load(setup);

var sprite;

function setup() {
  stage.interactive = true;

  var rect = new PIXI.Rectangle(0, 0, 64, 64);

  var texture = PIXI.loader.resources["spritesheet"].texture;
  texture.frame = rect;

  sprite = new PIXI.Sprite(texture);

  var idle = setInterval(function() {
    if (rect.x >= 64 * 4) rect.x = 0;
    sprite.texture.frame = rect;
    rect.x += 64;
  }, 500);

  sprite.scale.set(2, 2);
  sprite.vx = 3;
  stage.addChild(sprite);

  animationLoop();

}

function animationLoop() {
  requestAnimationFrame(animationLoop);

  renderer.render(stage);
}

window.addEventListener("keydown", function(event) {
  event.preventDefault();
  sprite.x += sprite.vx;
});
