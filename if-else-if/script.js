
// var variable
//promt box 
var per = prompt("enter your percentage");  

let elem = document.getElementById("percent");  

 // if else if 
if(per >= 80 && per <= 100){    //&& logical or opretor

    elem.innerHTML = "congrats!!! you are in merit.";
    elem.style.color = 'green'
}else if(per >= 60 && per < 80){

    elem.innerHTML = "congrats!!! you are in 1st division.";
    elem.style.color = 'blue'
}else if(per >= 45 && per < 60){

    elem.innerHTML = "congrats!!! you are in 2nd division.";
    elem.style.color = 'orange'
}else if(per >= 33 && per < 45){

    elem.innerHTML = "congrats!!! you are in 3rd division.";
    elem.style.color = 'yellow'
}else if(per < 33){

    elem.innerHTML = "sorry!!! you are fail.";
    elem.style.color = 'red'
}else{
    alert('please enter valid percent');
}