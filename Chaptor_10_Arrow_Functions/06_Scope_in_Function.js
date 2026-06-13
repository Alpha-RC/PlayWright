// Scope in Functions

let env = "staging";  // global scope

function setupConfig() {
    let timeout = 3000;   // local scope
    console.log(env);     // ✅ can access global
    console.log(timeout); // ✅ can access local
}


setupConfig();  //calling function
console.log(env);  // output: staging
// console.log(timeout); // output: ReferenceError: timeout is not defined



let g_x = 10;


// Nested scope | blocked scope 
function outer() {
    let x = 10;

    function inner() 
    {
        let y = 20;
        console.log(x);
    }
    
    inner();
    console.log(y); // ReferenceError: y is not defined
}

outer();