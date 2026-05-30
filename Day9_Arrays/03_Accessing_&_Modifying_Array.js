// Accessing & Modifying Arrays:

let statuses = ["pass" , "fail" , "skip"];

// Accessing by indexes:

// 1. by using variableName[index]
console.log(statuses[0]); // output: pass
console.log(statuses[1]); // output: fail
console.log(statuses[2]); // output: skip
console.log(statuses[3]); // output: undefined

console.log();

// using variableName.at(index) method
console.log(statuses.at(-1)); // output: skip
console.log(statuses.at(-2)); // output: fail
console.log(statuses.at(-3)); // output: pass
console.log(statuses.at(-4)); // output: undefined


// Modifing Values

// 1. by using varibaleName[index] = value;

statuses[1] = "Blocked";
console.log(statuses); // output: [ 'pass', 'Blocked', 'skip' ]

// can add value at any index also

statuses[4] = "fail";
// 3rd index is empty so it will be a empty item and will print as <1 empty item> in whole array print
console.log(statuses); // output: [ 'pass', 'Blocked', 'skip', <1 empty item>, 'fail' ]

console.log(statuses[3]); //output: undefined

statuses[3] = "in-progress";

console.log(statuses[3]); // output: in-progress

console.log(statuses); // output: [ 'pass', 'Blocked', 'skip', 'in-progress', 'fail' ]