var range = document.querySelector('input')
var body = document.querySelector('body')
range.addEventListener('click',function(){
    var process = this.value;
    body.style.backgroundColor = `rgba(0,0,0,${process/100}`;
})