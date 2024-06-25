//44.Sandwiches: Write a function that accepts a array of items a person wants on a sandwich.
// The function should have one parameter that collects as many items as the function call provides,
// and it should print a summary of the sandwich that is being ordered. Call the function three times, 
//using a different number of arguments each time.



function makeSandwich(...items: string[]){
    console.log(`\n Making a Sandwich with the following items:\n`);

    items.forEach(singleItem => console.log("-" + singleItem));

    console.log("\n Now Enjoy Sandwich");
}

makeSandwich("chicken ","chesse ", "mayo ", "egg ")

makeSandwich("bread","Butter");

makeSandwich("bread","Butter","mayo","egg","chesse","chicken","Tomato","lettuce");

