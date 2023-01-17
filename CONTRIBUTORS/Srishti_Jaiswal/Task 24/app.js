let celsius = document.getElementById('Celsius');
let fahrenheit = document.getElementById('Fahrenheit');
celsius.oninput = function () {
    var letterNumber = /^[0-9]+$/;
    if (celsius.value == "") {
        fahrenheit.value = "";
    }
    else {
        if (isNaN(celsius.value)) {
       
            document.getElementById("demo").style.visibility = "visible";
            document.getElementById('demo').innerHTML = "Celsius must be a number.";
        
        }
        else {
            document.getElementById("demo").style.visibility = "hidden";
            document.getElementById('demo').innerHTML = "";
            let f = (parseFloat(celsius.value) * 9) / 5 + 32;
            fahrenheit.value = parseFloat(f.toFixed(2));
        }
    }
}


fahrenheit.oninput = function () {
    if (fahrenheit.value == "") {
        celsius.value = "";
    }
    else {
        if (isNaN(fahrenheit.value)) {
            document.getElementById("demo").style.visibility = "visible";
            document.getElementById('demo').innerHTML = "Fahrenheit must be a number.";
        }
        else {
            document.getElementById("demo").style.visibility = "hidden";
            document.getElementById('demo').innerHTML = "";
            let c = ((parseFloat(fahrenheit.value) - 32) * 5) / 9;
            celsius.value = parseFloat(c.toFixed(2));
        }
    }
}
