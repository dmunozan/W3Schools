//Strings can be written with double or single quotes and backslash allows to write " & '
var str = "Strings can be written with \"double quotes\" " + 'or \'single quotes\'';
document.getElementById("demo").innerHTML = "<h3>" + str + "</h3>";

//Length of a string
document.getElementById("demo").innerHTML += "<div class='results'><b>Length</b>: " +
	str.length + "</div>";

//indexOf() - First ocurrence of a string
document.getElementById("demo").innerHTML += "<div class='results'><b>indexOf(\"quotes\")</b>: " +
	str.indexOf("quotes") + "</div>";

//match() - Search for a text in a string and return the text if found
document.getElementById("demo").innerHTML += "<div class='results'><b>match(\"written\")</b>: " +
	str.match("written") + "</div>";
	
//replace() - Replace characters in a string
document.getElementById("demo").innerHTML += "<div class='results'><b>replace(\"\"double quotes\" " +
	"or \'single quotes\'\", \"\"double\" or \'single\' quotes\")</b>: " +
	str.replace("\"double quotes\" or \'single quotes\'", "\"double\" or \'single\' quotes") + "</div>";

//toUpperCase() - Convert string to upper case
document.getElementById("demo").innerHTML += "<div class='results'><b>toUpperCase()</b>: " +
	str.toUpperCase() + "</div>";

//toLowerCase() - Convert string to lower case
document.getElementById("demo").innerHTML += "<div class='results'><b>toLowerCase()</b>: " +
	str.toLowerCase() + "</div>";

//split() - Split a string into an array
var strArray = str.split(" ");
var auxStr = "";
for (var i = 0; i < strArray.length; i++) {
	if (i > 0) {
		auxStr += " / ";
	}
	auxStr += strArray[i];
}
document.getElementById("demo").innerHTML += "<div class='results'><b>split(\" \")</b>: " +
	auxStr + "</div>";
