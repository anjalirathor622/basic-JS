// console.log('hello');

//creating an object using object literals 
let car = {
    name:'nissan',
    speed:180,
    color: 'white',
    details: function(){
        document.write(`<h4>car name ${this.name} and speed ${this.speed} and its color ${this.color}</h4>`);
    }
}
car.details();
// console.log(car.name);
console.log(car);



//creating a constructor function
function FavoriteCar(carName,carColor,carSpeed){
    //constructor properties
    this.name = carName,
    this.speed = carSpeed,
    this.color = carColor,
    //function areaa
    this.run = function(){
        document.write(`<h4>${this.name} is running on ${this.speed}km/h</h4>`);
    }
    this.highspeed = function(){
        document.write(`<h4>${this.name} is slower by ${400- this.speed}km/h than mercedes</h4>`);
    }
}
let buggati = new FavoriteCar("buggati","black",350);
let thar = new FavoriteCar("Thar","black",300);
let mercedes = new FavoriteCar("Mercedes","red",400);

buggati.run();   //calling constructors functions
buggati.highspeed();

thar.run();
thar.highspeed();

// console.log(buggati);
console.log(thar);
// console.log(mercedes);