// Primitive types:
let age: number = 30;
let pi: number = 3.14;
let distance_to_moon: number = 398765434567;
let count:number = 42;
console.log("Count:", count);


// null undefined any unknown:
let nothing: null = null;
let notDefined: undefined = undefined;
// Any (avoid when possible)
let anything:any = "hello";
// Unknown (safer than any)
let unknown:unknown = "hello";

// Arrays:
let numbers:number[] = [1, 2, 3];
let names:Array<string> = ["John", "Jane"];

// Booelan:
let isActive: boolean = true;
console.log("Is Active:", isActive);

// Strings:
let name: string = "John";
console.log(name);

let message1:string = "Hello, TypeScript!";
console.log("Message:", message1);


//----------------------------------------------------------------------------------------

let unknown1:unknown;   //--> here we dont know what can be the type of unknown1 variable

unknown1 = "hello";     //--> here we assined value to unknown1 which is a string so it is now a string type of varibale and we can compare 
                        //    it like below 

// we can compare the unknown type of variable:
if (typeof unknown1 === "string") {
    console.log("Hi");
}

// Function annotations
function greet(name:string): string {
    return `Hello, ${name}!`;
}

// Arrow function annotations
const multiply = (a: number, b: number):number => a * b;

// Object annotations
let user:{ name: string; age: number} = {
    name: "John",
    age: 30
};