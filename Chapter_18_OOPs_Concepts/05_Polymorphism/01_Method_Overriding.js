class BaseTest {
    setUp() {
        console.log("Base: Open Browser");
    }
}

class APITest extends BaseTest {
    setUp() {   //--> this is method overriding, here APITest is extending BaseTest and due to that setUp can be re-implement in APITest
        console.log("APITest: Open Browser");
    }
}

let test = new APITest();
test.setUp();   // APITest: Open Browser