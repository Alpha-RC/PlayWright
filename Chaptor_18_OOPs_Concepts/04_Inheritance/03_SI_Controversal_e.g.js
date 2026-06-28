class BaseTest{
    
    setUp(){
        console.log("Base: Open Browser");
    }
}

class APITest extends BaseTest{

    setUp(){
        console.log("APITest: Open Browser");
    }
}

let test = new APITest();
test.setUp();   //--> this will invoke steUp method of APITest class