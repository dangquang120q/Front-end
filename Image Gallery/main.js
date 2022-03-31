var opening = document.querySelectorAll('.image img')
var closeX = document.querySelector('.header i');
var show = document.querySelector('.show');
var prev = document.querySelector('.prev i');
var next = document.querySelector('.next i');
var showimg = document.querySelector('.inner img')

var currentindex = 0;
opening.forEach((img,index)=>{
    img.addEventListener('click',function(){
        currentindex = index;
        if(currentindex == 0){
            prev.classList.add('hide');
        }
        else{
            prev.classList.remove('hide');
        }
        if(currentindex == opening.length - 1){
            next.classList.add('hide');
        }
        else{
            next.classList.remove('hide');
        }
        showimg.src = opening[currentindex].src;
        show.classList.add('active');
    });
});
closeX.addEventListener('click',function(){
    show.classList.remove('active')
})

prev.addEventListener('click',function(){
    if(currentindex == 0){
        prev.classList.add('hide');
    }
    else{
        prev.classList.remove('hide');
    }
    currentindex--;
    showimg.src = opening[currentindex].src;
    show.classList.add('active');
})

next.addEventListener('click',function(){
    if(currentindex == opening.length - 2){
        next.classList.add('hide');
    }
    else{
        next.classList.remove('hide');
    }
    currentindex++;
    showimg.src = opening[currentindex].src;
    if(currentindex <opening.length - 1) {
        show.classList.add('active');
    }
})

document.addEventListener('keydown',function(e){
    if(e.keyCode == 27){
        show.classList.remove('active');
    }
})