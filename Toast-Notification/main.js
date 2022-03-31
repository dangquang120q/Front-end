var success = document.querySelector('.success');
var warning = document.querySelector('.warning');
var error = document.querySelector('.error');

success.addEventListener('click',function(e){
    createToast('success')
})

warning.addEventListener('click',function(e){
    createToast('warning')
})

error.addEventListener('click',function(e){
    createToast('error')
})

const toasts = {
	success: {
		icon: '<i class="fas fa-check-circle"></i>',
		msg: 'This is a success message !',
	},
	error: {
		icon: '<i class="fas fa-exclamation-triangle"></i>',
		msg: 'This is a error message !',
	},
	warning: {
		icon: '<i class="fas fa-exclamation-circle"></i>',
		msg: 'This is a warning message !',
	},
}

function createToast(status){
    var div = document.createElement('div');
    var st = status.toString();
    div.className = `${st}noti`
    div.innerHTML = `
    ${toasts[status].icon}
    <span class="msg">${toasts[status].msg}</span>
    <span class="countdown"></span>
    `
    document.querySelector('#toasts').appendChild(div)

    setTimeout(function(){
        div.style.animation = 'hide_slide 1s ease forwards'
    },4000)
    setTimeout(function(){
        div.remove()
    },6000)
}
