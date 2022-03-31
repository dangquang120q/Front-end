var color = document.querySelector('#color')
var eraser = document.querySelector('.eraser')
var lower = document.querySelector('.lower')
var size = document.querySelector('.weight')
var bolder = document.querySelector('.bolder')
var save = document.querySelector('.save')
var clear = document.querySelector('.clear')
var canvas = document.querySelector('canvas');
var ctx = canvas.getContext("2d")
var isdraw = false
var potision = {
    x: 0,
    y: 0
}
var potisonAfter = {
    x: 0,
    y: 0
}
canvas.addEventListener('mousedown',function(e){
    potision = {
        x: e.offsetX,
        y: e.offsetY
    }
    isdraw = true
})
canvas.addEventListener('mousemove',function(e){
    if(isdraw){
        potisionAfter = {
            x: e.offsetX,
            y: e.offsetY
        }
        ctx.lineWidth = size.innerText;
        ctx.lineCap = "round"
        ctx.strokeStyle = color.value;
        ctx.beginPath()
        ctx.moveTo(potision.x,potision.y);
        ctx.lineTo(potisionAfter.x,potisionAfter.y);
        ctx.stroke();
        potision.x = potisionAfter.x
        potision.y = potisionAfter.y
    }
})
document.addEventListener('mouseup',function(){
    isdraw = false
})
eraser.addEventListener('click',function(e){
    color.value = '#ffffff'
})

lower.addEventListener('click',function(){
    weight = size.innerText;
    weight -= 5;
    size.innerText = weight;
})

bolder.addEventListener('click',function(){
    weight = Number(size.innerText);
    weight += 5;
    size.innerText = weight;
})

save.addEventListener('click',function(){
    save.setAttribute('download', 'MintyPaper.png');
    save.setAttribute('href', canvas.toDataURL("image/png").replace("image/png", "image/octet-stream"));
})

clear.addEventListener('click',function(){
    ctx.clearRect(0, 0, 1200, 600);
})
