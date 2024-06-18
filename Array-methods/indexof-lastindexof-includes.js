//indexOf() method is used to check the index or an element
// case sensitive
// return -1 if value doesnt exist in array
// has two arguments first value and second index from where to start searching, negetive index will start search from last

var A = ["apple","banana","orange","apple","pear","guava","apple","mango"];
console.log(A);

let a = A.indexOf("apple"); //start search from 0, default
console.log(a);

let b = A.indexOf("apple",2); //start search from 2
console.log(b);

let c = A.indexOf("apple",-1); //start search from last, it includes the index we gave
console.log(c);