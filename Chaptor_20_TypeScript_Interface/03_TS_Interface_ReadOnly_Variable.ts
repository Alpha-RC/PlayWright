interface APIResponse{
    readonly statusCode:number;
    body:string;
    headers?:object;
    responseTime?:number;
}

// in above interface there is a variable which is a readonly variable
// this means, once it got inililized/assigned by any value then it cant be changed/modify again

//  ? means it is optional for objects

// declaring a varibale of type APIResponse which will store objects(key value pair data)

let response:APIResponse= {     
    statusCode:200,
    body:'{user:Admin}'
};

// In above example, response variable is of type APIResponse 
// so we have to declare only those keys which are there in APIResponse interface

console.log( "Status: "  , response.statusCode );   //  Status:  200
console.log( "Body: "    , response.body       );   //  Body:  {user:Admin}
console.log( "Headers: " , response.headers    );   //  Headers:  undefined  --> cause headers are optional and its not declared in response


// response.statusCode = 400;  //--> we cannot change the value of statusCode as it is readonly and already inilized in response variable
response.body = "{user:Admin , pass:Admin123}";     //--> Here we can change the value of body cause it is not readonly

