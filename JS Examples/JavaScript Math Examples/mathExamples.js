//Initial variables
var currentNum = 0, auxNum = 0;

//Math.PI returns the value of PI
currentNum = Math.PI;
document.getElementById("demo").innerHTML = "<h3>Math.PI returns the value of PI:</h3>" +
	"<div class='results'><b>Math.PI</b>: " + currentNum + "</div>";

//Math.round(x) returns the rounded value of x
auxNum = currentNum;
currentNum = Math.round(currentNum);
document.getElementById("demo").innerHTML += "<h3>Math.round(x) returns the rounded " +
	"value of x:</h3><div class='results'><b>Math.round(" + auxNum + ")</b>: " +
	currentNum + "</div>";

//Math.pow(x, y) returns the value of x to the power of y
auxNum = currentNum;
currentNum = Math.pow(currentNum, currentNum);
document.getElementById("demo").innerHTML += "<h3>Math.pow(x, y) returns the value " +
	"of x to the power of y:</h3><div class='results'><b>Math.pow(" + auxNum + ", " +
	auxNum + ")</b>: " + currentNum + "</div>";

//Math.sqrt(x) returns the square root of x
auxNum = currentNum;
currentNum = Math.sqrt(currentNum);
document.getElementById("demo").innerHTML += "<h3>Math.sqrt(x) returns the square " +
	"root of x:</h3><div class='results'><b>Math.sqrt(" + auxNum + ")</b>: " +
	currentNum + "</div>";
	
//Math.ceil(x) returns the value of x rounded up
document.getElementById("demo").innerHTML += "<h3>Math.ceil(x) returns the value of " +
	"x rounded up:</h3><div class='results'><b>Math.ceil(" + currentNum + ")</b>: " +
	Math.ceil(currentNum) + "</div>";

//Math.floor(x) returns the value of x rounded down
auxNum = currentNum;
currentNum = Math.floor(currentNum);
document.getElementById("demo").innerHTML += "<h3>Math.floor(x) returns the value of " +
	"x rounded down:</h3><div class='results'><b>Math.floor(" + auxNum + ")</b>: " +
	currentNum + "</div>";

//Math.sin(x) returns the sin of the angle x (given in radians)
auxNum = currentNum;
currentNum = Math.sin(currentNum);
document.getElementById("demo").innerHTML += "<h3>Math.sin(x) returns the sin of " +
	"the angle x (given in radians):</h3><div class='results'><b>Math.sin(" +
	auxNum + ")</b>: " + currentNum + "</div>";

//Math.cos(x) returns the cosin of the angle x (given in radians)
document.getElementById("demo").innerHTML += "<h3>Math.cos(x) returns the cosin of " +
	"the angle x (given in radians):</h3><div class='results'><b>Math.cos(" +
	auxNum + ")</b>: " + Math.cos(auxNum) + "</div>";

//Math.abs(x) returns the absolute (positive) value of x
auxNum = currentNum;
currentNum = Math.abs(currentNum);
document.getElementById("demo").innerHTML += "<h3>Math.abs(x) returns the absolute " +
	"(positive) value of x:</h3><div class='results'><b>Math.abs(" + auxNum +
	")</b>: " + currentNum + "</div>";

//List of random integers between 1 & 100
var numList = [];
for (var i=0;i<10;i++) {
	numList.push(Math.floor(Math.random() * 100) + 1);
}
numList.sort(function(a, b){return a - b});
document.getElementById("demo").innerHTML += "<h3>Random generated list for max and min " +
	"methods:</h3><div class='results'><b>Number list</b>: " + numList + "</div>";

//Math.max() return the number with the highest value from a list of arguments
document.getElementById("demo").innerHTML += "<h3>Math.max() return the number with the " +
	"highest value from a list of arguments:</h3><div class='results'><b>Math.max(" +
	numList + ")</b>: " + Math.max(...numList) + "</div>";

//Math.min() to return the number with the lowest value from a list of arguments
document.getElementById("demo").innerHTML += "<h3>Math.min() return the number with the " +
	"lowest value from a list of arguments:</h3><div class='results'><b>Math.min(" +
	numList + ")</b>: " + Math.min(...numList) + "</div>";
