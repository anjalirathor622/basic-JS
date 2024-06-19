//element created
let elem = document.createElement('a');
//adding class, id and attributes
elem.classList ='links';
elem.innerHTML = "<b>Code With Harry</b>"
elem.setAttribute("href","https://www.codewithharry.com")
console.log(elem);
//appendchild
document.getElementById('heading').appendChild(elem);

//fetching all links contains js word in code with harry website
let links = document.links;    //gives all links af document
let  str = "js";
let jsLinks = new Array();   //created a array
let href;
Array.from(links).forEach(function(e){
    href = e.href;                   //.href gives url of the link
    if (href.includes(str)) {
        // console.log(href);
        jsLinks.push(href);    //element pushed to array
    }
    console.log(jsLinks)
})