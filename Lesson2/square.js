
const square = function (a,b){

   let result = 1;
   for(i = 0; i < b; i++){
    result *= a;
   } 
   return result
}
console.log(square(2,10))