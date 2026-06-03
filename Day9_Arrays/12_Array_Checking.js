// 1. Array.isArray(ArrayVariable or array itself)

let result = Array.isArray([1,2,3]);
console.log(result); // output: true

let result1 = Array.isArray("a");
console.log(result1); // output: false

// 2. every:
console.log( [80, 90, 95].every(s => s >= 70) ); // here every will try to check the condition is true or not on the given array [80,90,95]
console.log( [60, 90, 95].every(s => s >= 70) ); // output: false

// real time example 1:
// API Responses:
console.log( [200, 201, 203].every(stsCode => stsCode >= 200) ); // output: true


// 3. some: - AT least one condition must pass
console.log( [80,60,85].some(s => s < 70) ); // output: true --> here some will validate if atleast one condition is pass for any of element from array
console.log( [80,60,85].some(s => s < 60) ); // output: false