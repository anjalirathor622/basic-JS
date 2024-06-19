
let numbers = [7,5,9,3,6,5,9,8,1,5,6,3,5,6,7,8,7,6,5]

let count ={};


numbers.forEach(duplicate);

function duplicate(element) {
    count[element] = (count[element] || 0) + 1 ;
}

document.getElementById("repeatcount").innerHTML = count;
console.log(count);
