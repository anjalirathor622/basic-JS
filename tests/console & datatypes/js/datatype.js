// Primitive data types:- string, number, boolean, null, undefined.

// String
let MyName = "Anjali";
console.log("My string is " + MyName);
console.log("Data type is " + (typeof MyName));

// Numbers
let marks = 34.4;
console.log("Data type is " + (typeof marks));

// Boolean
let isDriver = true;
console.log("Data type is " + (typeof isDriver));

// Null
let nullVar = null;
console.log("Data type is " + (typeof nullVar));

// Undefined
let undef = undefined;
console.log("Data type is " + (typeof undef));

// Reference Data Types:- arrays, objects, function, date

// Arrays
let myarr = [1, 2, 3, 4, false, "string"];
console.log("Data type is " + (typeof myarr));

// Object Literals
let stMarks = {
    harry: 89,
    Shubham: 36,
    Rohan: 34
}
console.log( typeof stMarks);

//function
function findName() {
    
}
console.log( typeof findName);

//date
let date = new Date();
console.log( typeof date);

/*
    What is the difference between primitive and reference datatype?

    JavaScript stores the primitive value on the stack because the size of a primitive value is fixed.
    On the other hand, JavaScript stores the reference value on the heap because the size of the reference value is dynamic.
    One of the most significant differences between primitive data and reference data is that, 
    If the value is primitive, then we manipulate the actual valuestored in that variable.
    Whereas, If the value is of reference data type, we can manipulate that object's reference,
    rather than the actual object. 
    It means a variable that stores an object is accessed by reference.
*/

