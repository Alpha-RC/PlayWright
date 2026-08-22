interface calculator{

     add(a:number , b:number):number;
     sub(a:number , b:number):number;
     mul(a:number , b:number):number;
     div(a:number , b:number):number;
}

// in interface we cannot implement anything with normal methods
// methods and variables must be only declared under interface

// we can implement these methods using variable which stores objects
// so we need to create a objects variable of type calculator (Interface)
// Then we can implement the methods declared in interface

// const calc:calculator={};

// in JS we would've written above statement as cost calc = { key: value}; 
// but in TS we just gave it a type which will indicate that this variable is storing objects(key value pair data) in it of 
// type calculator

// below is how we can implement the methods of interface calculator

const calc:calculator = {
    add: (a, b) => a + b,
    sub: (a, b) => a - b,
    mul: (a, b) => a * b,
    div: (a, b) => a / b
}

console.log(calc.add(10,10));