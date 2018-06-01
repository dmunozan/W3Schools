//Requesting for the strings
var str1 = prompt("Please enter a string", "Hello");
var str2 = prompt("Please enter another string", "World!");

//Examples for adding strings and numbers
var num = 2;
var strNum = "7";
var strNoNum = "Yellow";

if ((str1 != null) & (str2 != null)) {
	//Showing strings introduced by the user
	document.getElementById("demo").innerHTML = "<h3>Initial Strings:</h3>"+
		"<div class='results'><b>String 1</b>: "+str1+"</br>"+"<b>String 2</b>: "+str2+"</div>";

	//Adding two strings together using the concatenating (+) operator
	document.getElementById("demo").innerHTML += "<h3>Adding two strings together "+
		"using the concatenating (+) operator:</h3>"+
		"<div class='results'><b>Result</b>: "+str1 + str2+"</div>";

	//Adding two strings together with a space in the first string
	var str1WithSpace = str1 + " ";
	document.getElementById("demo").innerHTML += "<h3>Adding two strings together "+
		"with a space in the first string:</h3>"+
		"<div class='results'><b>Result</b>: "+str1WithSpace + str2+"</div>";
		
	//Adding two strings together with a space in between
	document.getElementById("demo").innerHTML += "<h3>Adding two strings together "+
		"with a space in between:</h3>"+
		"<div class='results'><b>Result</b>: "+str1+" "+str2+"</div>";
	
	//Adding two strings together using the += operator
	var strAddedWithOperator = str1;
	strAddedWithOperator += str2;
	document.getElementById("demo").innerHTML += "<h3>Adding two strings together "+
		"using the += operator:</h3><div class='results'><b>Result</b>: "+
		strAddedWithOperator+"</div>";
}

//Adding strings and numbers
document.getElementById("demo").innerHTML += "<h2>Adding strings and numbers:</h2>"+
	"<div class='results'><b>Number</b>: "+num+"</br><b>String number</b>: '"+strNum+
	"'</br><b>String</b>: "+strNoNum+"</div>";

//Number + String number
var numPlusStrNum = num + strNum;
document.getElementById("demo").innerHTML += "<h3>Number + String number:</h3>"+
	"<div class='results'><b>Result</b>: "+numPlusStrNum+" - <b>Is a string?</b>: "+
	isString(numPlusStrNum)+"</div>";

//Number + String
var numPlusStr = num + strNoNum;
document.getElementById("demo").innerHTML += "<h3>Number + String:</h3>"+
	"<div class='results'><b>Result</b>: "+numPlusStr+" - <b>Is a string?</b>: "+
	isString(numPlusStr)+"</div>";

//String number + Number
var strNumPlusNum = strNum + num;
document.getElementById("demo").innerHTML += "<h3>String number + Number:</h3>"+
	"<div class='results'><b>Result</b>: "+strNumPlusNum+" - <b>Is a string?</b>: "+
	isString(strNumPlusNum)+"</div>";

//String + Number
var strPlusNum = strNoNum + num;
document.getElementById("demo").innerHTML += "<h3>String + Number:</h3>"+
	"<div class='results'><b>Result</b>: "+strPlusNum+" - <b>Is a string?</b>: "+
	isString(strPlusNum)+"</div>";

function isString(numOrStr) {
  return Object.prototype.toString.call(numOrStr) === "[object String]";
}
