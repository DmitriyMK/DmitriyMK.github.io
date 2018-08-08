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






// var renderer = PIXI.autoDetectRenderer({
//   transparent: true,

// });

// document.getElementById("display").appendChild(renderer.view);

// var stage = new PIXI.Container();

// PIXI.loader
//   .add("spritesheet", "../images/loading_sprite.png")
//   .load(setup);

// var sprite;

// function setup() {
//   stage.interactive = true;

//   var rect = new PIXI.Rectangle(0, 0, 200, 351);

//   var texture = PIXI.loader.resources["spritesheet"].texture;
//   texture.frame = rect;

//   sprite = new PIXI.Sprite(texture);

//   var idle = setInterval(function() {
//     if (rect.x >= 200 * 6) rect.x = 0;
//     sprite.texture.frame = rect;
//     rect.x += 200; 
//   }, 250);

//   var idle2 = setInterval(function() {
//     if (rect.y >= 351 * 4) rect.y = 0;
//     sprite.texture.frame = rect;
//     rect.y += 351; 
//   }, 250);

//   // sprite.scale.set(1, 1);
//   sprite.vx = 1;
//   sprite.vy = 1;
//   stage.addChild(sprite);

//   animationLoop();

// };

// function animationLoop() {
//   requestAnimationFrame(animationLoop);
//   renderer.render(stage);
// }




// this example uses both pixi-spine and pixi-projection
// it doesnt use projection-spine bridge because it uses only 2d version of spine object

var app = new PIXI.Application(800, 600, {resolution: 1, autoStart: false });
document.body.appendChild(app.view);

app.stop();

var loader = app.loader;
// loader.baseUrl = 'required/assets/';

// load spine data
loader
    .add('pixie', '../images/loading_sprite.png')
    // .add('bg', 'spine/iP4_BGtile.jpg')
    // .add('fg', 'spine/iP4_ground.png')
    // .load(onAssetsLoaded);

var objs = [], pixie;

app.stage.interactive = true;

// 1 earth and 2 parallax layers

var camera = new PIXI.projection.Camera3d();
camera.setPlanes(300, 10, 1000, false);
camera.position.set(app.screen.width / 2, 0);
camera.position3d.y = -500; // camera is above the ground
app.stage.addChild(camera);

var groundLayer = new PIXI.projection.Container3d();
groundLayer.euler.x = Math.PI / 2;
camera.addChild(groundLayer);

// Those two layers can have 2d objects inside
// because they return everything to affine space

var bgLayer = new PIXI.projection.Container3d();
bgLayer.proj.affine = PIXI.projection.AFFINE.AXIS_X;
camera.addChild(bgLayer);
bgLayer.position3d.z = 80;

var mainLayer = new PIXI.projection.Container3d();
mainLayer.proj.affine = PIXI.projection.AFFINE.AXIS_X;
camera.addChild(mainLayer);

var repeats = 3;

function onAssetsLoaded(loader,res) {

    for (var i=0; i<repeats; i++) {
        // simple 2d sprite on back
        var bg = new PIXI.Sprite(res['bg'].texture);
        bgLayer.addChild(bg);
        bg.position.x = bg.texture.width * i;
        bg.anchor.y = 1;
        objs.push(bg);
    }

    for (var i=0; i<repeats; i++) {
        // 3d sprite on floor
        var fg = new PIXI.projection.Sprite3d(res['fg'].texture);
        groundLayer.addChild(fg);
        fg.anchor.set(0, 0.5);
        // use position or position3d here, its not important,
        // unless you need Z - then you need position3d
        fg.position.x = fg.texture.width * i;
        objs.push(fg);
    }

    pixie = new PIXI.spine.Spine(res['pixie'].spineData);
    pixie.position.set(300, 0);
    pixie.scale.set(0.3);

    mainLayer.addChild(pixie);

    pixie.stateData.setMix('running', 'jump', 0.2);
    pixie.stateData.setMix('jump', 'running', 0.4);

    pixie.state.setAnimation(0, 'running', true);

    app.stage.on('pointerdown', onTouchStart);

    function onTouchStart() {
        pixie.state.setAnimation(0, 'jump', false);
        pixie.state.addAnimation(0, 'running', true, 0);
    }

    app.start();
}

app.ticker.add((delta) => {
    pixie.position.x += 10 * delta;

    // camera looks on pixi!
    camera.position3d.x = pixie.position.x;

    objs.forEach((obj) => {
        if (obj.position.x + obj.texture.width < pixie.position.x - 500) {
            obj.position.x += repeats * obj.texture.width;
        }
    });
});