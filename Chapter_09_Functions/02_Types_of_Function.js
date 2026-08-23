//--------------------------------------------------------------------------------------------------------------------------------------

// 1. Basic function: no parameters & no return

function basicFunction(){
    console.log("This is basic function which returns nothing and no arguments reqquired");
}

basicFunction(); // This is calling the function, 
// output of above statement is: This is basic function which returns nothing and no arguments reqquired 
// cause basicFunction function is printing the msg in console


// here if we store this function call in a variable then its value will be undefined cause this fuction is returning nothing to store

let storeFnResult1 = basicFunction(); // here also it will call the function 
                                      // & will print "This is basic function which returns nothing and no arguments reqquired"

console.log(storeFnResult1); // output: undefined

//--------------------------------------------------------------------------------------------------------------------------------------

// 2. asks argument while calling/need parameter while defining and no return type (with parameters , no return):

//defining function:
function greetByName(name){ // here name is parameter which this function needs/asks while calling
    console.log(`Hi ${name}, How are you`);
}

//calling function:
greetByName("Rohit"); // here "Rohit" is an argument which is sent over fuction calling // output: Hi Rohit, How are you

// here also if we try to store this function call then it will store undefined in that variable cause function is returning nothing
let storeFnResult2 = greetByName("Sumit"); // output: Hi Sumit, How are you

console.log(storeFnResult1); // output: undefined

// real time e.g:

function begger(money){
    console.log(`${money}₹, Bghwan tera bhala kare😂`);
}

begger(1000); //output: 1000₹, Bghwan tera bhala kare😂

// but if you want to store anything from begger function
let storeFnResult3 = begger(5000); // output: 5000₹, Bghwan tera bhala kare😂

console.log(storeFnResult3);

//--------------------------------------------------------------------------------------------------------------------------------------

// 3. without parameters, return something

function sayHello(){
    console.log('Hello');
    return "Hi!";
}

let relative = sayHello(); // output: Hello
console.log(relative); // output: Hi

//--------------------------------------------------------------------------------------------------------------------------------------

// 4. with parameters, return something

function sum(a,b){  // a,b are parameters of this function
    console.log(`parameters received are: a=${a} , b=${b}`);
    return a+b;     // this function return a+b result
}

let addition = sum(10,10); // calling function sum and sending 2 argumens of type number which sum function will store in a, b and will
                           // return result of addition of a and b, so we need to store it in a variable

                           // output: parameters received are: a=10 , b=10
console.log(addition);     // output: 20

//--------------------------------------------------------------------------------------------------------------------------------------