// "Concat() method" is used to add two or array togather it can create new array joining them and can modify axisting array

let A = ["annie", "harry","jessi"];
console.log(A);

let B = ["lavi","jenna","shreya","elsa"];
 console.log(B);

//concat() method
A = A.concat("ron","sherry"); //adding new elements to array
console.log(A);

//joining two arrys together, we can concatinat as much arrays as we want.
let C = A.concat(B);
console.log(C);

//adding two arrays and new values too
let D = A.concat(B, "tom");
console.log(D);


//"Join() Method" is used to join all array values together, it returns a string.
// we can give any symbole or anything to join them, default is a comma(,)
var numm = [10,20,30,40,50];
console.log(numm); //right now all are single elements isnt related to each other

//numm = numm.join(); //it gives the same result but convered them to single entity as string
//console.log(numm);

//numm = numm.join('-'); //it'll add - between all elements
//console.log(numm);

numm = numm.join(' and '); //it'll add and between all elements
console.log(numm);