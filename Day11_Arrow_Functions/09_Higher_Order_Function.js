// declaring a function which asks 2 parameters testFunction , testName

// here testFunction will store a function in it. and testName will store a String in it

function runWithLogin( testFunction, testName ){
    
    let result = testFunction(); // here parameter testFunction is storing the function under it and as this function returns
                                 // something we need to store it in variable
    return `${testName}: ${result}`;
}


// Declaring functions which can be sent to runWithLogin function

function loginTest(){
    return "Pass";
}

function loginTestFailed(){
    return "fail";
}

// now calling the runWithLogin function and sending above functions as a argument to testName parameter of function runWithLogin

console.log( runWithLogin(loginTest,"login test"));         // output: login test: Pass
console.log( runWithLogin(loginTestFailed,"login test"));   // Output: login test: fail

