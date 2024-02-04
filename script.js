const watchDocument = document.querySelector('#watch');
let seconds = 0;
let minutes = 0;
let hours = 0;
let interval;

function init () {
    if (!interval) {
        watch();
        interval = setInterval(watch, 1000);
    }
}

const pause = () => {
    clearInterval(interval);
    interval = null;
}

const clearAll = () => {
    clearInterval(interval);
    interval = null;
    seconds = 0;
    minutes = 0;
    hours = 0;
    updateDisplay();
}

const digitZero = (digit) => {
    return digit < 10 ? `0${digit}` : digit ;
}

function watch () {
    seconds ++;

    if (seconds === 60) {
        minutes ++;
        seconds = 0;
    }

    if (minutes === 60) {
        hours ++;
        minutes = 0;
    }

    updateDisplay();

   
}

function updateDisplay () {
    watchDocument.innerHTML = digitZero(hours) + ":" + digitZero(minutes) + ":" + digitZero(seconds);

}
