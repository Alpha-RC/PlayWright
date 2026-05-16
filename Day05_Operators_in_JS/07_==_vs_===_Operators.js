// == vs === in javascript
console.log(42 == 42);   // output: true cause both are numeric literal but it will compare loosely in this case
console.log(42 == "42"); // output: true cause JS loosely checks the values with == operator

console.log(42 === 42);  // output: true cause it compares the values with their data types also with === operator
console.log(42 === "42") // output: false, here data types of both values are different so it will return flase


// ==  dosen't check the data type and compare the values directly
// === checks the vlaues with their data types also

console.log(0 == "");  // output: true
console.log(0 === ""); // output: false


console.log (true == 1); // true

console.log(false == 0); // true

console.log(true == "1"); // true

console.log(true == 2); // true

/* 
in above 4 example only 0 is false other numbers or numbers as string becomes true in == comparison operator

Why?
`==` algorithm branch on types:

- string vs number → coerce string to number
- string vs string → byte compare, no coercion
- `Number("")`  = 0, `Number("0")`  = 0 — but that path never runs when both sides already strings

*/
