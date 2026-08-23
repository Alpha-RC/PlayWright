let scores = [
    [85, 90, 78],   // student 0 , 253
    [60, 45, 70],   // student 1,  175
    [95, 88, 92]    // student 2, 275
];

let rowSums = scores.map( row => row.reduce((a , b) => a + b , 0));  // here 0 means after accumulating add 0 in the sums
console.log(rowSums); 

// process.stdout.write(rowSums); //--> this will throw error as: TypeError [ERR_INVALID_ARG_TYPE]: 
                                  // The "chunk" argument must be of type string or an instance of Buffer, TypedArray, or DataView. 
                                  // Received an instance of Array


let suiteResults = [
    ["login-pass", "register-pass", "logout-pass"],     // Auth suite
    ["search-pass", "filter-fail", "sort-pass"],        // Search suite
    ["checkout-fail", "payment-fail", "confirm-pass"]   // Payment suite
];

for (let i = 0; i < suiteResults.length; i++) 
{
    for (let j = 0; j < suiteResults[i].length; j++) {
        
        if(suiteResults[i][j].includes("fail")){
            console.log(suiteResults[i][j]);
        }
    }    
}

/* 

output:

filter-fail
checkout-fail
payment-fail

*/