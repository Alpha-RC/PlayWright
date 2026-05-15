console.log(score); // this will give error: ReferenceError: Cannot access 'score' before initialization
                    // as score is not declared yet, it is in "temporal dead zone" until it is declared 
                    // and initialized.

let score = 100;

// So in backend when we declare score variable at line 5,
// then as javascript do optimization, it will move the declaration of score variable to the top 
// of the scope, 
// but it will not initialize it with any value until it reaches the line where it is declared 
// and initialized.

// So the code will be interpreted as/ code is being optimized in backend like below:

// let score; // first it will do declaration of variable score means it will hoist the score variable to the top,
// but it will not be initialized

// console.log(score); // this will give error: ReferenceError: Cannot access 'score' before initialization

// score = 100; // initialization happens here

//*********************************************************************************************************************

// What is TDZ(Temporal Dead Zone) means in above case
// suppose code start in below curly braces:

{
    //code execution start // so here TDZ will start

    console.log(score); // ReferenceError: Cannot access 'score' before initialization
    score = 100;        // ReferenceError: Cannot access 'score' before initialization
    typeof score;       // ReferenceError: Cannot access 'score' before initialization
    
    let score = 100;       // TDZ will end here as variable score is declared and initialized

    cosnole.log(score); // 100 (safe to access now)
}


// example 2 with block

let x = "global"; //here x is global 

if(true){
    
    // Here if we use console.log(x); then it will not print the global value but it will go into Temporal Dead Zone cause let is
    // block scoped

    console.log(x); // this will throw ReferenceError: Cannot access 'x' before initialization


    let x = "block"; // this is a local varibale for this if block
    console.log(x);  // output: block


}