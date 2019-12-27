$(document).ready(function() {
	function componentToHex(c) {
		var hex = c.toString(16);
		return hex.length == 1 ? "0" + hex : hex;
	}

	function rgbToHex(r, g, b) {
		return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
	}

	console.log(rgb(255, 4, 4));

	function rgb(r, g, b){
		let r1 = 0, g1 = 0, b1 = 0;
		if(r < 0) { r = 1; } else if(r > 255) { r = 255; }
		if(g < 0) { g = 1; } else if(g > 255) { g = 255; }
		if(b < 0) { b = 1; } else if(b > 255) { b = 255; }
		console.log(r, g, b);

		console.log(r.toString().split(''));
		r.toString().split('').forEach(element => {
			console.log(element)
		});
		
		return "#"+r+g+b;
	}
});