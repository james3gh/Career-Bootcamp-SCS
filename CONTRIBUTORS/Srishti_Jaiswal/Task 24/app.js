let celcius = document.getElementById('Celcius');
let fahrenheit = document.getElementById('Fahrenheit');
celcius.oninput = function () {
    // var letterNumber = /^[0-9]+$/;
    if (isNaN(celcius.value)) {
        
        alert("Celcius must be a number");
    }
    else {
        
        let f = (parseFloat(celcius.value) * 9) / 5 + 32;
        fahrenheit.value = parseFloat(f.toFixed(2));
    }
}
fahrenheit.oninput = function () {
    if (isNaN(fahrenheit.value)) {
        
        alert("Fahrenheit must be a number");
    }
    else {
        
         let c = ((parseFloat(fahrenheit.value) - 32) * 5) / 9;
        celcius.value = parseFloat(c.toFixed(2));
    }
   
}
