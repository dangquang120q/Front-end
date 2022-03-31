var process = document.querySelector('.process')
var time = document.querySelector('.time').offsetWidth
var width = 430 - time;
var video = document.querySelector('.player__video')
process.style.width = `${width}px`
var toggleplay = document.querySelector('.play')
var skip = document.querySelectorAll('.player__button')
var changevolume = document.querySelector('#volume')

toggleplay.addEventListener('click',function(e){
    e.preventDefault()
    if(video.paused){
        video.play()
        var i = document.querySelector('.play i')
        i.className = 'bx bx-pause'
    }
    else{
        video.pause()
        var i = document.querySelector('.play i')
        i.className = 'bx bx-play'
    }
})
video.addEventListener('click',function(){
    if(video.paused){
        video.play()
        var i = document.querySelector('.play i')
        i.className = 'bx bx-pause'
    }
    else{
        video.pause()
        var i = document.querySelector('.play i')
        i.className = 'bx bx-play'
    }
})

skip.forEach(item=>{
    item.addEventListener('click',function(){
        var data = Number(item.getAttribute('data-skip'))
        var skiptime = video.currentTime + data;
        if(skiptime < 0) skiptime = 0;
        video.currentTime = skiptime
    })
})
volume.addEventListener('mouseup',function(){
    video.volume = changevolume.value/100
})

video.addEventListener('timeupdate',function(){
    const percent = (video.currentTime / video.duration)*100;
    process.style.background = `-webkit-linear-gradient(left, cornflowerblue ${percent}%, white 0%)`
    var currentsecond = Math.round(video.currentTime % 60);
    var currentminute = Math.round(video.currentTime / 60);
    var second = Math.round(video.duration % 60)
    var minute = Math.round(video.duration / 60);
    currentsecond = fixtime(currentsecond)
    document.querySelector('.time').innerHTML = `${currentminute}:${currentsecond}/ ${minute}:${second}`
})
function fixtime(time){
    if(time % 10 != 0 && time < 10 || time == 0){
        time = '0' + time;
    }
    return time
}

process.addEventListener('click',function(e){
    var percent = e.offsetX/width;
    if(percent < 0) percent = 0;
    video.currentTime = video.duration * percent;
})