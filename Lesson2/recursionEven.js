// We’ve seen that % (the remainder operator) can be used to test whether a number is even
//  or odd by using % 2 to see whether it’s divisible by two.
//   Here’s another way to define whether a positive whole number is even or odd:

// Zero is even.

// One is odd.

// For any other number N, its evenness is the same as N - 2.

// Define a recursive function isEven corresponding to this description. 
// The function should accept a single parameter (apositive, whole number) and return a Boolean.

 function isEven(a){
  
    if(a == 1){
        console.log ("Odd")
         return 1;
    }
    else if(a == 0) {
        console.log("Even")
        return 1;
        }
        else{
        return isEven(a-2);
        }
}

isEven(-1)

// It is perfectly fine for a function to call itself,
// as long as it doesn't doing so often to overflows the stack.