let friendss = {
        //p:v
        friends:["anjali","payal","kumkum","ruchika","pushpendra","pankaj"], //arrey

        //methods
        method1(){
            //for LOOP
            /*for (expression 1; expression 2; expression 3) {
                    code block to be executed
                } */
            for (i=0;i<this.friends.length;i++){
                    //return this.friends[i];
                    console.log("hello",this.friends[i]);
                            
                }
        },

        method2(){
            //for in LOOP
            /*for (variable in array) {
                    code
            }*/
            for(let x in this.friends){
                //return this.friends[x];
               console.log('helo',this.friends[x])
                }
        },

        method3(){
            //for of LOOP
            /*for (variable of iterable) {
                // code block to be executed
            } */
            for(y of this.friends){
                //return y;
                console.log("hello.....", y);
                }
        },

        method4(){
            //while LOOP
            /*while (condition) {
                // code block to be executed
            } */
            let i =0;
            while(i<this.friends.length){
                // return this.friends[i];
                console.log("helloo.......", this.friends[i]);
                i++;
                }
        },

        method5(){
            //do while LOOP
            /*do {
                // code block to be executed
                }
            while (condition); */
            let i = 0;
            do{
            //return this.friends[i];
                console.log("hellooo.........", this.friends[i]);
                i++;
            }
            while(i<this.friends.length);
        },

        method6(){
            //map method
            this.friends.map((cv,idx,arr)=>{
                //return idx;
                console.log("hellooooo........" +cv)
            })
        },

        method7(){
            //filter method
            this.friends.filter((cv,idx,arr)=>{
            //return cv;
            console.log("hellooooo...all....." +cv)
            })
        }
}


function globalScope(){
    var x = 20;
    console.log(x)
}
globalScope();

//we cant access variable ooutside which is defined inside a function scope, ecxept var
//console.log(x)

