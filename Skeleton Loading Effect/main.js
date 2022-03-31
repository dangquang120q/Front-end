var cardimg = document.querySelector('.card_img');
var h2 = document.querySelector('h2')
var p = document.querySelector('p')
var button = document.querySelector('button')
var loading = document.querySelectorAll('.loading')

setTimeout(function(e){
    cardimg.innerHTML = '<img src="https://images.unsplash.com/photo-1637420425895-97a239041d53?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1148&q=80" alt="">'
    h2.innerHTML = "Nodemy";
    p.innerHTML = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut soluta qui repudiandae, maxime optio voluptatem eius eveniet officiis"
    button.innerHTML = 'Read More'
    loading.forEach(item =>{
        item.classList.remove('loading');
    })
},4000)