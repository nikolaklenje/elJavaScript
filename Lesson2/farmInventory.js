// We want to write a program that prints two numbers:
//  the numbers of cows and chickens on a farm, with the words Cows Pigs and Goats
// after them and zeros padded before both numbers so that they are always three digits long.






function AddNumber (number, animal){
    let numberString = String(number)

    while (numberString.length < 3){
       numberString = "0" + numberString
    }
    console.log(numberString,animal)

}

 function Inventory(cows,pigs,goats){
    AddNumber(cows,"cow")
    AddNumber(pigs,"pigs")
    AddNumber(goats,"goats")
 }
Inventory(7,12,8)














