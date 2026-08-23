// iterate - go from one indes to another

let tests = ["login","checkout","search"];

// 1. using normal for loop:

for (let i = 0; i < tests.length; i++) 
{    
    console.log(tests[i]);
}

//output: 

// login
// checkout
// search

console.log("--------------------------------------------");

// 2. using for of loop:

for (test of tests) {
    console.log(test);
}

//output:

// login
// checkout
// search

console.log("--------------------------------------------");

// 3. using forEach method:

tests.forEach((test , index) =>{
    console.log(test , index);
});

// output:

// login 0
// checkout 1
// search 2

console.log("--------------------------------------------");

// 4. using for in loop
for (let test in tests) {
    console.log(test , "-->" , tests[test]);
}

//output:

// 0 --> login
// 1 --> checkout
// 2 --> search

console.log("--------------------------------------------");