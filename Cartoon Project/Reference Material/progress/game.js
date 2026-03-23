"use strict";

window.requestAnimationFrame =  window.requestAnimationFrame ||
                                window.webkitRequestAnimationFrame ||
                                window.mozRequestAnimationFrame ||
                                window.oRequestAnimationFrame ||
                                window.msRequestAnimationFrame ||
                                function (callback) {
                                    window.setTimeout(callback, 1000 / 60);
                                };


var sprites = {};
var spriteFolder = "sprites/";

// Used in animation sequences.
var loadingFrame=0;

var fish1, fish2, fish3;

function fish (sprite,rotation,x,y){
	this.sprite=sprite;
	this.position={'x':x,'y':y};
	this.rotation=rotation;
};

var Game = {
    spritesStillLoading : 0,
	progress:0,
	totalImages:0
};

Game.start = function (canvasName) {
	console.log("Start with Canvas: "+canvasName);
    Canvas2D.initialize(canvasName);
	Game.loading();
    Game.loadAssets();
    Game.assetLoadingLoop();
};

Game.initialize = function() {
   // cannon.initialize();
};

Game.handleInput = function () {
    cannon.handleInput();
};

Game.update = function () {
};

Game.loading = function () {
	 
	 Canvas2D.clear();

     // Draw Loading text on the screen.
	 Canvas2D.canvasContext.font = "30px Arial";
	 
	 // Since the refresh rate is 60 frames a second, update the "Loading" message animation every 10 frames.

	 if(loadingFrame<=10)
	 	 Canvas2D.canvasContext.fillText("Loading",10,50);

	 else if(loadingFrame<=20)
	 	 Canvas2D.canvasContext.fillText("Loading.",10,50);

	 else if(loadingFrame<=30)
	 	 Canvas2D.canvasContext.fillText("Loading..",10,50);
		 
	 else if(loadingFrame<=40)
	 	 Canvas2D.canvasContext.fillText("Loading...",10,50);


	loadingFrame++;
	if(loadingFrame==40)
		loadingFrame=0;
	
	 // Calculate what percentage of the sprites have been loaded.
	 Game.progress=100-(Game.spritesStillLoading/Game.totalImages)*100;

	 // Draw a rectangle for the progress bar.	 
	 Canvas2D.canvasContext.fillRect(100,100,Game.progress*4,150);
	 
	 // Draw an outlinee of the progress bar.
	 Canvas2D.canvasContext.rect(100,100,100*4,150);
	 Canvas2D.canvasContext.stroke();
	 
	 Canvas2D.canvasContext.fillText(Game.totalImages-Game.spritesStillLoading+"/"+Game.totalImages,10,350);
};

Game.draw = function () {
   Canvas2D.clear();
   Canvas2D.drawImage(sprites.background, { x : 0, y : 0 }, 0, { x : 0, y : 0 });
   Canvas2D.drawImage(fish1.sprite, fish1.position, fish1.rotation*Math.PI / 180, fish1.position);
   Canvas2D.drawImage(fish2.sprite, fish2.position, fish2.rotation*Math.PI / 180, { x : 0, y : 0 });
   Canvas2D.drawImage(fish3.sprite, fish3.position, fish3.rotation*Math.PI / 180, fish3.position);
};

Game.update = function () {
        
};

Game.loadAssets = function () {    
    sprites.background = Game.loadSprite("background.jpg");
    sprites.fish =  Game.loadSprite("fish.png");
	
	fish1=new fish(sprites.fish,0,0,0);
	fish2=new fish(sprites.fish,180,400,400);
	fish3=new fish(sprites.fish,-45,400,0);
	
};

Game.loadSprite = function (imageName) {
    var image = new Image();
    image.src = spriteFolder + imageName;
    Game.spritesStillLoading += 1;
    Game.totalImages += 1;
	console.log("Loading: "+image.src);
    image.onload = function () {
        Game.spritesStillLoading -= 1;
    };
    return image;
};

Game.assetLoadingLoop = function () {
	
    if (Game.spritesStillLoading > 0) {
		Game.loading();		
        window.requestAnimationFrame(Game.assetLoadingLoop);
	}
    else {
		
        Game.initialize();
        Game.mainLoop();
    }
};

Game.mainLoop = function () {
    Game.update();
    Game.draw();
    window.requestAnimationFrame(Game.mainLoop);
};

document.addEventListener( 'DOMContentLoaded', Game.start('myCanvas'));