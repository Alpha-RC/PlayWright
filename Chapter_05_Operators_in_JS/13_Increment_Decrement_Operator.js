//===========================================================================================================================

//  -----------------
// | Pre-increment:  |
//  -----------------

let a = 10;

// ++a --> this is pre-increment: here value of a will first increase whenver it used anywhere
// so if we try to print this value then it will print the increased value.

console.log(`original value of variable a is: ${a}`);
console.log(`value of varibale at pre-increment: ${++a}`); // output: 11

//===========================================================================================================================


console.log("\n");


//===========================================================================================================================

//  ------------------
// | Post-increment:  |
//  ------------------

// c++ --> this is post-increment: here value of the varibale 'c' will be increased later
// so if we try to print this value then first its original value will get print and then increment will happen

let c = 10;
console.log(`Original value of variable c is: ${c}`);
console.log(`Value of varibale c at post-increment: ${c++}`);  // output: 10

// now if we try to print the value of c then it will be increased value:
console.log(`Value of variable after post-increment: ${c}`);

//===========================================================================================================================


// interview questions:

let d = 34;

let result = d++;

console.log(result); // output: 34
console.log(d);      // output: 35


let e = 10;

console.log(++e + e); // here ++e means it will increase the value first so it become 11 and then + e, 
                      // now value of e after ++e became 11, so now its 11+11, so output: 22

console.log(e); // here value of 'e' will become 11.


let f = 10;

console.log(f++ + ++f); // Here at f++ value will be considered as original value i.e. 10 cause its post-increment
                        // now value of 'f' become 11
                        // after addition ++f means pre-increment so value of 'f' will become 12 
                        // now calculation becomes: 10 + 12: 22
console.log(f);


let g = 10;
console.log(++g + ++g); //output: 23
// expression/calculation: 11 + 12

// 11 is because its pre-increment so it will be 11 after addition, again it is pre-increment then it will again incresed the value to 12
console.log(g);

//==========================================================================================================================================

// 2. decrement:


let h = 5; 
console.log(h++ + ++h - --h + h-- + ++h); 
console.log(h);

// solution:
console.log(5   +   7 -   6 + 6   + 6  );