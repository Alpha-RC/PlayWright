// Rest of the Params.

function logResult(suiteName, ...results){
    console.log(suiteName);
    console.log(results);
}

// calling function
logResult("login test", 1,2,3,4,5); 

// here output will be: 
// login test        --> this one for suitName parameter
// [ 1, 2, 3, 4, 5 ] --> this is for ...results parameter, ...results works as a array varibale which can store multipe values


function logResult1(...results , suitName){   //--> this is not correct in JS ...result cannot be at first place in parameters of function
    console.log(suiteName);
    console.log(results);
}

logResult1(1,2,3,4, "Login Test"); // this will give SyntaxError: Rest parameter must be last formal parameter

