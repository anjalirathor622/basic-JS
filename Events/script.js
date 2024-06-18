// js events calls the functions

// this function is for click event
function hello(){

    let perm = confirm('helllo ,do you wanna visite ?')

    if(perm == true){
        return document.write("welcome dosto....");
    }else{
        alert('ok thank you.')
    }
}

// this function is for double click events 
function hello2(fisrtname,lastname) {

    document.getElementById("demo").innerHTML = 'hello ' + fisrtname + ' ' + lastname;
}
//hello2("anjali","rathor");

//this one is for right click event
function hello3(){
    alert("hello,how are you?");
}

document.querySelector('p.ok').innerHTML= 'please right click here';


// this function is for mouse hover event
function hello4(){
    alert(' you just hovered your curser')
}

// this function is for mouse out event
function hello5(){
    alert("hey there,you just moved your curser")
   //document.write('<h1> hey there</h1>')
}

// this function is for mouse down event
function hello6(){
    alert('helllooo,welcome.')
}

// this function is for mouse up event
function hello7(){
    alert('ohhh you again!!!')
}


//this one is for keypress event
function hello8(){
    confirm('Are you sure you want to enter website.')
}