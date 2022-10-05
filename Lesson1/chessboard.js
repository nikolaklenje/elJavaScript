// Write a program that creates a string that represents an 8×8 grid,
//  using newline characters to separate lines. 
//  At each position of the grid there is either a space or a "#" character. 
//  The characters should form a chessboard.

// Passing this string to console.log should show something like this:

//  # # # #
// # # # # 
//  # # # #
// # # # # 
//  # # # #
// # # # # 
//  # # # #
// # # # #
   
   
//     let dash = "";
//     let space = ""
    
   
//        for (  j = 0 ; j < 8 ; j = j+1){
//         dash = dash + "#" + " "
//         space = space + " " + "#"
//        }
//        for ( i = 0 ; i < 8 ; i = i+1){
//         if( i % 2 == 0){
//        console.log(dash)
//     }
//     else{
//        console.log (space)
//     }
//    }

   let dash = "";
    
    
   for ( i = 0 ; i < 8 ; i = i+1){ 

       for (  j = 0 ; j < 8 ; j = j+1){
        dash += (i + j) % 2 ? "#" : " ";
        
       }
        dash+="\n"
       
   }console.log(dash );
