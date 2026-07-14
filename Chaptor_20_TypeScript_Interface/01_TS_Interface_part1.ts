interface TestCase{

    id:number;
    name: string;
    status: string
    duration: number;
   
}

// if we create a variable which holds objects of TestCase interface
// then we need to create a variable of type TestCase which means variables data type will be of TestCase which is a interface

// in this type of variable we need to specify each and every variable which TestCase interface holds
// if we do not mention a sigle variable then it will throw error
let test1:TestCase = {
    id: 1,
    name: "Login with valid credentials",
    status: "Passed",
    duration: 1500
};

console.log("TC-" + test1.id + ": " + test1.name + " → " + test1.status);    // TC-1: Login with valid credentials → Passed

// we can create n number of objects for this interface
let test2:TestCase = {
    id: 2,
    name: "Login with in-valid password",
    status: "Fail",
    duration: 3200
};

console.log("TC-" + test2.id + ": " + test2.name + " → " + test2.status);    // TC-2: Login with in-valid password → Fail

// let test3:TestCase = {
//     id: 3,
//     name: "Login with valid password",
//     status: "Fail"
// };

// test3 is not a valid object of TestCase interface cause it misses one variable of interface so it will give compile time error as

// 'test3' is declared but its value is never read. ts(6133)
// Property 'duration' is missing in type '{ id: number; name: string; status: string; }' but required in type 'TestCase'. ts(2741)