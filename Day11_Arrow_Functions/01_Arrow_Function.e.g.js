//----------------------------------------------------------------------------------------------------------

// normal function e.g:
function validateStatusCode(status){
    if(status >=200 && status <= 300){
        console.log("Request is fine");
    }
}

// calling function e.g:
validateStatusCode(201); // output: Request is fine

//----------------------------------------------------------------------------------------------------------

//function as expression:
const validateStatusCode_Exp = function(status) {
    if(status >=200 && status <= 300){
        console.log("Request is fine");
    }
}

validateStatusCode_Exp(202); // output: Request is fine

//----------------------------------------------------------------------------------------------------------

//Arrow function e.g:
const validateStatusCode_arrow = status => {
    
    if(status >=200 && status <= 300){
        console.log("Request is fine");
    }
}

validateStatusCode_arrow(203); // output: Request is fine

//----------------------------------------------------------------------------------------------------------