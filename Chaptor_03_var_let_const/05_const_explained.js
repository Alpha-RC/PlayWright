// const: Constant variable declaration in JavaScript

//*****************************************************************************************************************************************************************

// 1. A variable declared with const cannot be reassigned after its initial assignment.
// This means that once you assign a value to a const variable, you cannot change that value later in the code.

const myConstant = 10; // Declaration and initialization of a const variable
console.log("Initial value of myConstant:", myConstant); // Output: Initial value of myConstant: 10

// Trying to reassign a new value to myConstant will result in an error
myConstant = 20; // This would cause an error: Uncaught TypeError: Assignment to constant variable.

//*****************************************************************************************************************************************************************

// 2. Const must be initialized at the time of declaration. You cannot declare a const variable without assigning it a value.
const uninitializedConst; // This would cause an error: Uncaught SyntaxError: Missing initializer in const declaration

//*****************************************************************************************************************************************************************

// 3. Const is Block-scoped:

// Similar to let, a variable declared with const is also block-scoped. 
// This means that it is only accessible within the block it is defined in.
if (true)
{
    const blockScopedConstant = "I am inside the block";
    console.log(blockScopedConstant); // Output: I am inside the block
}

// Trying to access blockScopedConstant outside the block will result in an error
console.log(blockScopedConstant); // This would cause an error: Uncaught ReferenceError: blockScopedConstant is not defined

//*****************************************************************************************************************************************************************

// 4. Hoisting with const:

// Variables declared with const are hoisted to the top of their block, but they are not initialized. 
// This means that if you try to access a const variable before its declaration, it will result in a ReferenceError.
console.log("Value of hoisted constant:", hoistedConst); // This would cause an error: Uncaught ReferenceError: Cannot access 'hoistedConst' before initialization


//*****************************************************************************************************************************************************************

// Summary of const:
// 1. Const cannot be reassigned after its initial assignment.
// 2. Const is block-scoped, which means it is only accessible within the block it is defined in.
// 3. Const declarations are hoisted to the top of their block but are not initialized, leading to a ReferenceError if accessed before declaration.

//*****************************************************************************************************************************************************************