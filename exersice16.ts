//16.More Guests: You just found a bigger dinner table, so now more space is available. 
//Think of three more guests to invite to dinner.

//• Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.

//• Add one new guest to the beginning of your array.

//• Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list. • Print a new set of invitation messages, one for each person in your list.


let guest_list: string[] = ['Subhan','Mahnoor','Khizar','Zainab']

// for(let i=0; i < guest_list.length; i++){
//     console.log(`Respected Sir/Madam ${guest_list[i]}.\nWe invited you on dinner tomorrow.\n\nThank you\n`);
// }

let not_present: string = "Subhan";
let new_guest: string = "Abdul Qadir";

guest_list[0] = new_guest;

for(let i=0; i < guest_list.length; i++){
    console.log(`Respected Sir/Madam ${guest_list[i]}.\nWe invited you on dinner tomorrow.\n\nThank you\n`);
}

guest_list.unshift('Tehseen','Usman','Ghulam Abbas');

for(let i=0; i < guest_list.length; i++){
    console.log(`Respected Sir/Madam ${guest_list[i]}.\nWe invited you on dinner tomorrow.\n\nThank you. We found big table so we decide to invite 3 more guesst\n`);
}

