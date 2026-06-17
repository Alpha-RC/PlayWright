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
