let age  = 20;

if(age > 18){
    console.log("You are allowed to vote!");
}
else{
    console.log("You are not allowed to vote!");
}


// real time e.g 1:
let Age = 18;

if(Age >= 18){
    console.log("You are an adult.");
}
else{
    console.log("You are a minor");
}


// real time e.g 1:

let statusCode = 200;

if(statusCode === 200){
    console.log("API is working fine")
}
else if(statusCode === 404){
    console.log("API NOT found");
}
else{
    console.log("No status code matched!");
}


// real time e.g 2:

let userName  = "Dev";
let password  = "secure123";
let isAccountLocked = false;

if((userName === "Dev" && password === "secure123") && !isAccountLocked){
    console.log("Allowed to login");
}
else{
    console.log("Not allowed to login");
}