//-------------------------------------------------------------------------------------------------------------------------------------------

// Parent class:
class TestCase{

    execute(){
        console.log("Running generic Test");
    }
}

//-------------------------------------------------------------------------------------------------------------------------------------------

// child class 1:
class unitTest extends TestCase{
    execute(){
        console.log("Running unit test - checking one Function");
    }
}

//-------------------------------------------------------------------------------------------------------------------------------------------

// child class 2:
class APITest extends TestCase{
    execute(){
        console.log("Runung API Test - sending HTTP Request");
    }
}

//-------------------------------------------------------------------------------------------------------------------------------------------

// child class 3:
class E2ETest extends TestCase{
    execute(){
        console.log("Running E2E test - Opening browser");
    }
}

//-------------------------------------------------------------------------------------------------------------------------------------------

// creating objects of above child classes
let tests = [new unitTest() , new APITest(), new E2ETest()];  // here we are storing object of each child classes as an array

// we can access each object using for each loop

tests.forEach( test=> test.execute() );

/* Output will be

Running unit test - checking one Function
Runung API Test - sending HTTP Request
Running E2E test - Opening browser

*/

//-------------------------------------------------------------------------------------------------------------------------------------------


// e.g. 2:

// lets suppose 1 father have 2 sons, so they can acquire the all the properties of their father

class father{

}

class son1 extends father{

}

class son2 extends father{

}