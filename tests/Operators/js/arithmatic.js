//arithmatic operator

let a = 10;

let b = a+10;
console.log(b);    // + additional operator

let c = a-5;
console.log(c);   // - substraction operator

let d = a*2;
console.log(d);   // * multiplication operator

let e = a/10;
console.log(e);       // / division operator

let f = a%4;
console.log(f);   //  % moduler operator


var g = a**2           
console.log('squire of 10 is ' + g);// ** exponentiation operater  (is shift next value as power of first variable)


// increment/ decrement operator
//basic inc/dec operator it increse the value of the varible by one
a++;
console.log(a);
++a;
console.log(a);
a--; 
console.log(a);
--a;
console.log("basic inc/dec  " + a);

//prefix inc/dec operator
// ++/-- comes before variable calls prefix 
let b1 = ++a; 
console.log(b1);   // increase the value then pass it to variable

console.log(a);    //now 'a' variable has value 11 after prefix

let b2 = --a; 
console.log(b2);   


//postfix inc/dec operator
// ++/-- comes after variable calls prostfix
let c1 = a++;   // pass the value to variable and then increase the value
console.log(c1);

console.log(a);   //now 'a' variable has value 11 after prostfix

let c2 = a--;
console.log(c2);    //it will return he old value then decrease it

console.log(a);    //now 'a' variable has value 10 after prostfix
