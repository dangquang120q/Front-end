var products =  document.querySelector('.products');
fetch('http://fakestoreapi.com/products')
.then(res=>{
    return res.json()
})
.then(data=>{
    data.forEach(item=>{
        var product = document.createElement('div')
        product.classList.add('product');
        product.innerHTML = `
            <img src="${item.image}" alt="">
            <div class="method">
                <h4 class="name">${item.title}</h4>
                <p class="price">${item.price}</p>
            </div>
        `
        products.appendChild(product);
    })
    var h2 = document.getElementById("loading")
    h2.style.display = 'none';
})

var input = document.querySelector('input');
input.addEventListener('keyup',function(){
    let txt = input.value.trim().toLowerCase();
    var listproducts = document.querySelectorAll('.product');
    listproducts.forEach(item=>{
        if(!item.innerText.toLowerCase().includes(txt)){
            item.classList.add('hide');
        }
        else{
            item.classList.remove('hide');
        }
    })
})

