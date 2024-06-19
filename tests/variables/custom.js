var a2 = 25;  // declaring using var key word, its a globle variable can be redelcred and reinitialised

let a1 = 15;   //this isn't a globle variabl,it's a local scope variable but it can be reinitialised only

//there is a way that we can make a globle scope funtion inside the function using window object

/* globle variable outside a function is added to window object internally
    this can be used only for dom where window object exist
    ex :- 
        var a = 20;
        function A(){
            console.log(window.a);
        }

    When we define a variable in function it has local scope but if we define it using window object it can be globle 
        
        function A(){
            window.a = 20;
        }
         
        alert(window.value);

    */
     

    // basic arithmeic oprations
    a3=45;
    console.log(a1);
    console.log(a2);
    console.log(a3);
    console.log("addition %s", a1+a2+a3 );
    console.log('substraction %s',a3-a1 );
    console.log('multiplication %s',a3*a2 );
    console.log('devide %s',a3/a2 );
