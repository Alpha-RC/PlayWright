// suppose we have a function which taken one argument of type string and returns that string

function getString(name: string):string{
    return name;
}

// now if we want to call this function we need to send the parameters as string only and nother type of 
// parameter can be sent as it only asks for string type of data

getString("Rohit");

// now if we want to sent parameter as any other type then w'll get error
// getString(123); //--> Argument of type 'number' is not assignable to parameter of type 'string'.

// so with the help of generic function we can receive any type of argument.

function getFirstResult<T>(result: T[]):T{
    return result[0]!;
}

// in above function 
// 1. <T> means function can return any type of data 
// 2. T[] result is an argument whichi is of type array now here T means it can be any type of array
// 3. result[0] will return the first index value of the array which is received
// 4. result[0]!, here "!" is called non-null assertion operator, it tells compiler that this value is not null or
//    undefined -stop warning me

// now we can call this function like below

let firstCode = getFirstResult<number>( [200, 100, 300] );
//                               |
//                          return type

let firstTest = getFirstResult<string>( ["Login" , "SignUp" , "Cart"] );


console.log("First Code: ",firstCode);
console.log("First Test: ",firstTest);