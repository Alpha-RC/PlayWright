let testMatrix = [
    ["login", "pass", 200],
    ["checkout", "fail", 404],
    ["search", "pass", 180]
];

// How many test cases have we executed? 
// How many test cases are passed? 
// What is the status code that you have got for the fail? 

// Accessing and Printing the values of testMatrix array

// 1. Using for loop:

for (let i = 0; i < testMatrix.length; i++) 
{
    for (let j = 0; j < testMatrix[i].length; j++) 
    {
        console.log(testMatrix[i][j]);
    }
    console.log();
}

console.log("-------------------------------------");

// 2. using for of loop:

for (let rows of testMatrix) 
{
    for (let cells of rows) 
    {
        process.stdout.write(cells + " ")
    }
    console.log();
}

console.log("-------------------------------------");

// 3. using forEach method

testMatrix.forEach( row => {
    row.forEach( cell => process.stdout.write(cell + " "));
    console.log();
});