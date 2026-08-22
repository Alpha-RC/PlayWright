interface TestConfig{

    browser: string,
    headlesss:boolean,
    baseUrl:string,
    timeout?:number,
    retries?:number

}


let ciConfig: TestConfig = {
    
    browser: "Chrome",
    headlesss: true,
    baseUrl: "https://staging.app.com"

}

let localConfig: TestConfig = {

    browser: "Chrome",
    headlesss: false,
    baseUrl: "http:localhost:3000",
    timeout:3000,
    retries: 3
}

console.log("CI:" , ciConfig.browser, "| timeout:" , ciConfig.timeout );
console.log("Local", localConfig.browser, "| timeout", localConfig.timeout);