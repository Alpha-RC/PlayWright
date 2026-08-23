// default params means when a functuion have a parameter and if no value sent for that parameter then we can set a default value for it

function retryTestCase (testName, maxRetries, delay){
    console.log(`Retrying ${testName} up to ${maxRetries} times with ${delay}ms delay`)
}

// suppose this function is to retry the test case

// so if we call this function to retry a case then we need to send all the parameters which this function needs like below:
retryTestCase("Login" , 3 , 2000); // now here we sent all the parameters // output: Retrying Login up to 3 times with 2000ms delay

// but suppose you just need to retry the case one time then in this case we have to sent values like retryTestCase("Login" , 1 , 1000)

// but if we set some default values for these parameters like (testName, maxRetries = 1, delay = 1000) then we can just sent tetName and it will
// retry the Test Case one time

function retryTC(testName, maxRetries=1, delay=1000){
    console.log(`Retrying ${testName} up to ${maxRetries} times with ${delay}ms delay`)   
}

// retrying TC
retryTC("Logout"); // here output will be: Retrying Logout up to 1 times with 1000ms delay

// here you can ovrride the vlaues of default parameters as well
// suppose you want to retry TC 5 time now then,

retryTC("E2E Order1" , 5); // output: Retrying E2E Order up to 5 times with 1000ms delay

// suppose you want to retry another test 5 times but with 5000ms delay

retryTC("E2E Order2" , 5 , 5000); // output: Retrying E2E Order2 up to 5 times with 5000ms delay