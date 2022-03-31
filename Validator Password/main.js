var input = document.querySelector('#password')
var hidden = document.querySelector('.input_div i')
var lowercase = document.querySelector('.lowercase')
var uppercase = document.querySelector('.uppercase')
var number = document.querySelector('.number')
var special = document.querySelector('.special')
var character = document.querySelector('.character')

input.addEventListener('input',function(){
    var password = input.value
    if(isUpper(password)){
        uppercase.classList.add('valid')
        uppercase.querySelector('i').className = 'fa-solid fa-check'
    }
    else{
        uppercase.classList.remove('valid')
        uppercase.querySelector('i').className = 'fa-solid fa-x'
    }
    if(isLower(password)){
        lowercase.classList.add('valid')
        lowercase.querySelector('i').className = 'fa-solid fa-check'
    }
    else{
        lowercase.classList.remove('valid')
        lowercase.querySelector('i').className = 'fa-solid fa-x'
    }
    if(isNumber(password)){
        number.classList.add('valid')
        number.querySelector('i').className = 'fa-solid fa-check'
    }
    else{
        number.classList.remove('valid')
        number.querySelector('i').className = 'fa-solid fa-x'
    }
    if(isSpecial(password)){
        special.classList.add('valid')
        special.querySelector('i').className = 'fa-solid fa-check'
    }
    else{
        special.classList.remove('valid')
        special.querySelector('i').className = 'fa-solid fa-x'
    }
    if(isCharacter(password)){
        character.classList.add('valid')
        character.querySelector('i').className = 'fa-solid fa-check'
    }
    else{
        character.classList.remove('valid')
        character.querySelector('i').className = 'fa-solid fa-x'
    }
})

function isUpper(str) {
    if(str == '') return false;
    return /[A-Z]/.test(str);
}
function isLower(str) {
    if(str == '') return false;
    return /[a-z]/.test(str);
}
function isNumber(str) {
    if(str == '') return false;
    return /\d+/.test(str);
}
function isSpecial(str){
    if(str == '') return false;
    return /[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/.test(str);
}
function isCharacter(str) {
    if(str == '') return false;
    return str.length > 7;
}

hidden.addEventListener('click',function(){
    if(input.getAttribute('type') == 'password'){
        input.setAttribute('type','text')
        hidden.setAttribute('class','fa-solid fa-eye-slash')
    }
    else{
        input.setAttribute('type','password')
        hidden.setAttribute('class','fa-solid fa-eye')
    }
})