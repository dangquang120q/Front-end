var boxes = document.querySelectorAll('.box')
var target = document.querySelector('.target')

target.addEventListener('dragstart',function(e){
    this.classList.add('dragging')
})

target.addEventListener('dragover',function(e){
    this.classList.remove('dragging')
})

boxes.forEach(item=>{
    item.addEventListener('dragover',function(e){
        e.preventDefault()
        this.appendChild(target)
    })
    item.addEventListener('drop',function(e){
        this.appendChild(target)
    })
})
