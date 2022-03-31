var items = document.querySelectorAll('.icon')
items.forEach(item=>{
    item.addEventListener('mouseover',function(e){
        var span = item.querySelector('span')
        if(item.className.includes('facebook')){
            item.style.backgroundColor = '#3b5999';
            item.style.color = 'white';
            span.innerHTML = "Facebook"
            span.style.opacity = '1';
            span.style.transform = 'translateY(-150%)'
            span.style.backgroundColor = '#3b5999';
            span.style.color = 'white';
        }
        else if(item.className.includes('github')){
            item.style.backgroundColor = '#333';
            item.style.color = 'white';
            span.innerHTML = "Github"
            span.style.opacity = '1';
            span.style.transform = 'translateY(-150%)'
            span.style.backgroundColor = '#333';
            span.style.color = 'white';
        }
        else if(item.className.includes('twitter')){
            item.style.backgroundColor = '#46c1f6';
            item.style.color = 'white';
            span.innerHTML = "Twitter"
            span.style.opacity = '1';
            span.style.transform = 'translateY(-150%)'
            span.style.backgroundColor = '#46c1f6';
            span.style.color = 'white';
        }
        else if(item.className.includes('instagram')){
            item.style.backgroundColor = '#e1306c';
            item.style.color = 'white';
            span.innerHTML = "Instagram"
            span.style.opacity = '1';
            span.style.transform = 'translateY(-150%)'
            span.style.backgroundColor = '#e1306c';
            span.style.color = 'white';
        }
        else if(item.className.includes('youtube')){
            item.style.backgroundColor = '#de463b';
            item.style.color = 'white';
            span.innerHTML = "Youtube"
            span.style.opacity = '1';
            span.style.transform = 'translateY(-150%)'
            span.style.backgroundColor = '#de463b';
            span.style.color = 'white';
        }
    })
    item.addEventListener('mouseleave',function(){
        var span = item.querySelector('span')
        if(item.className.includes('facebook')){
            item.style.backgroundColor = 'white';
            item.style.color = 'black';
            span.style.opacity = '0';
            span.style.transform = 'translateY(0%)'
        }
        else if(item.className.includes('github')){
            item.style.backgroundColor = 'white';
            item.style.color = 'black';
            span.style.opacity = '0';
            span.style.transform = 'translateY(0%)'
        }
        else if(item.className.includes('twitter')){
            item.style.backgroundColor = 'white';
            item.style.color = 'black';
            span.style.opacity = '0';
            span.style.transform = 'translateY(0%)'
        }
        else if(item.className.includes('instagram')){
            item.style.backgroundColor = 'white';
            item.style.color = 'black';
            span.style.opacity = '0';
            span.style.transform = 'translateY(0%)'
        }
        else if(item.className.includes('youtube')){
            item.style.backgroundColor = 'white';
            item.style.color = 'black';
            span.style.opacity = '0';
            span.style.transform = 'translateY(0%)'
        }
    })
})