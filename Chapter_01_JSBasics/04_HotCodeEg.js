function add(a,b)
{
    return a+b;
}

let result;
for (let i = 0; i < 1000; i++)
{
    result = add(i , i+1);
}

console.log("Result after 1000 iterations is: " + result);

// Above code is called as "Hot Code" as it is executing a lot of lines of code 
// in a loop, which is not good for performance.