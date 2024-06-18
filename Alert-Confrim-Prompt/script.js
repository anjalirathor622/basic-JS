var a = prompt("what is your name?") //we can get information by prompt box 

let b = confirm("do you want to visit site?"); //confirm box return true or false value
//console.log('ok')

if(a){
    if(b){
        document.write('<h1>hello! welcome '+ a +' </h1>');
    }else{
        alert("ohk");  //alert box
    }
   
}


