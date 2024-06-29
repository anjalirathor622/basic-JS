//we can create array with th help of new key word aswell
var ary1 = new Array(); //this will create an empty arrey without any element 
//we can put values in this array refering to index number but if we skip any index then it can make hole in an array ref
ary1[0] = 10;
ary1[1] = 20;
ary1[2] = 30;
ary1[3] = 40; //we added four values to this aray

console.log(ary1);
console.log(ary1[2]);

//we can creat empty array using [] this sign as well 
var ary2 = [];

ary2[0] = "anjali";
ary2[1] = "kiran";
ary2[2] = "sarita";
ary2[3] = "kumkum";

console.log(ary2);

//Array.isArray()
//to check if array type we use isArray method because typeof always return object value for an array type
console.log(typeof(ary2));

console.log(Array.isArray(ary2)); //if it returns ture then it is an array if it returns false then its not an array

//toString() method
// this convert array into a string 
var a = ["anjali", "kiran","monica"];
console.log(a)

a = a.toString();
console.log(a)

//numbers array to string
var b = [10,20,30];
console.log(b);

b = b.toString(); // now converted into string we can perform string methods on them but not number or array methods
console.log(b)