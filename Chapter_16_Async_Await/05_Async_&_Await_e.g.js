// suppose step 2 is depend on step 1's result , then need to run them sequentially

// step1 --> step2

// Suppose below function retunrs a promise

function apiCall(name)
{    
    return new Promise( (resolve)=> {

        setTimeout( ()=> resolve(name), 2000);
    
    });
}

// so if we use .then on above function it will be look like:

// apiCall("Login Test")
//     .then( r=>{
//         console.log(r);
//         return apiCall("Dashboard");
//     })
//     .then( r=>{
//         console.log(r);
//         return apiCall("Report");
//     })
//     .then( r=>{
//         console.log(r);
//     })
//     .catch( e=> console.log(e) )
//     .finally( ()=>console.log("Test Finished") );

// so now if we check above method of .then and .catch, we are actually calling next step one by one
// so at first apiCall("Login Test") will be called and Login Test value will be stored in name parameter
// as apiCall is retuning the promise we used .then method on function while calling and as then function takes the resolved 
// promise's values we printed it
// now again .then function is actually returning the promise which apiCall is returning 
// so when we write return apiCall("Dashboard");  we first called the function apiCall("Dashboard") and then return it value
// which is a promise in this case
// as it is a promise we again applied .then and captured the value

// at end we use .catch so if promise is rejected then it will catch the msg from promise.reject() method


// using await function

// note: we need to use await function/method under a async function only

// note: await function always return or checks from resolved promise/ fulfilled promise
// if it returns reject promise we need to handle it with try catch block

// Calling function sequencially:

async function seqTest() {
    
    console.log("Starting test");
    let startTime = Date.now();
    // console.log(startTime);

    let r1 = await apiCall("Login");
    console.log(r1);

    let r2 = await apiCall("Dashboard");
    console.log(r2);

    let r3 = await apiCall("Report");
    console.log(r3);

    console.log("Time: ~" + (Date.now - startTime) +"ms");
}

seqTest();


// in above case " let r1 = await apiCall("Login"); " is noting but --> apiCall("Login").then( r => console.log(r) );
// await also store result in r1 when it gets a resolved promise

// await apiCall("Login");  await is basically means "wait until the Promise returned by apiCall("Login") resolves or rejects."

// parallel execution

async function parallelTest(){
    
    let [r1, r2, r3] = await Promise.all([
        apiCall("Auth Service"),
        apiCall("User account creation"),
        apiCall("Support Page API")
    ])
    
    console.log(r1);
    console.log(r2);
    console.log(r3);
}

// parallelTest();
