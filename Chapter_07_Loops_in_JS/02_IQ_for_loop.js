// e.g 1:

for (let pramod = 0; pramod > 1; pramod++)
{
    console.log(pramod);
}

/*
This code will not run because the loop condition is false from the beginning.

How for loop works: for (initialization; condition; increment/decrement)

So here:

let pramod = 0 → starts with 0
pramod > 1 → checks condition

Now it checks:

0 > 1

This is false.

Since condition is false immediately:

loop body will not run pramod++ will also not execute

The increment part runs only after one successful iteration.
*/


// e.g 2:

// for (let pramod = 0; ; pramod++) {
//     console.log(pramod);
// }

/*
This loop will run infinitely.

for (let pramod = 0; ; pramod++) {
    console.log(pramod);
}
Why?

A for loop has 3 parts:

for (initialization; condition; increment)

Your loop becomes:

for (let pramod = 0; ; pramod++)
let pramod = 0 → runs once
condition is missing
pramod++ → runs after every iteration

When the condition is omitted, JavaScript treats it as:

true

So internally it behaves like:

for (let pramod = 0; true; pramod++)

Output:

0
1
2
3
4
...

It will continue until:

you stop the program manually,
browser/tab crashes,
or memory/console limit is reached.
*/

// e.g 3:

for (let soumya = 0; soumya < 18; soumya++) {
    
    if(soumya > 15){
        console.log("soumya will get iphone");
    }
    else{
        console.log("Soumya will get a doll");
    }
}

// e.g 4:

for(let i = 0 ; i<1 ; i++){
    console.log(i);
}