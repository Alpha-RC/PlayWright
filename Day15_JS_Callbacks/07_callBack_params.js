//----------------------------------------------------------------------------------------------------

function greetTester(name, callback) {
    console.log("Welcome, " + name);
    callback();
}

greetTester("Dev", function () {
    console.log("Let's start testing!");
});

greetTester("Dev", ()=>console.log("Let's start testing!") );

//----------------------------------------------------------------------------------------------------

// Callback with Parameters
function runTest(testName, callback){
    
    let status = "PASS";
    
    callback(testName, status);
}

runTest("Login Test", (name, result) => console.log(name + " → " + result) );

/* 
when we send arrow function to the parameter of a runTest function 
in backend that function will be stored in that parameter which can be used to call that function 

const callback  = (name, result)=> console.log(name + " → " + result);
*/

//----------------------------------------------------------------------------------------------------

// Sync Callback — forEach
let bugs = ["UI glitch", "API timeout", "Wrong redirect"];

bugs.forEach( (bug, i)=>console.log("Bug #" + (i + 1) + ": " + bug)  );

console.log("Total bugs: " + bugs.length);

//----------------------------------------------------------------------------------------------------