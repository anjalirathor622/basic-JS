console.log('welcome');
//append child 
let newelem = document.createElement('h1');
newelem.id = "newelemid";
newelem.innerHTML = "this is my new element, inserted by appendChild"
console.log(newelem);
//this element is aadded at the lastchild index of element 
document.getElementById('mybody').appendChild(newelem); 


//insert before
let myelem2 = document.createElement("h2");
myelem2.className = "mynewelement";
myelem2.innerText = "this is my second element inserted by insertBefore";
console.log(myelem2);
//this will insert the element before the input fleid and after the anchor tag
let target = document.getElementById('myform');
console.log(target.childNodes[6]); //this is targeting the elements child
target.insertBefore(myelem2, target.childNodes[6]);//inserted successfully


