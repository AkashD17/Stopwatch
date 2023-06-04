
var second = 0;
var minute = 0;
var milliSecond = 0;
var timer;
function Calltime() {
    milliSecond++;
    if (milliSecond < 100) {
        if (milliSecond === 99) {
            milliSecond = 0;
            second++;
            if (second === 60)  {
                second = 0;
                minute++;
            }
        }
    }
    else{
        miliSec = 0;
    }
    document.getElementById("timer").innerHTML = minute + ":" + second + ":" + milliSecond;
}
function start() {
    document.getElementById("start").disabled = true;
    timer = setInterval(Calltime, 10);
}
function stop() {
    document.getElementById("start").disabled = false;
    clearInterval(timer);
}
function reset() {
    stop();
    minute = 0;
    second = 0;
    milliSecond = 0;
    document.getElementById("timer").innerHTML = minute + ":" + second + ":" + milliSecond;
}