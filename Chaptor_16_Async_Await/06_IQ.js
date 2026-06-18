//--------------------------------------------------------------------

async function sayHello() {
    return "Hello QA!";
}

console.log(sayHello()); // Promise { 'Hello QA!' }

sayHello().then(r => console.log(r)); // Hello QA!

//--------------------------------------------------------------------

async function getStatus() {
    
    let status = await Promise.resolve(200);
    console.log("Status Code: " , status);
}

getStatus(); // Status Code:  200

// here await Promise.resolve(200); is actually:
let status1 = Promise.resolve(200);
console.log(status1); // Promise { 200 }

//--------------------------------------------------------------------


async function testFlow() {
    
    let step1 = await Promise.resolve("Opened Browser");
    console.log(step1);

    let step2 = await Promise.resolve("Clicked login");
    console.log(step2);

    let step3 = await Promise.resolve("Verified Dashboard");
    console.log(step3);

    let step4 = await Promise.resolve("Test Finished");
    console.log(step4);
}

testFlow();

// Above flow is sequential flow


