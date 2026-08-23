// Basic async and await function

async function getTestResult() {
    return "Pass"; 

}

// above function is just returning the String but as it is async function it will return this pass string as a promise
console.log(getTestResult());  // here output is: Promise { 'Pass' }

// so while calling it we need to use .then function in order to capture only string, like below

getTestResult().then(result => console.log(result));  // output: Pass