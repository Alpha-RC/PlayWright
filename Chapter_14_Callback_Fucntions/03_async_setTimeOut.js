
console.log("Test 1: Started");

setTimeout( function() {
    console.log("Test 2: API response reveived");
} , 2000);

// Here we are calling a predefined function in JS i.e. setTimeout() which require 2 parameters
// first is a function and second is miliseconds(number)

// setTimeout basically call the function (first parameter) after milli seconds(second parameter value) passed

// we can also use arrow function as an argument in setTimeout function call

setTimeout( ()=> console.log("Test 3: Response is 200 OK") , 3000);
// here timeout of 3000 milli sec is set for arrow function to get execute 

console.log("Test 3: Moving to next test");

/*

output of above code will be like:

Test 1: Started
Test 3: Moving to next test
Test 2: API response reveived
Test 3: Response is 200 OK

here console.log statement got executed first and then the other 2 setTimeout fuctions

this is called asynchronous execution/concept - means when code execution started then it will wait for those 2 setTimeout calls
and it will immediatley move to the next line to execute so thats why console.log statements got executed first

*/