
// let x=5;
// let y=10;
// let z=5;

// console.log(x<y || y<z && x>y );

        //global variable

            //object.method
            let no1 = document.querySelector('input[name="number1"]'); //attribute selecor
            let no2 = document.querySelector('input[name=\'number2\']'); // here \ is a scape charactor

            //console.log(typeof no1.value);
            //console.log(typeof no2.value);

            

            let op = document.querySelector('select[name="oprator"]');

            //console.log(op.value);

            let reslt = document.getElementById('result');

            //console.log(reslt);

            //function
            function calculator(){      //formal argument

                let n1 = parseFloat(no1.value);
                let n2 = parseFloat(no2.value);

                //console.log(typeof n1);
                //console.log(typeof n2);


                //switch case statement
                /*switch (expresstion){
                    case1:
                        code block
                        break;
                    case2:
                        code block
                        break;
                    default:
                        code block
                }*/

                //console.log(typeof number1)
                //console.log(op.value);
                //console.log(n1);
                switch (op.value) {
                    case '+':
                        //console.log(n1+n2);
                        reslt.innerHTML = n1 + n2;
                        break;
                    case '-':
                        reslt.innerHTML = n1 - n2;
                        break;
                    case `*`:
                        reslt.innerHTML = n1 * n2;
                        break;
                    case "/":
                        reslt.innerHTML = n1 / n2;
                        break;
                    default:
                        console.log('Invalid opration');
                }
                
            }