//32.Checking Usernames: Do the following to create a program that simulates how websites ensure that everyone has a unique username.
//• Make a list of five or more usernames called current_users.

//• Make another list of five usernames called new_users. Make sure one or two of the new usernames are also in the current_users list.

//• Loop through the new_users list to see if each new username has already been used. If it has, print a message that the person will need to enter a new username. If a username has not been used, print a message saying that the username is available.

//• Make sure your comparison is case insensitive. If 'John' has been used, 'JOHN' should not be accepted.



let current_users = ["Usman","Zainab","Subhan","Mahnoor","Maryam"]

let new_users = ["AbdulQadir","Khizar","Mahnoor","Subhan","GhulamAbbas"]

new_users.forEach(new_ones_user => {

    let our_condition = current_users.some(current_ones_users => current_ones_users.toLowerCase() === new_ones_user.toLowerCase())

      if (our_condition){

        console.log(`Sorry ${new_ones_user} is already taken!`)
      }else{
        console.log(`This userName ${new_ones_user} is avaiable`)
      }
})
