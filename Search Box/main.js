var open = document.querySelector('.search_btn');
var fullbox = document.querySelector('.fullbox');

open.addEventListener('click',function(){
	this.parentElement.classList.toggle('open')
	this.previousElementSibling.focus()
})