let config = {};

config.browser  = "Chrome";
config.timeout  = 3000;
config.testName = "Login Test";

console.log(config); // output: { browser: 'Chrome', timeout: 3000, testName: 'Login Test' }

if(config.browser === "chrome"){
    console.log("Execute TC");
}

// Deleting value from object using key:
delete config.browser;

console.log(config); // output: { timeout: 3000, testName: 'Login Test' }