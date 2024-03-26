 
const time = document.getElementById('clock')

setInterval(function(){
    let date = new Date()
    time.innerHTML = date.toLocaleTimeString(undefined, { hour12: true });

},1000)

const randomColor = function(){
    const hex = '0123456789ABCDEF'
    let color = '#'
 

    for (let i = 0 ; i<6; i++){
        color = color + hex[Math.floor(Math.random()*16)]
    }
    console.log(color)
    const body = document.querySelector('body')
    body.style.backgroundColor = color;
}
//randomColor();

let start = document.querySelector('.start')

let stop = document.querySelector('.stop')

let setIntervalID

 start.addEventListener('click',function(e){

    setIntervalID = setInterval(randomColor,1000)

})
stop.addEventListener('click',function(e){
    clearInterval(setIntervalID)
})



// Theme clock

const hourEl = document.querySelector('.hour')
const minuteEl = document.querySelector('.minute')
const secondEl = document.querySelector('.second')
const timeEl = document.querySelector('.time')
const dateEl = document.querySelector('.date')
const toggle = document.querySelector('.toggle')

const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];



function setTime() {
    const time = new Date();
    const month = time.getMonth()
    const day = time.getDay()
    const date = time.getDate()
    const hours = time.getHours()
    const hoursForClock = hours >= 13 ? hours % 12 : hours;
    const minutes = time.getMinutes()
    const seconds = time.getSeconds()
    const ampm = hours >= 12 ? 'PM' : 'AM'
    const anpm = hours >=16
    const abcd = 'efgh'

    hourEl.style.transform = `translate(-50%, -100%) rotate(${scale(hoursForClock, 0, 12, 0, 360)}deg)`
    minuteEl.style.transform = `translate(-50%, -100%) rotate(${scale(minutes, 0, 60, 0, 360)}deg)`
    secondEl.style.transform = `translate(-50%, -100%) rotate(${scale(seconds, 0, 60, 0, 360)}deg)`

    timeEl.innerHTML = `${hoursForClock}:${minutes < 10 ? `0${minutes}` : minutes} ${ampm}`
    dateEl.innerHTML = `${days[day]}, ${months[month]} <span class="circle">${date}</span>`
}

// StackOverflow https://stackoverflow.com/questions/10756313/javascript-jquery-map-a-range-of-numbers-to-another-range-of-numbers
const scale = (num, in_min, in_max, out_min, out_max) => {
    return (num - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
}

setTime()

setInterval(setTime, 1000)

//this is not use in this code 

if ( 5 > 8 ){
    console.log(` i am aman kumar chaurasiya `)
}

else{
    console.log(`you are not eligible for next exam so focouse on only your coding skill `)
}