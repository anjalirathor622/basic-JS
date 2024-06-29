console.log("string methods");

//Javascript methods
// charAt(c): It returns the character at the “c” position within the string.
var myString = 'JavaScript!!!';
console.log(myString.charAt(7));   //output: i

//concat(p1, p2): Combines one or more strings and returns the concatenated string. Remember that the original string is not modified.
var str="JavaScript"
var str1=str.concat(" is"," awesome")
console.log(str1);   //Output: JavaScript is awesome

/*indexOf(substr, [start_from]): This method Searches and returns 
    the index number of the searched character within the string.
    If not found, it will return -1.“Start_from” is an optional argument 
    specifying the position within string to begin the search. Default is 0.*/
//indexOf(char/substring)
var str2="Hi, my name is Sam!";
var str3 = str2.indexOf("locate");  //Output: -1
var str4 = str2.indexOf("my");  //Output: 4
console.log(str3);
console.log(str4);

/*lastIndexOf(substr, [start_from]): This method searches and  returns the index number
  of the searched character within the string. This method will return the index of 
  the last occurrence of a specified text in a string.If the character or string is not found,
  -1 is returned. "Start_from" is an optional argument specifying the position within string to 
  begin the search. Default is string.length-1*/
var myString1 = 'javascript Node.js';
console.log(myString1.lastIndexOf('N'));   //output: 11

/*slice(start, [end]): This method returns a substring of the string based
  on the "start" and "end" index , it will not include the "end" index itself. 
  "End" argument is optional, and if none is specified, the slice includes all 
  characters from "start" to end of string.*/
var text="programming"
var mystr= text.slice(0,4)
console.log(mystr)    //Output:- "prog"

/*split(delimiter, limit): This method Splits a string into substring to the specified
  delimiter, and returns an array containing each element. The argument “limit” is an 
  integer that lets you specify the maximum number of elements to return.*/
var txt = "a, b , c ,d ,e";   // String
t = txt.split(","); 
console.log(t);         // Split on commas
txt = txt.split(" ",5);          //will return 5 elements only
console.log(txt);        // Split on spaces

/*substring(from, [to]): This method will returns the characters in a string between 
  “from” and “to” indexes. It will not include “to” inself. “To” argument is optional, 
   and if omitted, up to the end of the string is assumed.*/
//substring(from, [to])
var myString3 = 'javascript Programming';
myString3 = myString3.substring(0,10);
console.log(myString3)
//output: javascript

/*toLowerCase(): This method will Returns the string with all of its characters
     converted to lowercase.*/
//toLowerCase()
var myString4 = 'JAVASCRIPT';
myString4 = myString4.toLowerCase();
console.log(myString4)
//output: javascript

/*toUpperCase(): This method will Returns the string with all of its characters 
    converted to uppercase.*/
//toUpperCase()
var myString5 = 'javascript';
myString5 = myString5.toUpperCase();
console.log(myString5)
//output: JAVASCRIPT

/*search(“str”): The method searches a string for a specified value and
     returns the position of the match:*/
var str5 = "Welcome to programming World!!";
var pos = str5.search("programming");
console.log(pos)  //11 index


/*replace(“str”,"newstr"): The method replace a string/word for a new value/string and
     returns the string with new string/word:*/
     var str6 = "Welcome to programming World!!";
     var newstr = str6.replace("programming","my programming");
     console.log(newstr)  //11 index

/*substr() Method: The method substr() is similar to slice(). 
    The only difference is that the second parameter specifies the length of the extracted part.
var str = "Apple, Banana, Kiwi";
var res = str.substr(7, 6);  //isdprecated
// Output: Banana*/

