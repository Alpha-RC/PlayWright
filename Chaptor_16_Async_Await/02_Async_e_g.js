function getToken(){

    // suppose here is the code to generate token and once token generate successfully
    // lets suppose "ahgs6ssh-shfdvba-678tsrt-sgdghs76" this is a token which got generated now this function need to 
    // return this token so we will use Promise.resolve to send this token like below

    return Promise.resolve("ahgs6ssh-shfdvba-678tsrt-sgdghs76");
}
// lets suppose pre-condition is to have a access-token which will basically gives permission to perform further actions
// now this token we can get from above getToken() function

// in order to perform next action we will create a async function like below and inside it we will wait for getToken function 
// to return the access-token
async function run() {
    
    // getting token from getToken() function first
    let token = await getToken(); // calling the getToken function and using await function to wait till it returns the token.
    console.log("Access-Token : " , token);

    // suppose here is you code for next action then before this we need to wait for the access token like above 
}

// now we just need to call run() function 

run(); // output: Access-Token :  ahgs6ssh-shfdvba-678tsrt-sgdghs76

