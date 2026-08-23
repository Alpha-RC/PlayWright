abstract class BaseTest{

    protected testName: string;

    constructor(testName: string){
        this.testName = testName;
    }

    abstract setUp():void;
    abstract execute():void;
    abstract teardown():void;
    abstract loan():void;

    // we can have implemented methods/functions in abstract class
    implementedMethod():void{
        console.log("this method is implemented already");
    }
}

class UITest extends BaseTest{

    // here we need to implement all the abstarct methods of BaseTest abstract class
    // we cannot leave any of the methods which are abstarct  

    setUp(): void {
        console.log("Setup: Luanch Browser");
    }

    execute(): void {
        console.log("Execute: click buttons, fill forms");
    }

    teardown(): void {
        console.log("Teardown: close browser");
    }

    loan(): void {
        console.log("Give loan");
    }
}