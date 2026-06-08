// *****
// ****
// ***
// **
// *


let n = 5;

for (let i = n; i > 0; i--)
{
    for (let j = i; j > 0 ; j--) 
    {
        process.stdout.write("*");
    }
    console.log();
}


//   *  
//  ***
// *****

let rows = 3;

for (let i = 1; i <= rows; i++) 
{
    // Print spaces
    for (let j = 1; j <= rows - i; j++) {
        process.stdout.write(" ");
    }

    // Print stars
    for (let k = 1; k <= (2 * i - 1); k++) {
        process.stdout.write("*");
    }

    console.log();
}
