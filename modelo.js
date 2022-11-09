function load (){
var msg = document.getElementById('msg')
var img = document.getElementById('img')
var data = new Date()
var hour = data.getHours()
var min  = data.getMinutes()
msg.innerHTML = ` agora são ${hour} horas e ${min} min `
if (hour >= 5 && hour < 12){
img.src = 'manha.png'
document.body.style.background = '#f5ede2'
} else if (hour >= 12 && hour < 18) {
img.src = 'tarde.png'
document.body.style.background = '#9e7b1e'
}else {
img.src = 'noite.png'
document.body.style.background = '#101920'
}
}