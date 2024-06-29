//"Slice() Method" is used for take specific values from an array 

/*we give index number as parameters and get values between those index number
   start index will be included in the result but end index will be excluded.
   default start index will be 0 and default end will be last element */

   var fruits = ["banana","orange","apple","pear","guava","mango"];
   console.log(fruits);

   //SLICE() METHOD
   var frts = fruits.slice(2,5); //end index 5 will excluded
   console.log(frts);

   //negetive index will give result from backwards
   var frts1 = fruits.slice(-3,-1); //end index 5 will excluded
   console.log(frts1);


//SPLICE() METHOD
/* splice() is a method which can madify array elemnts, can delete and add new elements 
    at the same time from specific index. it has three arguments 
    first- index number where we want to add or remove the elements
    second(optional,default 0)- howmanydlt where we shows the number of elements we wanna delete, start from given index
    third(optional)- in third arg we can give any value we want to add at the spceified index
 */
//negetive numbers will start from last
var students = ["anjali","monica","sarita","kiran"];
console.log(students);

//splice() doesnt gives new array it only modify axisting one
students.splice(1,1,"kumkum","rashika"); //will delete monica and will add kumkum at index 1 and rashika at 2
console.log(students);

students.splice(2,1,"shreya"); //will delete rashika and will add shreya
console.log(students);

students.splice(3,0,"monica","rashika"); //will delete rashika and monica
console.log(students);