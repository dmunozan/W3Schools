//function to convert from fahrenheit to celsius
function fahrenheitToCelsius(degree) {
	if (degree.length === 0) {
		document.getElementById("inputCelsius").value = "";
	}else{
		document.getElementById("inputCelsius").value = Math.round((degree - 32)*5/9*100)/100;
	}
}

//function to convert from celsius to fahrenheit
function celsiusToFahrenheit(degree) {
	if (degree.length === 0) {
		document.getElementById("inputFahrenheit").value = "";
	}else{
		document.getElementById("inputFahrenheit").value = Math.round(((degree*9/5)+32)*100)/100;
	}
}
