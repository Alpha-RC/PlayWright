//====================================================================================================================================

let rajkumar_age = 18;

// syntax of ternanry operator: condition ? if_condition_true : else

let will_raj_go_to_goa = rajkumar_age>18? "rajKumar will go" : "No goa";

// so in above example rajkumar_goa > 10 is a condition
// ? is to determine whether the condition is true or not
// if condition is true then it will store "rajKumar will go" string in varibale 'will_raj_go_to_goa'
// and if condition is false then "no goa" will be stored
// : is to separate the results Note: results can be of any data type

console.log(will_raj_go_to_goa);

//====================================================================================================================================

// e.g 1:
let expectedStatusCode = 200
let actualStatusCode = 200;

let APIResult = actualStatusCode === expectedStatusCode ? "Pass" : "fail";

console.log(APIResult);

//====================================================================================================================================

// e.g 2:

let env = "internalServer";

let baseURL = env === "Prod" ? "https://prod.server.com" : "https://Internal_QA_Server.com";

console.log(baseURL);

//====================================================================================================================================

// e.g 3:

let isCI = true;

let browserMode = isCI ? "headless" : "headed";

console.log("Launching browser in " + browserMode + " mode");

//====================================================================================================================================

//e.g 4:

let responseTime = 850;//ms
let sla = 1000; //ms

let slaStatus = responseTime <= sla ? "Within SLA" : "SLA Breached";
console.log(slaStatus);

//====================================================================================================================================

//e.g 5:

let condition = true;

let isSKmale = condition ? true : false ; 

console.log(isSKmale);

//====================================================================================================================================

//      ===========================
//     | Nested Ternanry operator |
//      ===========================

//====================================================================================================================================

// e.g 1:
let age = 45;

// without nested ternary operator:
let isEligibleTo = age > 18 ? "go to goa" : "No goa" ;

// in above example we can add a nested turnary operator at first true condition like below

let eligibilty = (age > 18) ? (age > 26 ? "can drink": "cannot drink") : "No goa";
//                    ^       |______________________________________|   |_______|  
//                    |                         |                            |
//              First condition  ---->  If condition true            if condition false
//                                              |
//                                              |
//                                              |
//                                             \_/
//                            (age > 26  ?  "can drink" :  "cannot drink" )        
//                                 |             |                |
//                                 |             |                |
//                           nested condition    |                |
//                                     if nested condition true   |
//                                                      if nested condition true
// 

console.log(eligibilty);

//====================================================================================================================================

// e.g 2:
let statusCode = 404;

let category = (statusCode < 300) ? "success" : statusCode < 400 ? "Redirect" : statusCode < 500 ? "client error" : "server error";

console.log(`Status ${statusCode} : ${category}`);

//====================================================================================================================================

// e.g 3: finding greatest number between 2 numbers:

let a = 10 , b =100;

let gretestNumber1 = a > b ? `${a}` : `${b}`;

console.log(`greatest number between ${a} & ${b} is: ${gretestNumber1}`);


//====================================================================================================================================

// e.g 4: Greatest number between 3 numbers

let c = 1000 ; d = 20 , e = 10;

let gretestNumber2 = (c > d) ?  `${c}` : (d > e) ? `${d}` : (e > c) ? `${e}` : `${c}`;

console.log(`greatest number between ${c} , ${d} & ${e} is:  ${gretestNumber2}`);

//====================================================================================================================================
