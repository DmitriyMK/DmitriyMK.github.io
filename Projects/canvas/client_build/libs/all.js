// var
//     canvas = document.getElementById("canvas"),
//     ctx = canvas.getContext("2d");

// isMouseDown = false;


// canvas.width = window.innerWidth;
// canvas.height = window.innerHeight;
// canvas.width = 640;
// canvas.height = 480;

// ctx.fillStyle = "magenta";



// DRAW ROUND
// ctx.arc(canvas.width / 2, canvas.height / 2, 100, 0, Math.PI * 2, false);
// ctx.fill();


// DRAW PICTURE

// canvas.addEventListener("mousedown", function() {
//     isMouseDown = true;
// })

// canvas.addEventListener("mouseup", function() {
//     isMouseDown = false;
//     ctx.beginPath();
// })

// ctx.lineWidth = 20;
// ctx.fill = 'magenta';
// ctx.strokeStyle = 'magenta'

// canvas.addEventListener("mousemove", function(e) {

//     if (isMouseDown) {
//         ctx.lineTo(e.clientX, e.clientY);
//         ctx.stroke();

//         // ctx.beginPath();
//         // ctx.arc(e.clientX, e.clientY, 5, 0, Math.PI * 2);
//         // ctx.fill = 'magenta';
//         ctx.fill();

//         ctx.beginPath();
//         ctx.moveTo(e.clientX, e.clientY);
//     }


// })



//DRAW TEXT

// var grad = ctx.createLinearGradient(0, 0, 500, 0);

// grad.addColorStop("0", "magenta");
// grad.addColorStop(".50", "blue");
// grad.addColorStop("1", "red");

// ctx.fillStyle = grad;

// // ctx.textAlign = "center";
// ctx.font = "80px Georgia";
// ctx.fillText("Push-ka solutions", 0, 370);



// DRAW TRIANGLE
// ctx.strokeStyle = "red";
// ctx.lineWidth = 5;

// ctx.scale(2, 2);
// ctx.rotate(-.45);

// ctx.beginPath;
// ctx.moveTo(50, 50);
// ctx.lineTo(25, 100);
// ctx.lineTo(75, 100);
// ctx.closePath();
// ctx.stroke();


//CHESS

// canvas.width = 640;
// canvas.height = 480;

// ctx.strokeStyle = '#B70A02'; // меняем цвет рамки
// ctx.fillStyle = '#AF5200'; // меняем цвет клеток

// ctx.strokeRect(15, 15, 266, 266);
// ctx.strokeRect(18, 18, 260, 260);

// ctx.fillRect(20, 20, 256, 256);
// for (i = 0; i < 8; i += 2)
//     for (j = 0; j < 8; j += 2) {
//         ctx.clearRect(20 + i * 32, 20 + j * 32, 32, 32);
//         ctx.clearRect(20 + (i + 1) * 32, 20 + (j + 1) * 32, 32, 32);
//     }



//DRAW TEXT

// var canvas = document.getElementById("canvas");
// var ctx = canvas.getContext("2d");


// canvas.width = 640;
// canvas.height = 480;


// var grad = ctx.createLinearGradient(0, 0, 500, 0);

// grad.addColorStop("0", "magenta");
// grad.addColorStop(".50", "blue");
// grad.addColorStop("1", "red");

// ctx.fillStyle = grad;


// ctx.font = "80px Georgia";
// ctx.fillText("Push-ka solutions", 0, 370);
// ctx.textAlign = "center";



$(document).ready(function() {
    // ----- timeline and drawSVG ------ //
    var svgTween = new TimelineMax({
        delay: 0.5
    });

    svgTween.staggerFrom(".svg1 .st0", 0.5, {
        opacity: 0,
        y: -50
    }, 0.1).staggerFrom(".svg1 .st1", 0.5, {
        opacity: 0,
        y: -50
    }, 0.1).staggerFrom(".svg1 .st2", 0.5, {
        opacity: 0,
        x: 50
    }, 0.1).staggerFrom(".svg1 .st4", 0.5, {
        opacity: 0,
        x: 50
    }, 0.1).staggerFrom(".svg1 .st3", 0.5, {
        opacity: 0,
        x: 50
    }, 0.1);


    var svgTween2 = new TimelineMax({
        delay: 0.5
    });
    svgTween2.staggerFrom(".svg2 .st0", 0.5, {
        opacity: 0,
        y: -50
    }, 0.1).staggerFrom(".svg2 .st2", 0.5, {
        opacity: 0,
        y: -50
    }, 0.1).staggerFrom(".svg2 .st3", 0.5, {
        opacity: 0,
        x: 50
    }, 0.1).staggerFrom(".svg2 .st4", 0.5, {
        opacity: 0,
        x: 50
    }, 0.1).staggerFrom(".svg2 .st5", 0.5, {
        opacity: 0,
        x: 50
    }, 0.1).staggerFrom(".svg2 .st6", 0.5, {
        opacity: 0,
        x: 50
    }, 0.1);


    var svgTween3 = new TimelineMax({
        delay: 0.5
    });
    svgTween3.staggerFrom(".svg3 .st0", 0.5, {
        opacity: 0,
        y: -50
    }, 0.1).staggerFrom(".svg3 .st2", 0.5, {
        opacity: 0,
        y: -50
    }, 0.1).staggerFrom(".svg3 .st3", 0.5, {
        opacity: 0,
        x: 50
    }, 0.1).staggerFrom(".svg3 .st4", 0.5, {
        opacity: 0,
        x: 50
    }, 0.1).staggerFrom(".svg3 .st5", 0.5, {
        opacity: 0,
        x: 50
    }, 0.1).staggerFrom(".svg3 .st6", 0.5, {
        opacity: 0,
        x: 50
    }, 0.1);

});