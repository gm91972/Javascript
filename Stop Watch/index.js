let playBtn = document.querySelector('.playBtn');
let resetBtn = document.querySelector('.resetBtn');
let timer = document.querySelector('.timer');
let btns = document.querySelector('.btns')

let hours = 0;
let minutes = 0;
let seconds = 0;

TimerInterval = null;
timerStatus = "stopped";

function stopWatch() {
    seconds++
    if (seconds / 60 === 1) {
        seconds = 0;
        minutes++
        if (minutes / 60 === 1) {
            minutes = 0;
            hours++;
        }
    }
    timer.innerHTML = hours + ":" + minutes + ":" + seconds;
}

playBtn.addEventListener('click', function () {
    if (timerStatus === "stopped") {
        TimerInterval = setInterval(() => {
            stopWatch();
        }, 1000);

        playBtn.innerHTML = '<i class="fa fa-pause"></i>';
        timerStatus = "started";
    }
    else {
        clearInterval(TimerInterval);
        playBtn.innerHTML = '<i class="fa fa-play"></i>';
        timerStatus = "stopped";
    }

});

resetBtn.addEventListener('click', function() {
   clearInterval(TimerInterval);
   seconds = 0;
   minutes = 0;
   hours = 0;
   timer.innerHTML = '00:00:00';
});