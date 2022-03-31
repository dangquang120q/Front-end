var images = document.querySelectorAll('.image')
var result = document.querySelector('.result')

const size = 3;

images.forEach(item=>{
    item.addEventListener('mouseover',function(e){
        result.classList.remove('hide')
    })
    const img = item.querySelector('img')
    item.addEventListener('mousemove',function(event){
        var x = event.layerX;
        var y = event.layerY;
        result.style.cssText = `
        background-image: url(${img.src});
        background-size: ${img.width * size}px ${img.height * size}px;
        background-position : ${(event.offsetX / this.offsetWidth) * 100}% ${(event.offsetY / this.offsetHeight) * 100}%;
        left: ${x}px;
        top: ${y}px;
        `
    })
    item.addEventListener('mouseleave',function(){
        result.classList.add('hide')
    })
})