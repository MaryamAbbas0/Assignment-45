//12.Greetings: Start with the array you used in Exercise 11,
// but instead of just printing each person’s name, print a message to them.
//The text of each message should be the same, but each message should be personalized with the person’s name.

let friendsName: string[] =["Muniza","Khatija","Sabahat","Samiya","Maryam"];

let message: string = `Tum mere bestie ho:`;

for(let i=0; i<friendsName.length; i++){
    console.log(message + friendsName[i])
}