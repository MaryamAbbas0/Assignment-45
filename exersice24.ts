//24.More Conditional Tests: You don’t have to limit the number of tests you create to 10.
 //If you want to try more comparisons, write more tests. 
 //Have at least one True and one False result for each of the following:
//• Tests for equality and inequality with strings

//• Tests using the lower case function

//• Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to

//• Tests using "and" and "or" operators

//• Test whether an item is in a array

//• Test whether an item is not in a array



let apple = "apple";
let UpperCaseApple = "APPLE";
let ten = 10;
let twenty = 20;
let fruits: string[]=["apple","mango","orange",]

console.log("Is apple is equal to apple?");
console.log(apple =="apple");


console.log("\nIs apple is not equal to apple?");
console.log(apple != "apple");


//Tests using lowerCase function.
console.log("\nIs APPLE is equal to apple after converting to lowerCase?");
console.log(UpperCaseApple.toLowerCase() == "apple" );


console.log("\nIs APPLE is equal to apple after converting to lowerCase?");
console.log(UpperCaseApple.toLowerCase() != "apple" );


//Numerical Test.
console.log("\nIs ten is equal to twenty?");
console.log(ten == twenty);


//Not equal to.
console.log("\nIs ten is not equal to twenty?");
console.log(ten != twenty);


//Greater than.
console.log("\nIs ten is greater than zero?");
console.log(ten > 0);

//Less than.
console.log("\nIs twenty is less than 10");
console.log(twenty < 10);


//Greater than or equal to.
console.log("\nIs ten is greather than or equal to 5?");
console.log(ten >= 5);


//Less than or equal to.
console.log("\nIs tewenty is Less than or equal to 10?");
console.log(twenty <= 10);


//Tests using "and" & "or" operators.
console.log("\ntwenty is not equal to 10 and twenty is greater than 10");
console.log(twenty != 10 && twenty > 10);


//Using && (and).
console.log("\n twenty is not equal to 10 and twenty is greater than 10 ");
console.log(twenty != 10 && twenty > 30);


//Using || (or).
console.log("\n 20 is greater than 50 OR 20 is equal to 20 ");
console.log(20 > 50 || 20 == 20);


console.log("\n 20 is greater than 50 OR 20 is not equal to 20 ");
console.log(20 > 50 || 20 != 20);


// Test weather an item is inculde in array. 
console.log("\n Is Orange inculde in my fruits array");
console.log(fruits.includes("orange"));


//Not inculde.
console.log("\n Is Orange not inculde in my fruits array");
console.log(!fruits.includes("orange"));


