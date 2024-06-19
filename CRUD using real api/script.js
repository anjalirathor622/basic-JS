
            //two ways to call api
              // 1. XMLHTTP request
              // 2. fetch api
              let mytbl = document.querySelector('.my_table > tbody');
              let api = `https://reqres.in/api`
              fetch(api+'/users?page=2')
              .then(res=>{
                  return res.json();
              })
              .then((data)=>{
                  
              /*mytbl.innerHTML=`
                                  <tr>
                                      <th scope="row"></th>
                                      <td></td>
                                      <td></td>
                                      <td></td>
                                  </tr>`;
              */
              //console.log(mytbl.innerHTML);
              //console.log (data.data);
              
              let tr = ``;
              for(var d of data.data){        //for of loop
                  //console.log(d.first_name);
                  tr += `<tr>
                              <th>${d.id}</th>
                              <td>${d.first_name}</td>
                              <td>${d.last_name}</td>
                              <td>${d.email}</td>
                              <td>
                                  <button class="btn btn-success btn-sm">view</button>
                                  <button class="btn btn-primary btn-sm">edit</button>
                                  <button class="btn btn-danger btn-sm">delete</button>
                              </td>
                         </tr>`
                  }
              mytbl.innerHTML = tr;
              })
              .catch(e=>{
                  console.log(e);
              });
              //PO.then().then().catch();
              let sendData = (elem)=>{
                  //alert('okokok')
                  //console.log(elem);
                  let fn = elem.querySelector('div > input#fname').value;
                  let ln = elem.querySelector('div > input#lname').value;
                  let eml = elem.querySelector('div > input#email').value;
                  //console.log(fn,ln,eml);
                  let jsondata = {
                      "first_name" : fn,
                      "last_name" : ln,
                      "email" : eml,
                  }
                  console.log(jsondata);
      
                  fetch(api+'/users',{
                      method : "POST",
                      headers : {
                          'content-type' : 'application/json'
                      }
                  })
                  .then(res=>{
                      return res.json();
                  })
                  .then(data=>{
                      console.log(data);
                  })
                  .catch(err=>{
                      console.log(err);
                  })
              };
              
              