var buttons = document.querySelectorAll('button')
buttons.forEach(button=>{
    button.addEventListener('click',function(){
        var audio = button.querySelector('audio')
        playSound(audio);
    })
    document.addEventListener('keydown',function(e){
        if(e.code == `Key${button.value}`){
            playSound(button.querySelector('audio'))
        }
    })
})

const playSound = (audio) => {
	const clone = audio.cloneNode()
	clone.play()
	setTimeout(() => (clone.volume = 0.8), 400)
	setTimeout(() => (clone.volume = 0.6), 800)
	setTimeout(() => (clone.volume = 0.4), 1200)
	setTimeout(() => (clone.volume = 0.2), 1600)
	setTimeout(() => (clone.volume = 0), 2000)
}
