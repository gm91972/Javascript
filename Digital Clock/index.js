let hour = document.querySelector('.hr');
let min = document.querySelector('.min');
let sec = document.querySelector('.sec');
let am = document.querySelector('.am');

function getTime(){

    let date = new Date();
    hours = date.getHours();
    mins = date.getMinutes();
    secs = date.getSeconds();
    hour.innerHTML = hours-12;
    min.innerHTML = mins;
    sec.innerHTML = secs;
    if(hours==0 || hours==12){
        am.innerHTML = 'AM';
    }
    else if(hours>12 || hours-12){
        am.innerHTML = 'PM' ;
    }
    setInterval(() => {
      getTime()  
    }, 1000);
}
getTime();