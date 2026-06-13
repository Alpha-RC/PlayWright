// Using single quote
let name = 'Rohit';

// Using double quote
let sirname = "Chillal"

//  Using template literal
let name1 = "Alice";
let msg = `Hello ${name1}! 2+2 = ${2+2}`;
console.log(msg);

// Multiline string using backticks
let report  = `
This is a string
using backtick 
where we can put multiple lines
`;

// Using String interface:
console.log(String(200)); // String is a interface and it will convery anything into t string, here 200 is a number but will be converted
                          // into a string data type // output: 200 but it will be a string data type

console.log(String( [1,2,3,4,5,6,7,8,9] )); // output: 1,2,3,4,5,6,7,8,9 | this will convert array into string like 1,2,3,4,5,6,7,8,9

// string --> this is a data type
// String --> interface(helps to create new strings)
