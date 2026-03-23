"use strict";

function handleMouseMove(evt) {
    Game.mousePosition = { x : evt.pageX, y : evt.pageY };
}

var Game = {
    canvas : undefined,
    canvasContext : undefined,
    backgroundSprite : undefined,
    cannonBarrelSprite : undefined,
    mousePosition : { x : 0, y : 0 },
    cannonPosition : { x : 150, y : 150 },
    cannonOrigin : { x : 34, y : 34 },
    cannonRotation : 0
};

Game.clearCanvas = function () {
    Game.canvasContext.clearRect(0, 0, Game.canvas.width, Game.canvas.height);
};

Game.drawImage = function (sprite, position, rotation, origin) {
    Game.canvasContext.save();
    Game.canvasContext.translate(position.x, position.y);
    Game.canvasContext.rotate(rotation);
    Game.canvasContext.drawImage(sprite, 0, 0, sprite.width, sprite.height,
       -origin.x, -origin.y, sprite.width, sprite.height);
    Game.canvasContext.restore();
};

Game.start = function () {
    Game.canvas = document.getElementById("myCanvas");
    Game.canvasContext = Game.canvas.getContext('2d');

    //document.onmousemove = handleMouseMove;

    Game.backgroundSprite = new Image();
    Game.backgroundSprite.src = "spr_background.jpg";
    Game.cannonBarrelSprite = new Image();
    Game.cannonBarrelSprite.src = "spr_cannon_barrel.png";
    window.setTimeout(Game.mainLoop, 500);
};

document.addEventListener( 'DOMContentLoaded', Game.start);

Game.mainLoop = function() {
 	Game.update();
    Game.draw();
    window.setTimeout(Game.mainLoop, 1000 / 60);
};

Game.update = function () {
	Game.cannonRotation+=1*Math.PI/180;
};

Game.draw = function () {
    Game.clearCanvas();
    Game.canvasContext.beginPath();
	Game.canvasContext.moveTo(0,150);
    Game.canvasContext.lineTo(Game.canvas.width,150);
	Game.canvasContext.stroke();
	
    Game.drawImage(Game.cannonBarrelSprite, Game.cannonPosition, Game.cannonRotation, Game.cannonOrigin);
    Game.drawImage(Game.cannonBarrelSprite, {x:400,y:150}, Game.cannonRotation, {x:0,y:0});


};