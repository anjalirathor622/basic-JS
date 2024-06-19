let data = []
// let doller = [1,2,3,4];
let doller = {
    a1:1,
    a2:2,
    a3:3
};

data.push(doller);
console.log(data)

data.map(result = (x)=>{
    //console.log(x);
    for(var i in x){
        //console.log(x[i]);
        rupee = x[i]*80;
        console.log(rupee);
    }
})