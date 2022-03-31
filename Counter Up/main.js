var fb = document.querySelector('.fb-follow')
var ytb = document.querySelector('.ytb-follow')
var tt = document.querySelector('.tt-follow')
var y = 0;
var z = 0;
var g = 0;
var time = 2000;
var myInterval = setInterval(() => {
    fb.innerText = y;
    y+=15
    if(y == 3315) clearInterval(myInterval)
}, 1);

var myIntervala = setInterval(() => {
    ytb.innerText = z;
    z+=5;
    if(z == 1005) clearInterval(myIntervala)
}, 1);

var myIntervalb = setInterval(() => {
    tt.innerText = g;
    g+=45
    if(g == 9945) clearInterval(myIntervalb)
}, 1);