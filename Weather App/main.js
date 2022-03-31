function gettime(){
    var date = new Date();
    var month = date.getMonth() + 1;
    var day = date.getDate();
    var year = date.getFullYear();
    var hour = date.getHours()
    var minute = date.getMinutes();
    var sec = date.getSeconds();
    var time = ' AM'
    if(hour > 12 ) time = ' PM'
    if(sec < 10) sec = '0' + sec;
    var data = month + '/' + day + '/' + year + ', ' + hour + ':' + minute + ':' + sec + time;
    document.getElementById("date").innerHTML = data;
}
gettime();

var search = document.querySelector('.input_search')
var city = document.querySelector('.name')
var country = document.querySelector('.country')
var temp = document.querySelector('.temp')
var method = document.querySelector('.method')
var visibility = document.querySelector('.visibility span')
var wind = document.querySelector('.wind span')
var sun = document.querySelector('.sun span')
async function weather(search){
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=c3c7edff736a03db0bb150e86820ba68
    `
    let data = await fetch(url).then(res => res.json())
    city.innerText = data.name
    country.innerText = data.sys.country
    temp.innerText = Math.floor((data.main.temp)/1);
    if(Math.floor((data.main.temp)/1) > 30){
        document.body.className = 'hot'
    }
    else if(Math.floor((data.main.temp)/1) > 18){
        document.body.className = 'medium'
    }
    else{
        document.body.className = 'cold'
    }
    method.innerText = data.weather[0].main;
    visibility.innerText = data.visibility +'(m)';
    wind.innerText = data.wind.speed + '(m/s)';
    sun.innerText = data.clouds.all + '(%)'
}
search.addEventListener('keyup', (e) => {
	if (e.keyCode === 13) {
		weather(e.target.value)
	}
})
weather('Da Lat');


