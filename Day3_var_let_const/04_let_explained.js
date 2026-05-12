// let:

//************************************************************************************************************************

// 1. Can be reassigned but not redeclared within the same scope

let myVariable = 10; // Declaration and initialization
console.log("Initial value of myVariable:", myVariable); // Output: Initial value of myVariable: 10

myVariable = 20; // Reassignment is allowed
console.log("Value of myVariable after reassignment:", myVariable); // Output: Value of myVariable after reassignment: 20

// Redeclaration in the same scope is not allowed and will cause an error
let myVariable = 30; // This would cause an error: Uncaught SyntaxError: Identifier 'myVariable' has already been declared

//************************************************************************************************************************

// 2. Let is Block-scoped:

// A variable declared with let is only accessible within the block it is defined in. 
// A block is defined by curly braces {}. This means that if you declare a variable 
// with let inside a block, it cannot be accessed outside of that block.

// e.g. 1:
if (true)
{
    let blockScopedVariable = "I am inside the block";
    console.log(blockScopedVariable); // Output: I am inside the block
}

// Trying to access blockScopedVariable outside the block will result in an error
console.log(blockScopedVariable); // This would cause an error: Uncaught ReferenceError: blockScopedVariable is not defined

// e.g. 2:
for (let i = 0; i < 3; i++)
{
    console.log("Inside loop, i:", i); // Output: Inside loop, i: 0, then 1, then 2
}  

// Trying to access 'i' outside the loop will result in an error because 'i' is block-scoped to the loop
console.log("Outside loop, i:", i); // This would cause an error: Uncaught ReferenceError: i is not defined

//e.g. 3:
function testFunction()
{
    let localVariable = "I am local to this function";
    console.log(localVariable); // Output: I am local to this function
}

testFunction(); // Calling the function to see the output

// Trying to access localVariable outside the function will result in an error because 'localVariable' is block-scoped to the function
console.log(localVariable); // This would cause an error: Uncaught ReferenceError: localVariable is not defined

//************************************************************************************************************************

// 3. Hoisting with let:

// Variables declared with let are hoisted to the top of their block, but they are not initialized. 
// This means that if you try to access a let variable before its declaration, it will result in a ReferenceError.

console.log("Value of hoisted variable:", hoistedLet); // This would cause an error: Uncaught ReferenceError: Cannot access 'hoistedLet' before initialization

let hoistedLet = "I am hoisted!"; // Declaration and initialization of the variable

console.log("Value of hoisted variable after declaration:", hoistedLet); // Output: Value of hoisted variable after declaration: I am hoisted!

//************************************************************************************************************************

// Summary of let:

// 1. Let can be reassigned but not redeclared within the same scope.
// 2. Let is block-scoped, which means it is only accessible within the block it is defined in.
// 3. Let declarations are hoisted to the top of their block but are not initialized, leading to a 
//    ReferenceError if accessed before declaration.