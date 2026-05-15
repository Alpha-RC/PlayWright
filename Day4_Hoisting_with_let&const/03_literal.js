// Liternal is a variable value

// in javascript we have below types of literals

/*

1.  Integers - Decimal -  42,0,-7
2.  Hex Integer - 0xFF
3.  Binary - 0b1010
4.  Octal - 0o77
5.  Float -  3.14, 0.05
6.  Scientific Numbers - 2.5e6, 1.2e-3
7.  String 
     1. 'hello'
     2. "hello"
8.  boolean 
     1. true, false
9.  null ->  absence of the value 
10. undefined -> not yet assigned.
11. BigInt -> 98765432123456
12. Object -> { " key" : "value"} 
13. Array -> [1,4,3,2,42]

*/

let name = "Rohit";    // This is a String literal assigned to the varibale 'name'
let isStudent = true;  // This is a boolean liternal assigned to varibale 'isStudent'
let pi = 3.14;         // This is a numeric literanl assigned to variable 'pi'
let nullValue = null   // This is a null literal assigned to varible 'nullValue'
let undefinedValue     // This varibale is declared but not assigned, so it has a value 'undefined'

//-----------------------------------------------------------------------------------------------------------------------------------

console.log( 

    "Diff between null and undefined\n\n"+
    "Undefined:\n"+
    "A varibale exists, but is has not been assigned with any value yet. javascripts itself sets this automatically\n\n"+
    "null:\n"+ 
    "A variable exists, but the developer explicitly assign no value or empty value It is intentional absence of any value\n"
);

console.log(

" ---------------------------------\n"+
"|        1. undefined             |\n"+
" ---------------------------------\n"

);

let userName                    // Declared but not assigned
console.log(userName);          // undefined
console.log("Data type of varibale 'username' is: " + typeof userName);   // "undefined"

function greet()
{
    // no return statement
}

console.log(greet());           // "undefined"


//-----------------------------------------------------------------------------------------------------------------------------------

//----------------------------------
// 1. null                          |
//----------------------------------

let profilePicture = null; // developer explicitly assigned null value
console.log(profilePicture); //output: null
console.log("Data type of varibale 'profilePicture' is: " + typeof profilePicture);  // "Object" <--Known JS quirk!


let score = 100;
score = null; //developer clear the value of 'score' intentionally
console.log(score);

//-----------------------------------------------------------------------------------------------------------------------------------

// Key Differences:

// --------------------------------------------------------
// 3. Key Differences (Summary Table)
// --------------------------------------------------------

/*
  | Feature              | undefined                     | null                           |
  |----------------------|-------------------------------|--------------------------------|
  | Meaning              | Not assigned yet              | Intentionally empty            |
  | Who sets it?         | JavaScript automatically      | Developer manually             |
  | Type                 | undefined                     | object (historical bug in JS)  |
  | == comparison        | null == undefined  -> true    |                                |
  | === comparison       | null === undefined -> false   |                                |
*/

//-----------------------------------------------------------------------------------------------------------------------------------

// typeof - tells the data type of variable

let userName1 = "Rohit";
console.log(typeof userName1); // Output: String

console.log(typeof name);           // String
console.log(typeof isStudent);      // Boolean 
console.log(typeof pi);             // Numeric
console.log(typeof nullValue);      // object <-- Historical bug in JS
console.log(typeof undefinedValue); // undefined