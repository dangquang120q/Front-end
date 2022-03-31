var input = document.querySelector('input')
var btn = document.querySelector('form')
var ul = document.querySelector('.todos')
btn.addEventListener('submit',function(event){
    event.preventDefault();
    var work = input.value.trim();
    if(work){
        addli({
            text: work,
        })
        input.value = '';
        saveList()
    }
})
function addli(todo){
    var li = document.createElement('li');
    li.innerHTML = `
        <span>${todo.text}</span>
    `
    var i = document.createElement('i');
    if(todo.status === 'completed'){
        li.setAttribute('class','completed');
    }
    i.setAttribute('class','fas fa-trash');
    li.addEventListener('click',function(){
        this.classList.toggle('completed')
        saveList()
    })
    i.addEventListener('click',function(){
        this.parentElement.remove();
        saveList()
    })
    ul.appendChild(li);
    li.append(i);
    saveList()
}
function saveList(){
    var list = document.querySelectorAll('li')
    var TodoList = []
    list.forEach(function(item){
        var text = item.querySelector('span').innerText;
        var status = item.getAttribute('class');
        TodoList.push({
            text,
            status
        })
    })
    localStorage.setItem('todoList',JSON.stringify(TodoList))
}
function init(){
    var data = JSON.parse(localStorage.getItem('todoList'));
    data.forEach(function(item){
        addli(item);
    })
}
init();
