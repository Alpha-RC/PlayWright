// 1. Hoisting with var:

console.log(greeting); // Output: undefined

var greeting = "Hi, How are you?";

console.log(greeting); // Output: Hi, How are you?

//***************************************************************************************************

// How above code works in background?
// During the compilation phase, JavaScript hoists the variable declaration to the top of its scope.
// So, the code is interpreted as follows:

// it will define the variable greeting on its own and it will intialize it with undefined value for the variable. 
// Then, when the code is executed, the first console.log(greeting) will output undefined 
// because the variable has been declared but not yet assigned a value.
// After that, the assignment greeting = "Hi, How are you?" will take place, and 
// the second console.log(greeting) will output "Hi, How are you?". 

var greeting; // Declaration is hoisted to the top
console.log(greeting); // Output: undefined 

greeting = "Hi, How are you?"; // Assignment remains in place
console.log(greeting); // Output: Hi, How are you?

//***************************************************************************************************


// 2. Hoisting with let:

console.log(name); // This would cause an error: Uncaught ReferenceError: Cannot access 'name' before initialization

let name = "Rohit";

console.log(name); // Output: Rohit