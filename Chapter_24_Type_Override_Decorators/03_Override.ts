class BaseTest{
    
    setUp():void{
        console.log("[Base] Open browser");
    }

    tearDown():void{
        console.log("[Base] Close browser");
    }
}

class LoginTest extends BaseTest{

    // here we are overriding the setUp method of BaseTest class using override keyword.
    override setUp():void{
        console.log("[Base] Open browser");
        console.log("[Base] Maximize");

    }

}

class APITest extends BaseTest{

    override setUp():void{
        console.log("[APITest] No Browser!");
    }
}

let logintest = new LoginTest();
logintest.setUp();  //--> [Base] Open browser
                    //    [Base] Maximize

let apitest = new APITest();
apitest.setUp();    //--> [APITest] No Browser!
