
const form =  document.createElement('form')
form.setAttribute("id","myform")
const body = document.querySelector("body")
let input = document.createElement("input")
let input2 = document.createElement("input")
let input3 = document.createElement("input")

var appndform =body.appendChild(form)
appndform.appendChild(input).placeholder = "enter your name" 
appndform.appendChild(input2).placeholder = "enter your surname"
appndform.appendChild(input3).placeholder = "enter address"

let btn = document.createElement("button")
body.appendChild(form).appendChild(btn)
btn.setAttribute("id","mybtn")
btn.setAttribute("type","button")
btn.setAttribute("onclick","func()")
document.getElementById("mybtn").value = "button";
btn.innerHTML = "submit"

let btn2 = document.createElement("button")
body.appendChild(form).appendChild(btn2)
btn2.setAttribute("id","mydel")
btn2.setAttribute("type","button")
btn2.setAttribute("onclick","del()")
document.getElementById("mybtn").value = "button";
btn2.innerHTML = "delete"
const hr = document.createElement("hr")

body.appendChild(hr)

const table1 = document.createElement('table')
table1.setAttribute("id","mytable")
body.appendChild(table1) 
table1.style.border ="1px solid black"

var btnclick = document.getElementById("mybtn")
    function func(e){
            
            var row1 = table1.insertRow(0)
            let cell1 = row1.insertCell(0)
            let cell2 = row1.insertCell(1)
            let cell3 = row1.insertCell(2)
            
            cell1.innerHTML = input.value;
            cell2.innerHTML = input2.value;
            cell3.innerHTML = input3.value;
            
            let cell4 = row1.insertCell(3)
            let btn3 = document.createElement("button")
            btn3.innerHTML = "read"
            cell4.appendChild(btn3)
            btn3.setAttribute("id","myread")
            btn3.setAttribute("type","button")
            btn3.setAttribute("data-toggle","modal")
            btn3.setAttribute("data-target","#exampleModal")
            btn3.setAttribute("onclick","read()")
                
            let cell5= row1.insertCell(4)
            let btn4 =document.createElement("button")
            cell5.appendChild(btn4)
            btn4.innerHTML = "update"
            btn4.setAttribute("id","myupdate")
            btn4.setAttribute("type","button")
            btn4.setAttribute("onclick","upd(this)")

            let cell6 = row1.insertCell(5)
            let btn5 = document.createElement("button")
            cell6.appendChild(btn5)
            btn5.innerHTML="delete"
            btn5.setAttribute("type","button")
            btn5.setAttribute("id","delbtn")
            btn5.setAttribute("onclick","del(this)")
    }
    function del(z){                     
        z.closest('tr').remove();
        console.log(z.closest('tr'))
    }
     function upd(elem){
         var tt = prompt("enter your name");
         //console.log(tt)
        if(tt != ''){
            //console.log("okk")
            let a =document.querySelector("#mytable tbody:first-child").children[0];
            let b = document.createTextNode(tt)
            a.replaceChild(b, a.childNodes[0]);
            a.replaceChild(a)= tt;
            //a.append(tt);
            //console.log(a)

            //document.querySelector("mytable tbody tr first-child").innerHTML =b
            //console.log(b)
        }else{
            alert("enter name")
            //return prompt("enter your name")
        }
        
        //prompt("enter your surname")
        //prompt("enter your address")
    }
     function read(){
        let rd= document.querySelector("#fname")
        let rd2= document.querySelector("#fsname")
        let rd3= document.querySelector("#faddr")
        rd.innerHTML = input.value
        rd2.innerHTML = input2.value
        rd3.innerHTML = input3.value
    }  
