//creating duv element
// console.log('hello')
let elem = document.createElement('div');
elem.className = 'mydiv';
elem.innerHTML = "hey!! you can write here whatever you want..."
// console.log(elem);

let body = document.getElementById('body');
// console.log(body)
//append div to body
body.insertBefore(elem,body.children[1]);

//add event listener
elem.addEventListener('click',editText);

elem.addEventListener('blur',changeText);


//function defination
function editText(){        //editiing the text
    elem.contentEditable = true;
}
function changeText(){         //seting the changed text
    localStorage.setItem('newText',elem.innerText)
}