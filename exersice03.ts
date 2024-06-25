//3.Name Cases: Store a person’s name in a variable,
// and then print that person’s name in lowercase, uppercase, and titlecase.

//Lower case 
let personName: string = "Maryam Abbas";

console.log("lowercase:", personName.toLowerCase())

//Upper case
console.log("Uppercase:", personName.toUpperCase())

//Title case
console.log("Titlecase:", personName.replace(/\bw/g,c => c.toUpperCase()))
