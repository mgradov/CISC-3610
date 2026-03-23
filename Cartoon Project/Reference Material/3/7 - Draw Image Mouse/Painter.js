"use strict";

var sprites = {};

function handleMouseUp(evt) {
    if (evt.which === 1)
	    Canvas2D.drawImage(sprites.balloon, {x:evt.clientX,y:evt.clientY} , 0, {x:sprites.balloon.width/2, y:sprites.balloon.height/2-10});
}


var Canvas2D = {
    canvas : undefined,
    canvasContext : undefined
};

Canvas2D.initialize = function (canvasName) {
    Canvas2D.canvas = document.getElementById(canvasName);
    Canvas2D.canvasContext = Canvas2D.canvas.getContext('2d');
};

Canvas2D.clear = function () {
    Canvas2D.canvasContext.clearRect(0, 0, this.canvas.width, this.canvas.height);
};

Canvas2D.drawImage = function (sprite, position, rotation, origin) {
    Canvas2D.canvasContext.save();
    Canvas2D.canvasContext.translate(position.x, position.y);
    Canvas2D.canvasContext.rotate(rotation);
    Canvas2D.canvasContext.drawImage(sprite, 0, 0,
        sprite.width, sprite.height,
        -origin.x, -origin.y,
        sprite.width, sprite.height);
    Canvas2D.canvasContext.restore();
};

var Game = {};

Game.start = function () {
    Canvas2D.initialize("myCanvas");
    document.onmouseup = handleMouseUp;
	
	sprites.balloon = new Image();
    sprites.balloon.src = "spr_balloon.png";
	
	console.log(sprites.balloon);

    window.setTimeout(Game.mainLoop, 500);
};

document.addEventListener( 'DOMContentLoaded', Game.start);

Game.mainLoop = function() {
	Canvas2D.canvasContext.fillStyle="cyan";
	Canvas2D.canvasContext.fillRect(0,0,Canvas2D.canvas.width,Canvas2D.canvas.height);
	console.log(Canvas2D.canvas.width+ " " + Canvas2D.canvas.height);
};

