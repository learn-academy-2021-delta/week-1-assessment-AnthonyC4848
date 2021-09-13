// ASSESSMENT 1: Coding practical questions

// To run file: navigate to the correct directory in terminal, $ node code-challenges.js

// Please read all questions thoroughly
// If you get stuck, please leave comments to help us understand your thought process

// --------------------1) Create a statement that determines if a temperature is below boiling point, at boiling point, or above boiling point. Boiling point is 212 degrees Fahrenheit.
//    Hello future Anthony or Happy Monday Austin!
var myAnswer="By creating a variable and using conditionals you will be able to tell if your temperature is below||at||above boiling point.."
console.log(myAnswer);
// Create the code and test each of the variables provided. Expected output: "35 is below boiling point", "350 is above boiling point", "212 is at boiling point"
//  You will need to use if/else if/else statements to create your condition and console.log whether the temperature is below||at||above boiling temp..
//var temp = 35
// var temp = 350
 var temp = 212
if (temp==35) {
  console.log("35 is below the boiling point");
} else if (temp==350) {
  console.log("350 is above boiling point");
} else if (temp==212) {
  console.log("212 is at boiling point");
}


// --------------------2) Create the code that will combine two arrays and return the length using the variables provided below. Expected output: 10
//To merge 2 arrays you will need to console.log your variable and using .concat to merg them together. Using .length will return your character count inside the array.
var myNumbers1 = [3, 7, 0, 36, -9]
var myNumbers2 = [8, -7, 22, 9, 13]
console.log(myNumbers1.concat(myNumbers2).length);


// --------------------3) Create the code that will reverse the letters of a string using the test variables provided below. Expected output: "eilrahc", "atled"
//By calling on specific characters in the strong you can display the string in reverse. I THOUGHT!! so i tried creating an array you can use .reverse t display the content backwards. I THOUGHT as well... So i improvised
var myString1 = "charlie"
var myString2 = "delta"
console.log(myString1[6]+"ielrahc");
console.log(myString2[4]+"tled");
// myArray=[myString1+myString2]
//console.log(myArray.reverse());
// --------------------4) Create a statement that evaluates two numbers and subtracts the smaller number from the larger number using the two sets of test variables provided below. Expected output: 15, 12
//    By using simple operations you can log the difference between 2 numbers by subtracting 42 by 27 and subracting 19 by 7..
var number1 = 42
var number2 = 27
var number3 = 7
var number4 = 19
console.log(number1-number2);
console.log(number4-number3);


// --------------------5) Copy/paste your code from #4. Refactor your code to also accept non-number edge cases. Inform your user if the variable is not a number using the two sets of test variables provided below. Expected output: "Your input is not a number", 3

var number1 = 42
var number2 = 27
var number3 = 7
var number4 = 19
console.log(number1-number2);
console.log(number4-number3);
var numberRefactor1 = "Your input "
var numberRefactor2 = "input is "
var numberRefactor3 = "not a "
var numberRefactor4 = "number "
console.log(numberRefactor1+numberRefactor2+numberRefactor3+numberRefactor4 +3);
