// How to create variables in JavaScript?

// There are 3 ways to create variables in JavaScript: using 'var', 'let', and 'const' keywords.

//========================================================================================================
// 1. Using 'var' keyword:

// The 'var' keyword is used to declare a variable in JavaScript.
// It has function scope, which means that the variable declared with 'var' is accessible
// within the function it is declared in, and also globally if declared outside of any function.

var a = 10;
// Here we have declared a variable 'a' and assigned it the value 10 using the 'var' keyword.

//========================================================================================================

// Using 'let' keyword:

// The 'let' keyword is used to declare a block-scoped variable in JavaScript.
// A variable declared with 'let' is only accessible within the block (enclosed by curly braces {})
// in which it is declared.
let b = 20;
// Here we have declared a variable 'b' and assigned it the value 20 using the 'let' keyword.

//========================================================================================================

// Using 'const' keyword:

// The 'const' keyword is used to declare a block-scoped variable that cannot be reassigned.
// A variable declared with 'const' must be initialized at the time of declaration,
// and its value cannot be changed later in the code.
const c = 30;
// Here we have declared a constant variable 'c' and assigned it the value 30 using the 'const' keyword.
// The value of 'c' cannot be changed later in the code.
// If we try to reassign a new value to 'c', it will result in an error.

//========================================================================================================