//classical type function
//funtion defination
function userInfo(){              //funtion name always  defined in pascal case
   return 'hello!';   //every function return something
}
//function calling
let func = userInfo();  

//we can call this funtion in our html elements
let doc = document.querySelector("h1.a")

//console.log(document.querySelector("h1.a").innerHTML = userInfo());
doc.style.color = "black";
doc.innerHTML = func;


// function defination
function sum(a = 10,b = 20){     // a,b are parameters in function sum
    console.log(a+b);
}

//function calling
sum();    //it will add defualt value
sum(20,30);  // it will over write the value


//function defination
function myName(fname,lname){
    let x = fname + ' ' + lname;

    return x;
}

//function calling
var func2 = myName("anjali",'rathor');

doc.innerHTML = func +' '+func2;    //following dry(dont repeat yourself) rule


// function defination
function totalMarks(maths,physics,chemistry) {

    let marks = maths + physics + chemistry;

    return marks;  //every function return something
}
let ttl = totalMarks(90,80,70);  //function calling

function percentage(percnt) {
    var per = percnt/300*100;
    return per;
}

//console.log(percentage(ttl));
var mypercent = percentage(ttl);   //function calling 

document.write("<h2> congrats!! <br>"+func2 +", your percentage is <br>"+ mypercent +"</h2>")




