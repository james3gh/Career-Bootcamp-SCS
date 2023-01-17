let startbtn = document.getElementById('start');
let stopbtn = document.getElementById('stop');
let resetbtn = document.getElementById('reset');


let min = 00;
let sec = 00;
let milisec = 00;


startbtn.addEventListener('click', function () {
    timer = true;
    stopWatch();
});

stopbtn.addEventListener('click', function () {
    timer = false;
    
});

resetbtn.addEventListener('click', function () {
    timer = false;
    
    min = 0;
    sec = 0;
    milisec = 00;
  
    document.getElementById('min').innerHTML = "00";
    document.getElementById('sec').innerHTML = "00";
    document.getElementById('milisec').innerHTML = "00";

});

function stopWatch() {
    if (timer) {
        milisec++;
        
        if (milisec == 100) {
            sec++;
            milisec = 0;
        }

    
        if (sec == 60) {
            min++;
            sec = 0;
        }
        
        
        let minstr = min;
        let secstr = sec;
        let milisecstr = milisec;

        
        if (min < 10) {
            minstr = "0" + minstr;
        
        }
        if (sec < 10) {
            secstr = "0" + secstr;
        
        }
        if (milisec < 10) {
            milisec = "0" + milisec;
        }
        
        document.getElementById('min').innerHTML = minstr;
        document.getElementById('sec').innerHTML = secstr;
        document.getElementById('milisec').innerHTML = milisecstr;
        setTimeout(stopWatch, 10);
    }

}

