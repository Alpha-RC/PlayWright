// Function annotations
function greet1(name:string): string {
    return `Hello, ${name}!`;
}

// Arrow function annotations
const multiply = (a: number, b: number):number => a * b;

// Object annotations
let user:{ name: string; age: number} = {
    name: "John",
    age: 30
};

// below function is returning a void which cannot be used/it is not useful value
function sayHello(msg:string):void{
    console.log(msg);
}

// Function annotations
function greet(name:string):string{
    return `Hello, ${name}!`;
}

// never - function never returns ( possible in case function throws error or define an infinite loop)
function throwError(message:string):never{
    throw new Error(message);
}

function infiniteLoop():never{
    while (true) { }
}