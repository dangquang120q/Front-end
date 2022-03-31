var up = document.querySelector('#upfile')
var imgbox = document.querySelector('.box') 
up.addEventListener('change',function(e){
    var img = document.createElement('img')
    img.src = URL.createObjectURL(this.files[0])
    imgbox.appendChild(img)
})
