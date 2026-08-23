const user = 
{
    firstName: "Rohit",
    lastName: "Chillal",
   
    get getfullName() {
        return this.firstName + " " + this.lastName;
    },
    
    set setfullName(fullName) {
        [this.firstName, this.lastName] = fullName.split(" ");
    }
}

// this. it means current value in the Object.

console.log(user.getfullName);  // Pramod Dutta
user.setfullName = "Amit Sharma";
console.log(user.getfullName);


// class User{
//     firstname
//     lastName,
//     fullName(){

//     }
// }