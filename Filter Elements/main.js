var items = document.querySelectorAll('.image')
var types = document.querySelectorAll('.type')

types.forEach(item=>{
    item.addEventListener('click',function(){
        if(item.id == 'all'){
            items.forEach(food=>{
                food.classList.remove('hide')
            })
        }
        else{
            items.forEach(food=>{
                if(food.getAttribute('type-food') == item.id){
                    food.classList.remove('hide')
                }
                else{
                    food.classList.add('hide')
                }
            })
        }
        types.forEach(list=>{
            list.classList.remove('active')
        })
        item.classList.add('active');
    })
})
