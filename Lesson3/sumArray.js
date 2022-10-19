// write a sum function that takes an array of numbers and returns the sum of these numbers.

function range(start,end){
    let numArray = [];
    for( i=start; i <= end; i++){
        if (i>=start && i <= end){
            numArray.push(i);
        }
       

    }
    return numArray;
    
}

console.log(range(1,10))

function sum(range){
    let sumArray=0;
    
    for(let i = range[0]; i <= range.length; i++){
         sumArray = sumArray + i;
    }
    return sumArray
}

console.log(sum(range(1,10)));