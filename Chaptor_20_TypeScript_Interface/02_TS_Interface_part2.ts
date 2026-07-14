interface APIResponse{
    body:string;
    headers?:object;
    responseTime?:number;
}

// lets suppuse above interface where headers and responseTime can be an optional variables measn their value can be option in object

// creating a variable of type APIResponse interface
let response1:APIResponse = {
    body: "json1"
}

// now above declaration of reponse variable will not throw error cause headers and responseTime variables are optional in APIResponse
// interface.


// if we need optional variables as well then we can add them as usual
let response2:APIResponse = {
    body: "json2",
    headers: {},
    responseTime:400
}