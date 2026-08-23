// real QA scenario - Suppose we are doing a login test

// steps:

// openBrowser
// goToLoginPage
// enterCredentials
// clickLogin

//-----------------------------------------------------------------------------------------------------------------------

// Here we are declaring the functions such way that each function will run its next steps
// so basically it needs to callBack function to run after its own execution is done which is basically its main purpose

// so we can set timeout for next step

// openBrowser:
function openBrowser1(nextStep){

    console.log("Chrome Browser opened");

    //setting timeout for callback function
    setTimeout( ()=>nextStep(enterCredentials1) , 1000 );
}

// goToLoginPage:
function goToLoginPage1(nextStep){

    console.log("Login page loaded");
    
    setTimeout( ()=>enterCredentials1(clickLogin1) , 2000 );
}

// enterCredentials:
function enterCredentials1(nextStep){

    console.log("Credentials entered");
    
    setTimeout( ()=>clickLogin1(testFinish1) , 1000 );
}

// clickLogin:
function clickLogin1(nextStep){

    console.log("Click login");
    
    setTimeout( ()=>testFinished1() , 1000 );
}

function testFinish1(){
    console.log("Test Complete!");
}

// Calling the first function:
openBrowser1(goToLoginPage1);

// here we called openBrowser1 and sent goToLoginPage1 function as an argument for its parameter 'nextStep'
// now nextStep is being called under setTimeout which basically means goToLoginPage1 is being called
// now goToLoginPage1 require a parameter called nextStep 
// so we sent enterCredentials1 as a argument for nextStep parameter of function goToLoginPage1
// and so on we will call next functions as a step for out test

//-----------------------------------------------------------------------------------------------------------------------

// using callBack hell:

// callback hell means we will declare the functions for our steps and will keep one parameter for each function to be used
// as callBack function

// now in above functions declared each function knows the next step to call
// but in callback hello we will send te actual function and under that function we will call the another function which should
// be out next step according to the scenario

// steps:

// openBrowser
// goToLoginPage
// enterCredentials
// clickLogin

// declaring the functions for each steps with one parameter for each function which will store a function and that function will
// get call under a setTimeout function:

// openBrowser:
function openBrowser(callBack){

    console.log("Chrome Browser opened");

    //setting timeout for callback function
    setTimeout( ()=>callBack() , 1000 );
}

// goToLoginPage:
function goToLoginPage(callback){

    console.log("Login page loaded");
    
    setTimeout( ()=>callback() , 2000 );
}

// enterCredentials:
function enterCredentials(callback){

    console.log("Credentials entered");
    
    setTimeout( ()=>callback() , 1000 );
}

// clickLogin:
function clickLogin(callback){

    console.log("Click login");
    
    setTimeout( ()=>callback() , 1000 );

}

// calling using callBack hell
// now we need to call these functions according to the steps

// THIS IS CALLBACK HELL 👇
openBrowser(function () {
    goToLoginPage(function () {
        enterCredentials(function () {
            clickLogin(function () {
                console.log("Test Complete!");
            });
        });
    });
});

// so in above code we are first calling the function openBrowser which needs a parameter and that parameter must be a function
// so in above code we declared the function while calling the openBrowser function, see e.g below to visualize it better

openBrowser(function (){
    // any code for this anonymous function can be written here
})

// so we sent this anonymous function as an argument for callBack parameter of openBrowser

// and this function is later calling another function i.e  goToLoginPage function 

openBrowser(function (){
    goToLoginPage();
});

// now above function is actually first calling the openBrowser function to execute and then sending the function to callBack parameter

// when callBack function got called at line 90 then this callback function internally calling goToLoginPage function which will 
// get called next and so on other functions are given under a function for callback to call