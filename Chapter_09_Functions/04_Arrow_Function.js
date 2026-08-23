// Arrow function (ES6 - Called as Echma Script - Alternate name of JS - 6th version of JS)

const greet1 = function(name1){
    return `hello ${name1}!`;
};

// to call above function and store its result
let r = greet1("Rohit");
console.log(r); // output: hello Rohit!

// now arrow function is like the short version of above function with different syntax

//  arrow function e.g:
const greet2 = (name1) => `Hello ${name1}`;

// so here arrow functions will remove function keyword, and keep only parameters of function
// instead for curly brackets arrow function use '=>'
// and after '=>' comes execution part 
// in this case `Hello ${name1}` will be executed and retur the result of that expression/condition.

// calling above arrow function is same as function expression or normal function
let r1 = greet2("Rohit!!");
console.log(r1); // output: Hello Rohit!! 


// e.g 1:
const doubleIt = n => n*2;
console.log(doubleIt(10)); // output: 20

// e.g 2:
const printIt = name => console.log(`Hello ${name}!!!`);
printIt("Pramod"); // output: Hello Pramod!!!


// e.g 3: 
const print1 = ()=> console.log("Printing in console"); // this function is not asking for any parameter but just printing the log in
                                                        // console.                                                        
print1(); // output: Printing in console

// e.g 4:

//  if we have multiple lines for a function then we need to use curly braces and also need to use return keyword if function has to
// return something

const greet3 = name => {
    const msg = 'Hi ' + name;
    return msg;
}

console.log(greet3("Rohit")); // instead of storing we can print the return value // output: Hi Rohit


