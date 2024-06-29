// In JavaScript, there are two types of type conversion.

// Explicit Conversion:-
// The type conversion that we manually do is known as explicit type conversion.
// In JavaScript, explicit type conversions are done using the built-in methods like String (), Number(), etc.

// (1)Number Conversion:-To convert Boolean values or numeric strings to numbers, we use the Number()

let res;
// string to number
res = Number('100');
console.log(res); // 100
// boolean to number
res = Number(false); 
console.log(res); // 0 if true then 1
res = Number(' ') 
console.log(res); // 0 empty string return 0
res = Number('hello');
console.log(res); // NaN
res = Number(undefined);
console.log(res); // NaN

// (2)Boolean Conversion :-Boolean type conversion happens in logical operations. 
// It also follows the rules, but they are mostly obvious:

// NaN, 0, undefined, null, "" are converting to false
// everything else, including objects, to true
res=Boolean(1); // true
res= Boolean(0); // false
res= Boolean("hello"); // true
res= Boolean(""); // false

/*
(3)String Conversion:-The method String() is used to convert numbers to strings. 
It can be used on any type of numbers, literals, variables, or expressions. 
The method toString() does the same.*/
let str;
let a=90
str= String(a) // returns a string from a number variable a
a.toString()   //we can change number to string like this as well
console.log(a)
console.log(str);
console.log(typeof a);
console.log(typeof str);

let n1= String(378009) // returns a string from a number literal 378009
let n2= Number(378009) // returns a string from a number literal 378009
// (378009).toString()
console.log(n1,"and",n2)
console.log(typeof n1)
console.log(typeof n2)

// parseInt and parseFloat:-The in-built method parseInt() and parseFloat() 
// return numbers from strings that start with numeric data.
console.log( parseInt('$100 dollars') ); // NaN
console.log( parseInt('+10.25990 kg') ); // 10
console.log( parseFloat(' +10.25 kg') ); // 10.25
console.log( parseFloat('ABC') ); //NaN



// Implicit Conversion:-
// Sometimes JavaScript automatically converts one data type to another.

// 1)Conversion To String:- When we add a number into a string, JavaScript converts the number to a string before concatenation
let str2;
str2 = '3' + 4; 
console.log(str2) // "34"
str2 = '9' + true; 
console.log(str2); // "9true"
str2= '0' + null; 
console.log(str2); // "0null"

//2)Conversion To Number:- Numeric string used with operators like +, - , / , * returns number type
let num;
num = '4' - '4'; 
console.log(num); // 0
num = '4' * 5;
console.log(num); // 20
 
//3) Boolean Conversion to Number:- If we use Boolean, true is considered as 1 and false is considered as 0.
let abc;
abc = '5' - true;
console.log(abc); // 4
abc = 10 + false;
console.log(abc); // 10

//)In JavaScript, Null is considered as 0 when used with numbers. Arithmetic operation of undefined with number, boolean or null returns NaN
var N1 = 4 + null; // 4
var N2 = 4 - undefined;// NaN


//exersice
// Type conversion 
console.log('Welcome to tut5');
let myVar;
myVar = String(34);
// console.log(myVar, (typeof myVar));
let booleanVar = String(true);
// console.log(booleanVar, (typeof booleanVar));

let date = String(new Date());
// console.log(date, (typeof date));

let arr =  String([1,2,3,4,5]);
// console.log(arr.length, (typeof arr));

let i = 75;
// console.log(i.toString())

let stri = Number("3434");
stri = Number("343d4");
stri = Number(false);
stri = Number([1,2,3,4,5,6,7,8,9]);
// console.log(stri, (typeof stri));

let number = parseFloat('34.098');
//tofixed will fix vaue till given floating number 
console.log(number.toFixed(2), (typeof number));

// Type coercion

let mystr = Number("698");
let mynum = 34;

console.log(mystr + mynum);
