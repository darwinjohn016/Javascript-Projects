const minutes = document.querySelector(".minutes");
const seconds = document.querySelector(".seconds");

const startBtn = document.querySelector(".start-btn");
const stopBtn = document.querySelector(".stop-btn");
const resetBtn = document.querySelector(".reset-btn");

class Stopwatch{
    constructor(minutes,seconds){
        this.min = 0;
        this.sec = 0;
        this.minutes = minutes;
        this.seconds = seconds;
        this.interval = null;
    }

    start(){
        if(this.interval !== null) return;
        this.interval = setInterval(()=>{
            if(this.sec < 99){
                this.sec++;
                this.sec < 10 ? this.seconds.textContent = "0"+ this.sec : this.seconds.textContent = this.sec;
            }
            else {
                this.min++;
                this.min < 10 ? this.minutes.textContent = "0"+ this.min : this.minutes.textContent = this.min;
                this.sec = 0;
            }
        },10)
    }

    stop(){
        clearInterval(this.interval);
        this.interval = null;
    }

    reset(){
        clearInterval(this.interval);
        this.min = 0;
        this.sec = 0;
        this.minutes.textContent = "00";
        this.seconds.textContent = "00";
        this.interval = null; 
    }
}

const stopwatch = new Stopwatch(minutes,seconds);

startBtn.addEventListener("click",stopwatch.start.bind(stopwatch));
stopBtn.addEventListener("click",stopwatch.stop.bind(stopwatch));
resetBtn.addEventListener("click",stopwatch.reset.bind(stopwatch));