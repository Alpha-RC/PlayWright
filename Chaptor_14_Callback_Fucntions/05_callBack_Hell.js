// real QA scenario - Suppose we are doing a login test

// steps:

// openBrowser
// goToLoginPage
// enterCredentials
// clickLogin

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

//---------------------------------------------------------------------------------------------------------------------------------

// real QA scenario - Suppose we are doing a login test

// steps:

// openBrowser
// goToLoginPage
// enterCredentials
// clickLogin

// openBrowser:
function openBrowser1(goToLoginPage1){

    console.log("Chrome Browser opened");

    //setting timeout for callback function
    setTimeout( ()=>goToLoginPage1(enterCredentials1) , 1000 );
}

// goToLoginPage:
function goToLoginPage1(enterCredentials1){

    console.log("Login page loaded");
    
    setTimeout( ()=>enterCredentials1(clickLogin1) , 2000 );
}

// enterCredentials:
function enterCredentials1(clickLogin1){

    console.log("Credentials entered");
    
    setTimeout( ()=>clickLogin1(testFinish1) , 1000 );
}

// clickLogin:
function clickLogin1(testFinished1){

    console.log("Click login");
    
    setTimeout( ()=>testFinished1() , 1000 );
}

function testFinish1(){
    console.log("Test Complete!");
}

openBrowser1(goToLoginPage1);