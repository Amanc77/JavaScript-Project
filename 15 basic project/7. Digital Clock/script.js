 
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