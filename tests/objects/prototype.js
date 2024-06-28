// console.log('proto....')


// so prototype is also an object that define that how our object is defined.
// means that if we've defined object using object literals then it will be having default prototype object
// but if we've defined object via constructor then it will have prototype construtor. and we can manipulate this prototype according to owr need
//we can change default prptoype as well but it is not good choice to do because it will be changed for all the objects and that not good for development.

//we can access properties of the prototype and can set propeties to self defined prototype means the constructor prototype.

//now  lets create an object literal
let student = {
    name:'anjali',
    age:20,
    address:'neemuch'
}
console.log(student) //so we can see that this object have object prototype

//create an object using consructor
function StudentsList(myName,myAge,myAddress) {
    this.name=myName,
    this.age=myAge,
    this.address=myAddress
}
let student1 = new StudentsList("kiran",23,"nimach"); 
console.log(student1);      //now when we check in console we have prototype constructor for this object

//we can add new property or methods in this lets see the example
//assume i wanna add new property subject in this object so i can do it either i can add it manually or using protoype
// syntax:-   constructorName.protoype.propertyName=value/method
StudentsList.prototype.subject = null;
student1.subject = "Science";  
console.log(student1.subject); 

//another example, lets get value of first name with a function
StudentsList.prototype.getName = function(){
    return this.name;    
};
console.log(student1.getName()); //this will return name of the student

//lets change/set new name for student1
StudentsList.prototype.setName = function(newName){
     this.name=newName;    
};
console.log(student1.setName("anjali"));  //this has changed the name of the student1 kiran to anjali
console.log(student1);   