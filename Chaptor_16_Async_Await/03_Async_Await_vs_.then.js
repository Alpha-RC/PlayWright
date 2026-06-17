function openBrowser(){
    return new Promise(resolve => resolve("Browser Opened"));
}

function goToLoginPage(){
    return new Promise(resolve => resolve("Login Page loaded"));
}

function enterCredentials(){
    return new Promise(resolve => resolve("Credentilas entered"));
}

function clickLogin(){
    return new Promise(resolve => resolve("Logged in successfully"));
}

// now as above functions are returning the promises, we use '.then' or '.catch' to get the value it is returing through
// resolve and reject functions like below:

// openBrowser().then(msg => {
//     console.log(msg);
// });

// like above we can capture the value but also we can call then next step by returning the promise through .then function
// so we need to call goToLoginPage function which will return a promise

// openBrowser().then(msg => {
//     console.log(msg);
//     return goToLoginPage(); //--> here we called goToLoginPage() function which will return a promise
//                             //    now as it will return the promise .then function will return that promise
//                             //    so we can use .then again and call the next function which return another promise
//                             //    so this is how we can call each step sequencially.  
// }).then(msg =>{
//     console.log(msg);
//     return enterCredentials();
// }).then(msg => {
//     console.log(msg);
//     return clickLogin();
// }).then(msg => {
//     console.log(msg);
// }).catch(error => console.log(error)).finally(()=>console.log("Test finished"));


// now above code is not redable properly and also hard to understand or to debug so we can use aysnc await for above functons
// like below

// we will create a asyc function like below

async function runtest() {

    let step1 = await openBrowser();
    console.log("Step 1:" ,step1);

    let step2 = await goToLoginPage();
    console.log("Step 2:" ,step2);

    let step3 = await enterCredentials();
    console.log("Step 3:" ,step3);
    
    let step4 = await clickLogin();
    console.log("Step 4:" ,step4);
}

runtest();

/*
output:

Step 1: Browser Opened
Step 2: Login Page loaded
Step 3: Credentilas entered
Step 4: Logged in successfully

*/