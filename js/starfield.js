
function Starfield(min, max) {

	// Define # of stars
	this.min = min;
	this.max = max;
	this.stars = Math.floor(Math.random() * (max - min) + min );

	// Get starfield dimensions
	this.canvas = $("#starfield");
	this.canvasHeight = this.canvas.height();
	this.canvasWidth = this.canvas.width();

	// Create Stars
	for ( var i = 0; i < this.stars ; i++ ) {

		// Choose random star type
		var starTypes = new Array();
		starTypes[0] = "yellow-dwarf";
		starTypes[1] = "white-dwarf";
		starTypes[2] = "blue-dwarf";
		starTypes[3] = "red-giant";
		var randStarType = Math.floor(Math.random() * 4);

		// Generate random placement
		var coordinateX = Math.floor(Math.random() * this.canvasWidth);
		var coordinateY = Math.floor(Math.random() * this.canvasHeight);

		// Generate random twinkle
		var animationFrequency = Math.random() * (10 - 2) + 2;
		var animationDelay = Math.floor(Math.random() * 2);

		// Populate the starfield
		$("#starfield").append('<div style="margin-left:' + coordinateX + 'px; margin-top:' + coordinateY + 'px; -webkit-animation: twinkle ' + animationFrequency  + "s " + animationDelay  + 's infinite; " class="' + starTypes[randStarType] + '"></div>');
	} 
}

// Create the starfield
var starfield = new Starfield(200, 500);




