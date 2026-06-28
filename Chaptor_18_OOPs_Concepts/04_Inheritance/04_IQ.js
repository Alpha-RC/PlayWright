class BaseTest{
    setUp(){
        console.log("Base: Open Browser");
    }

    tearDown(){
        console.log("Base: Close Browser");
    }
}

class UITest extends BaseTest{

    setUp(){
        super.setUp();
        console.log("UI: Open Browser");
    }

    tearDown(){
        console.log("UI: Close Browser");
        super.tearDown();
    }
}

const test = new UITest();

test.setUp();

/*

Base: Open Browser
UI: Open Browser

*/

test.tearDown();

/*

UI: Close Browser
Base: Close Browser

*/