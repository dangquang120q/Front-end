var username = document.querySelector('#username');
var mail = document.querySelector('#email')
var password = document.querySelector('#password')
var password2 = document.querySelector('#confirm');
var login = document.querySelector('form');
function checkfalse(){
    if(password.value != password2.value){
        var err = document.querySelector('span');
        err.innerText = 'loi';
    }
    else{
        var err = document.querySelector('span');
        err.innerText = '';
    }
}
login.addEventListener('submit',function(e){
    e.preventDefault();
    checkfalse();
})
