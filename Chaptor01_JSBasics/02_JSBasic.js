let a = 10;
console.log("Value of a is: " + a);
// Above code dosen't need optimization

// Below code needs to be optimized as it is printing 10000 lines in the console 
// which is not good for performance, so we can optimize it by printing only the 
// first 10 lines and then print a message that there are more lines to print.

function print()
{
    console.log("Hello");
}


for (let i = 0; i < 10000; i++) 
{
    // console.log("Value of i is: " + i);
    print();
}

// Above code is called as "Hot Code" as it is executing a lot of lines of code 
// in a loop, which is not good for performance.

// Here javascript engine will optimize the code by using "Just In Time Compilation" (JIT)
// which will compile the code at runtime and execute it, which will improve the performance of the code.

// Also there is a compiler called turbofan which is used by javascript engine to optimize the code, 
// it will optimize the code by using various techniques like inlining, dead code elimination, etc. 
// which will improve the performance of the code.

// To get the byte code in terminal:
// Need to run below command in the terminal:
// node --print-bytecode .\Chaptor01_JSBasics\02_JSBasic.js