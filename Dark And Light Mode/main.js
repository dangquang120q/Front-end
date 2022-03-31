var toggle = document.querySelector('#check')
var body = document.querySelector('body')
toggle.addEventListener('change',function(e){
    var status = toggle.checked;
    if(status){
        body.classList.add('dark');
    }
    else{
        body.classList.remove('dark');
    }
})