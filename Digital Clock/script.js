 
const time = document.getElementById('clock')

setInterval(function(){
    let date = new Date()
    time.innerHTML = date.toLocaleTimeString()
},1000)//by defalt this is one second