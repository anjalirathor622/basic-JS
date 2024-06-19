//unshift() method is used to add a new value to first index of an array
//we cant store this in another variable and can't create new array it will modifiy this array only
var num = [10,20,30,40,50];
console.log(num);

//UNSHIFT() METHOD
num.unshift(100); 

console.log(num);

//this will delete the first value in the array, only last value
//SHIFT() METHOD
num.shift();

console.log(num);
