// console.log(sum(range(1, 10)));
// Write a range function that takes two arguments, start and end, and returns an array containing 
// all the numbers from start up to (and including) end.

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