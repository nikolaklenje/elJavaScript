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



// //As a bonus assignment, modify your range function to take an optional third
//  argument that indicates the “step” value used when building the array.
//   If no step is given, the elements go up by increments of one, corresponding to the old behavior.
//    The function call range(1, 10, 2) should return [1, 3, 5, 7, 9].
//     Make sure it also works with negative step values so that range(5, 2, -1) produces [5, 4, 3, 2].



function range(start,end,step){
    let numArray = [];
    step = step || 1;
    for( i=start; i <= end; i= i + step){
        if (i>=start && i <= end ){
            numArray.push(i);  
       
        }
       

    }
    return numArray;
    
}

console.log(range(1,10))