//Examples
var obj1 = {name:"Finn", surname:"the Human", age:12, completeName: function() {return this.name + " " + this.surname;}};
var obj2 = {
	name:"Jake",
	surname:"the Dog",
	age:28,
	completeName: function() {
		return this.name + " " + this.surname;
	}
};

//Access object properties using .property
document.getElementById("demo").innerHTML = "<h3>Access object properties using .property:</h3>"+
	"<div class='results'><b>Name Obj1</b>: "+obj1.name+"</br>"+"<b>Surname Obj1</b>: "+obj1.surname+
	"</br>"+"<b>Age Obj1</b>: "+obj1.age+"</div>";

//Access object properties using [property]
document.getElementById("demo").innerHTML += "<h3>Access object properties using [property]:</h3>"+
	"<div class='results'><b>Name Obj2</b>: "+obj2['name']+"</br>"+"<b>Surname Obj2</b>: "+obj2['surname']+
	"</br>"+"<b>Age Obj2</b>: "+obj2['age']+"</div>";
	
//Access a function property as a method
document.getElementById("demo").innerHTML += "<h3>Access a function property as a method:</h3>"+
	"<div class='results'><b>Adventure Time is</b>: "+obj1.completeName()+" and "+obj2.completeName()+"</div>";

//Access a function property as a property
document.getElementById("demo").innerHTML += "<h3>Access a function property as a property:</h3>"+
	"<div class='results'><b>I forgot the (), >.<</b>: "+obj1.completeName+" and "+obj2.completeName+"</div>";
