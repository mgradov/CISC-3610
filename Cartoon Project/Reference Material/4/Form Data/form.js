var canvas = undefined;
var canvasContext = undefined;

	var offset=0.5;
	var jump=10;

function start() {
    canvas = document.getElementById("myCanvas");
    canvasContext = canvas.getContext("2d");
}

document.addEventListener('DOMContentLoaded', start);

function update() {
}

function draw() {
	canvasContext.fillStyle = "white";
    canvasContext.fillRect(0, 0, canvas.width, canvas.height);
	
	if(jump<0)
		return;

    canvasContext.beginPath();
	
	// Draw Graph Paper.
	canvasContext.strokeStyle="#00FFFF";
	canvasContext.lineWidth=1;
    
    for (var x = offset; x <= canvas.width; x += jump) {

        canvasContext.moveTo(x, 0);
        canvasContext.lineTo(x, canvas.height);

    }

        canvasContext.moveTo(canvas.width-offset, 0);
        canvasContext.lineTo(canvas.width-offset, canvas.height);
        
    for (var y = offset; y <= canvas.height; y += jump) {

        canvasContext.moveTo(0, y);
        canvasContext.lineTo(canvas.width, y);
    
    }
    canvasContext.stroke();
	
	
	// Setup Axises
	canvasContext.strokeStyle="#000000";
	canvasContext.lineWidth=2;
		

	canvasContext.beginPath();
    // Draw X Axis
	canvasContext.moveTo(0,(canvas.height+jump)/2-offset);
    canvasContext.lineTo(canvas.width,(canvas.height+jump)/2-offset);
	

	// Draw Y Axis
    canvasContext.moveTo(canvas.width/2,-offset);
    canvasContext.lineTo(canvas.width/2,canvas.height-offset);

    canvasContext.stroke();

	// Draw Graph
	canvasContext.save();
    plotEquation();
	canvasContext.restore();

}

function plotEquation() {

	canvasContext.strokeStyle="#FF0000";
	
	canvasContext.beginPath();
    canvasContext.translate(canvas.width/2,(canvas.height+jump)/2-offset);
	for (var x = -canvas.width/2; x <= canvas.width; x += jump) {
        canvasContext.lineTo(x, eval(document.data.equation.value));
    }
	canvasContext.stroke();		
}