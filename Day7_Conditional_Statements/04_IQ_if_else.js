// Single if:

if (true) {
    console.log("This is single if statment");
}

// true condition exmaples:

if("hello") console.log("String condition is always true!");    // "hello" is true
if(44)      console.log("Number is truthy!");                   // 44 is true condition by default
if({})      console.log("Empty object is truthy!");             // {} is true
if([])      console.log("Empty Array is truthy!")               // [] is true


// false condition examples:

if("")          console.log("ABC")  // --> this will not print 'ABC' cause "" is false
if(null)        console.log("XYZ")  // --> this will not print 'XYZ' cause null is false
if(undefined)   console.log("ABC")  // --> this will not print 'ABC' cause undefined is false
if(NaN)         console.log("XYZ")  // --> this will not print 'XYZ' cause NaN is flase conditon
if(0)           console.log("ABC")  // --> this will not print 'ABC' cause 0 is false conditon


// undefined example:

let name = undefined;

if(name){
    console.log(`Hi ${name}`);
}
else{
    console.log("name is not defined");
}


let x = 10;
if(x > 5){
    console.log("X is big");
}


// even or odd example:

let y = 20;

if( y%2 === 0){
    console.log(`${y} is even`)
}
else{
    console.log(`${y} is odd`);
}

// print the grades based on marks:

let marks = 67;

if(marks >= 90){
    console.log("Grade: A");
}
else if(marks >= 80){
    console.log("Grade: B");
}
else if(marks >= 70){
    console.log("Grade: C");
}
else if(marks >= 60){
    console.log("Grade: D");
}
else{
    console.log("Failed");
}


// check if year is leap year

let year = 2025;

if((year%4 === 0 && year%100 !== 0) || year%400 === 0){
    console.log(`${year} is leap year`);
}
else{
    console.log(`${year} is not a leap year`);
}