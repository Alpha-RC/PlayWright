let firstName = "Rohit";
let fullName = `Hi ${firstName} Chillal`;

console.log(fullName);  


// real time example

const env = 'staging';
const userId = '1234';
const appUrl = `https://api-${env}.tekion.com/users/${userId}`;

console.log(appUrl);

const username = "pramod";
const role = "admin";

const payload = `{
    "user" : "${username}",
    "role" : "${role}",
    "userId": "${userId}"
}`;

console.log("payload: " + payload);

//${varibale_name}  - this is called a template