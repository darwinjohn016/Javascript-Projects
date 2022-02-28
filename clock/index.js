const hours = document.querySelector(".hours");
const minutes = document.querySelector(".minutes");
const seconds = document.querySelector(".seconds");
const meridiem = document.querySelector(".meridiem");

setInterval(()=>{

    let date= new Date();
    
    let hour = date.getHours();
    let minute = date.getMinutes();
    let second = date.getSeconds();
    

    if(hour > 12){
        meridiem.textContent = "PM";
        hour -= 12;
    }
    else meridiem.textContent = "AM";

    hour < 10 ? hours.textContent = "0" + hour :  hours.textContent = hour;
    minute < 10 ? minutes.textContent = "0" + minute :  minutes.textContent = minute;
    second < 10 ? seconds.textContent = "0" + second :  seconds.textContent = second;    

},60)