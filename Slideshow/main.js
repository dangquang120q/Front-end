var prev = document.querySelector('.prev')
var next = document.querySelector('.next')
var show = document.querySelector('.imgpreview img')
var gallery = document.querySelectorAll('.image img')
var active = document.querySelectorAll('.gallery div')

prev.addEventListener('click',function(){
    for(var i = 2;i<=9;i++){
        if(show.getAttribute('src') == `img${i}.jpeg` && i != 1){
            show.setAttribute('src',`img${i - 1}.jpeg`);
            set(`img${i - 1}.jpeg`)
            return
        }
    }
    show.setAttribute('src',`img9.jpeg`);
    set(`img9.jpeg`)
})

next.addEventListener('click',function(){
    for(var i = 1;i<=8;i++){
        if(show.getAttribute('src') == `img${i}.jpeg`){
            show.setAttribute('src',`img${i + 1}.jpeg`);
            set(`img${i + 1}.jpeg`)
            return
        }
    }
    show.setAttribute('src',`img1.jpeg`);
    set("img1.jpeg")
})

var currentIndex = 0;

function set(img){
    active.forEach(function(item){
        item.classList.remove('active')
    })
    gallery.forEach(function(item){
        if(item.getAttribute('src') == img){
            item.parentElement.classList.add('active')
        }
    })
}

gallery.forEach(function(item){
    item.addEventListener('click',function(e){
        var src = this.getAttribute('src')
        show.setAttribute('src',src);
        set(src)
    })
})

