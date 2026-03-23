"use strict";

var Game = {
    canvas : undefined,
    canvasContext : undefined    
};

Game.start = function () {
    Game.canvas = document.getElementById("myCanvas");
    Game.canvasContext = Game.canvas.getContext("2d");
    Game.mainLoop();
};

document.addEventListener( 'DOMContentLoaded', Game.start);

Game.clearCanvas = function () {
    Game.canvasContext.clearRect(0, 0, Game.canvas.width, Game.canvas.height);
};

Game.mainLoop = function() {
    Game.clearCanvas();
    Game.update();
    Game.draw();
    window.setTimeout(Game.mainLoop, 1000 / 60);
};

Game.update = function () {
    
    Game.rectangleXPosition = document.data.xpos.value;
	Game.rectangleYPosition = document.data.ypos.value;
    
    console.log(Game.rectanglePosition);
};

Game.draw = function () {
    Game.canvasContext.fillStyle = "blue";
    Game.canvasContext.fillRect(Game.rectangleXPosition, Game.rectangleYPosition, 50, 50);
};

