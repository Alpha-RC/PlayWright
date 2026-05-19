//======================================================================================================

console.log(null>=0);  // true

console.log(null===0); // false

let count = count + 1; // output: ReferenceError: Cannot access 'count' before initialization
console.log(count);

//======================================================================================================

// Nullish operator: 

// syntax-->  variable ?? "assign this value" ;     

let amul = null;

let milk = amul ?? "gokul milk";

console.log(milk);

//======================================================================================================


let Amul = "Amul milk is available";

let Milk = Amul ?? "gokul milk";

console.log(Milk);

//======================================================================================================