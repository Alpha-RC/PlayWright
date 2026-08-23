let a = [1, 2, 3];
let b = [4, 5, 6];

// normal way:
let c = a + b; // this will concat the above 2 arrays
console.log(c); // output: 1,2,34,5,6


// 1. concat()
console.log(a.concat(b)); // output: [ 1, 2, 3, 4, 5, 6 ]

// 2. spread(modern way of concatenation). syntax-->(...arayVaribaleName)
let d = [...a, ...b];
console.log(d); // output: [ 1, 2, 3, 4, 5, 6 ]

// 3. join

let s = a.join(","); 
console.log(s); // output: 1,2,3

console.log(a.join("|")); // output: 1|2|3

