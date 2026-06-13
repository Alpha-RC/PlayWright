// 1. Var:

// Var was the original way to declare variables in JavaScript.
// It is function-scoped, which means it is accessible within the function it is declared in.
// Var declarations are hoisted to the top of their scope with an initial value of undefined,
// which can lead to unexpected behavior.
// var can be redeclared and updated within its scope.

//**************************************************************************************************

// 1. Redeclaration and reassignment with var:

var browser = "Chrome";
var browser = "Firefox"; // Redeclaration is allowed with var
browser = "Safari";      // Reassignment is allowed with var

console.log("Var example:", browser); // Output: "Var example: Safari"

//**************************************************************************************************

// 2. function-scoped example:

var testcase = ["Test case 1", "Test case 2", "Test case 3"];

for (var i = 0; i < testcase.length; i++) 
{
    console.log("running test:" + testcase[i]);
}

// Here the variable 'i' is accessible outside the loop because 'var' is function-scoped
// why i is accessible outside the loop? 
// because var is function-scoped, which means it is accessible within the function it is declared in. 
// In this case, the loop is not a separate function, so 'i' is accessible in the outer scope after 
// the loop has finished executing.

// So if we print the value of 'i' after the loop, it will show the final value of 'i' which is 3 
// (the length of the testcase array).

console.log("Value of i after loop:", i); // Output: Value of i after loop: 3


// function-scoped example with var using a function:

var a = 10; // Global scoped variable - means we can access this variable anywhere in the code

console.log("Global variable a:", a); // Output: Global variable a: 10

// Now if we declare same variable 'a' inside a function, it will be a different variable that is 
// local to that function

function printValues()
{
    console.log("Global variable a:", a); // Output: Global variable a: 10
}
// In above function, we can access the global variable 'a' because it is in the outer scope of the 
// function

function printLocalVariable()
{
    var a = 20; // Local scoped variable - means we can access this variable only inside this function
    console.log("Local variable a:", a); // Output: Local variable a: 20
}

// if variable is declared in the function and if we try to access the same variable outside the function
// then it will give an error because that variable is local to the function and cannot be accessed outside
// the function

// e.g.
function testFunction()
{
    var message = "Hello from testFunction!"; //Scope of this varibale is limitied to thisfunction only.
    console.log(message); // Output: Hello from testFunction!
}

testFunction(); // Calling the function to see the output

// Printing the value of varible message which is declared inside the testFuction:
console.log(message); // This would cause an error: Uncaught ReferenceError: message is not defined

//**************************************************************************************************

// Hoisting with var:

// When we declare a variable with var, it is hoisted to the top of its scope and initialized with undefined.
// This means that we can access the variable before its declaration without getting an error, but it will 
// have the value undefined.

console.log("Value of hoisted variable:", hoistedVar); // Output: Value of hoisted variable: undefined

var hoistedVar = "I am hoisted!"; // Declaration and initialization of the variable

console.log("Value of hoisted variable after initialization:", hoistedVar); // Output: Value of hoisted variable after initialization: I am hoisted!

//**************************************************************************************************

// Summary of var:

// 1. Var is function-scoped, which means it is accessible within the function it is declared in.
// 2. Var declarations are hoisted to the top of their scope with an initial value of undefined.
// 3. Var can be redeclared and updated within its scope, which can lead to unexpected behavior 
//    if not used carefully.