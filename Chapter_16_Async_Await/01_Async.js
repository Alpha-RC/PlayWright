
// async function:
async function testAPI(){

    // try catch finally block:
    try{
        let result = await Promise.reject("503 reject");
    }
    catch(error){
        console.log("Error: ", error);
    }
    finally{
        console.log("Clean up");
    }
}

// calling above async function:
testAPI(); 
/*

output: 
Error:  503 reject
Clean up

*/