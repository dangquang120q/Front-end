const numbers = document.getElementsByClassName("number");
const result = document.getElementById("result");
for(let number of numbers){
    number.addEventListener('click',function(){
        result.innerHTML += this.value
    });
}
function ketqua(){
    let res = result.innerHTML;
    var x = 0;
    for(let i = 0;i<res.length;i++){
        if(res[i] == '!') x = 1;
        else if(res[i] == '√') x = 2;
        else if(res[i] == '^') x = 3;
    }
    if(x == 1) giaithua(res);
    if(x == 2) can(res);
    if(x == 3) mu(res);
    let output = res + "<br> <br> <br>= " + eval(res);
    result.innerHTML = output;
}
function xoatatca(){
    result.innerHTML = " ";
}
function xoatungso(){
    let res = result.innerHTML;
    result.innerHTML = res.substring(0,res.length - 1);
}
function mu(){
    let x,y;
    for(let i = 0;i<res.length;i++){
        if(res[i] != '^')
            x = x + res[i];
        else{
            for(let j = i+1;j<res.length;j++){
                y = y + res[i];
            }
        }
    }
    res = Math.pow(x,y);
    return res;
}
function giaithua(){
    
}
function can(res){

}