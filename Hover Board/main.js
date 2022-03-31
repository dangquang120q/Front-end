var container = document.querySelector('.container')

for(var a = 1;a<= 200;a++){
    var square = document.createElement('div')
    square.classList.add('square');
    square.addEventListener('mouseover',function(){
        const randomColor = Math.floor(Math.random()*16777215).toString(16);
        this.style.backgroundColor = '#' + randomColor;
        this.style.boxShadow = `0 0 10px ${randomColor}, 0 0 100px ${randomColor}`
    })
    square.addEventListener('mouseout', function(){
        this.style.backgroundColor = '#1d1d1d'
        this.style.boxShadow = '0 0 2px #000'
    })
    container.appendChild(square);
}