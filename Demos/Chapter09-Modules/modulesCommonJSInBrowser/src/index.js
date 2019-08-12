const arrUnion = require("arr-union");
const convertArrayToText = require("./array-to-text");

document.addEventListener("DOMContentLoaded", function() {
	var arrayOne = [1, 2, 3, 4, 5, 6, 7];
	var arrayTwo = [3, 4, 5, 6, 7, 8, 9];

	var combinedArray = arrUnion(arrayOne, arrayTwo);
	var text = convertArrayToText(combinedArray);

	document.getElementById("output").innerHTML = text;
});


