var element = document.querySelectorAll('.add')

function checkinscreen(e){
    var reat = e.getClientRects()[0]
    var heightScreen = window.innerHeight
    if(!(reat.bottom < 0 || reat.top > heightScreen)){
        e.classList.add('start')
    }
    else{
        e.classList.remove('start')
    }
}

function checkAnimation(){
    element.forEach(item=>{
        checkinscreen(item)
    })
}

window.onscroll = checkAnimation