var canvas = undefined;
var canvasContext = undefined;

function start() {
    canvas = document.getElementById("myCanvas");
    canvasContext = canvas.getContext("2d");
    gameLoop();
}

document.addEventListener('DOMContentLoaded', start);

function update() {
}

function draw() {

    canvasContext.beginPath();
    
    for (var x = 0.5; x <= canvas.width; x += 25) {

        canvasContext.moveTo(x, 0);
        canvasContext.lineTo(x, canvas.height);

    }

        canvasContext.moveTo(canvas.width-.5, 0);
        canvasContext.lineTo(canvas.width-.5, canvas.height);
        
    for (var y = 0.5; y <= canvas.height; y += 25) {

        canvasContext.moveTo(0, y);
        canvasContext.lineTo(canvas.width, y);
    
    }
    
    canvasContext.moveTo(0,canvas.height-.5);
    canvasContext.lineTo(canvas.width,canvas.height-.5);
        
    canvasContext.stroke();
}

function gameLoop() {
    canvasContext.fillStyle = "white";
    canvasContext.fillRect(0, 0, canvas.width, canvas.height);
    update();
    draw();
    window.setTimeout(gameLoop, 1000 / 60);
}