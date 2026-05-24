let condition = true;

while(condition){
    console.log("Condition is true");
    condition = false; // making condition false so it should not execute in infinite loop   
}

console.log(condition);
condition = true;
console.log(condition);



// e.g 1:

let attempt = 0;            // attempt = 0 --> initilization part
while(attempt < 5){         // attempt < 5 --> condition part
    console.log(attempt);   
    attempt++;              // attempt++   --> increment/decrement part 
}

// e.g 2:

