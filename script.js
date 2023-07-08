let timerDisplay = document.querySelector(".timer-display");
let pauseBtn = document.getElementById("pause-timer");
let startBtn = document.getElementById("start-timer");
let resetBtn = document.getElementById("reset-timer");

//initializing values to 00
let msec = 0o0; //0o0 is a 00 only, its a octal litreals
let secs = 0o0;
let mins = 0o0;

//Initializing timerId with null
let timerId = null;

//Calling startTimer() when Start button gets clicked
startBtn.addEventListener('click', function(){
    if(timerId !== null){
        clearInterval(timerId);
    }
    timerId = setInterval(startTimer, 10);
});


//Calling startTimer() when Pause button gets clicked
pauseBtn.addEventListener('click', function(){
    clearInterval(timerId);
});


//Calling startTimer() when Reset button gets clicked
resetBtn.addEventListener('click', function(){
    clearInterval(timerId);
    timerDisplay.innerHTML = `00 : 00 : 00`;

    //reseting values to 00
    msec = secs = mins = 0o0;
});

//creating function for stopwatch to start, pause & reset
function startTimer(){
    msec++;
    if(msec == 100){
        msec = 0;
        secs++;
        if(secs == 60){
            secs = 0;
            mins++;
        }
    }

        //Using if else statements
    // let msecString;
    // if(msec < 10){
    //     msecString = `0${msec}`;
    // }
    // else{
    //     msecString = msec;
    // }


        //Using conditional steatments
    let msecString = msec < 10 ? `0${msec}` : msec;
    let secsString = secs < 10 ? `0${secs}` : secs;
    let minString = mins < 10 ? `0${mins}` : mins;

    //passing the string in timer display using innerHTML
    timerDisplay.innerHTML = `${minString} : ${secsString} : ${msecString}`;
}


