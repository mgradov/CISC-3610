"use strict";

var sprites = {};

function handleKeyDown(evt) {
    Keyboard.keyDown = evt.keyCode;
	console.log("*");
}

function handleKeyUp(evt) {
    Keyboard.keyDown = -1;
	console.log("*");
}

var Keyboard = { keyDown : -1 };

var Keys = {
    A: 65,     B: 66,      C: 67,      D: 68,       E: 69,      F: 70,
    G: 71,     H: 72,      I: 73,      J: 74,       K: 75,      L: 76,
    M: 77,     N: 78,      O: 79,      P: 80,       Q: 81,      R: 82,
    S: 83,     T: 84,      U: 85,      V: 86,       W: 87,      X: 88,
    Y: 89,     Z: 90
};

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
    document.onkeydown = handleKeyDown;
    document.onkeyup = handleKeyUp;
    window.setTimeout(Game.mainLoop, 500);
};

document.addEventListener( 'DOMContentLoaded', Game.start);

Game.mainLoop = function() {
    window.setTimeout(Game.mainLoop, 1000 / 60);
};

