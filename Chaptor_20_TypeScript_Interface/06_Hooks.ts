interface TestHook{

    (testName:string):void;
    
}

let beforeHook:TestHook = function (testName:string):void{
    console.log("Before Setting up" + testName);
}