interface TestHook{

    (testName:string):void;

}
// so abve interface is kind of a rule which says that whoever uses this interface as type for any variable
// then that variable must posses the property of above interface

// now the property of this interface is that is contains one function which requires testName as string and 
// should return void

// now suppose if a variable is possesing the type of this interface then that variable should store a function which will
// require a testName variable and should return void like below 2 variables:


let beforeHook:TestHook = function (testName:string):void{
    console.log("Before Setting up" + testName);
}

let afterHook: TestHook = (testName:String):void => console.log("After setting up" + testName);

// now in order to know how we can use these hooks in real time testcases lets consider one interface like below

interface TestCase{

    id:number;
    name: string;
    status: string
    duration: number;

}

// below is the variable test1 who is of type TestCase which is an interface. but before starting with the TC we can 
// call beforeHook function which basically doing some pre-requisite for test1 to execute successfully 

// suppose we need to login to the server first before every TC to execute
// then we can consider the beforeHook function to login to system so basically we should have logic implemented
// for beforeHook that it will login the system
// and after TC executed we can call afterHook to logout

beforeHook("Login Test");

let test1:TestCase = {
    id: 1,
    name: "Login with valid credentials",
    status: "Passed",
    duration: 1500
};

console.log("TC-" + test1.id + ": " + test1.name + " → " + test1.status);

afterHook("Logout Test");

// now this way we can use these beforeHook and afterHook for every cases instead re-writing them for each case separately