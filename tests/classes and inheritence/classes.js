console.log("hello")

console.log("this is Tutorial31.js");

//creating a class
class Employee {
    //class has three areas 
    //first property define area

    //second constructor definition area
    constructor(givenName, givenExperience, givenDivision) {
        this.name = givenName;
        this.experience = givenExperience;
        this.division = givenDivision;
    }
    //third function definition area
    slogan(){
        return `I am ${this.name} and this company is the best`;
    }

    joiningYear(){
        return 2020 - this.experience;
    }
    //static are those methods which can be run by anyone,can't change and no need to create an object for that
    static add(a, b){
        return a + b;
    }
}

//creating class programmer which is inherited by class employee
class Programmer extends Employee{
    constructor(givenName, givenExperience, givenDivision, language, github){
        super(givenName, givenExperience, givenDivision);  //this super method is mandetory to call while inheriting class
        this.language = language;
        this.github = github;
    }

    favoriteLanguage(){
        if (this.language == 'python'){
            return 'Python';
        }
        else{
            return 'JavaScript';
        }
    }

    static multiply(a, b){
        return a * b;
    }
}

// harry = new Employee("Harry", 56, "Division");
// console.log(harry.joiningYear());
// console.log(Employee.add(34, 5))
rohan = new Programmer("Rohan", 3, "Lays", "Go", "Rohan420")
console.log(rohan)
console.log(rohan.favoriteLanguage())
console.log(Programmer.multiply(5, 7));


