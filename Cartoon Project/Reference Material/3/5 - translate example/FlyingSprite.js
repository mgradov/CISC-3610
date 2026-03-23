"use strict";

var Game = {
    canvas : undefined,
    canvasContext : undefined,
};

Game.start = function () {
    Game.canvas = document.getElementById("myCanvas");
    Game.canvasContext = Game.canvas.getContext("2d");
    window.setTimeout(Game.mainLoop, 500);
};

document.addEventListener( 'DOMContentLoaded', Game.start);

Game.mainLoop = function() {
    Game.draw();
};

Game.draw = function () {
	Game.canvasContext.fillRect(10,10,100,50);
	
	// Save canvas properties.
	Game.canvasContext.save();
	
	Game.canvasContext.fillStyle = "red";
	
	// Shift over the orientation of the canvas.
	Game.canvasContext.translate(70,70);
		
	// Draws in red.
	Game.canvasContext.fillRect(10,10,100,50);
	
	// Restore canbas properties.
	Game.canvasContext.restore();
	
	// Shift the orientation of the canvas.
	Game.canvasContext.translate(200,200);
	
	// Draws back in black (the original color that was saved in the canvas properties).
	Game.canvasContext.fillRect(10,10,100,50);
};