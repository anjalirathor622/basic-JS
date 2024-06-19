
// it is an multidimetinal array or array or arrays
// outer layer of array is number of other arrays stored inside, and inner layer is values stored inside all the arrays
var students = [
    ["Name", "Age", "gender", "stream"],
    ["harry", 17, "male", "B.com"],
    ["annie", 18, "female", "BCA"],
    ["sherry", 19, "male", "B.tec"],
    ["lavi", 19, "female", "B.com"],
    ["jenni", 18, "female", "B.com"],
];

//console.log(students);  //accessing full array
//console.log(students[0]); //accesing array element of array
//console.log(students[0][0]); //accesign  a value of array of array

//lets loop this array 
for(a=0;a<students.length;a++){
    //console.log(students[a][0]);
    for(b=0;b<students[a].length;b++){
        console.log(students[a][b]+ " ")
    }
}

//displaying multidimantional data is tabuar form
document.write('<table border=1 cellspacing=0>')
for(a=0;a<students.length;a++){
    
    //document.write('<h2>'+students[a]+'</h2>')
    document.write('<tr>')
    
    document.write('<th>')
    document.write('<h2>'+students[a][0]+'</h2>');
    document.write('</th>');

    for(b=1;b<students[a].length;b++){
       
        document.write('<td>')
        document.write('<h2>'+students[a][b]+'</h2>');
        document.write('</td>')
    }
    document.write('</tr>')
}
document.write('</table>')
