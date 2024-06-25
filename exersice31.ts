//No Users: Add an if test to Exercise 28 to make sure the list of users is not empty.
//• If the list is empty, print the message We need to find some users!

//• Remove all of the usernames from your array, and make sure the correct message is printed.


let userNames = ["Subhan","Usman","Admin","AbdulQadir","Khizar"]

 userNames = []

if(userNames.length === 0){
    console.log("Your Array Empty We Need To Find Some Users!");
}else {
        userNames.forEach (oneUser=> {
        if (oneUser === "Admin"){
            console.log(`Hello ${oneUser}, Would you like see a status report?`)
        }else{
            console.log(`Hello ${oneUser}, Thank you for login again.`)
        }
    })
    
}