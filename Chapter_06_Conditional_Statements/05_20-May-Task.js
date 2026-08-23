/*
Question 1 — HTTP Status Code Categorizer:
Problem: Given an HTTP status code, print which category it belongs to.

200–299 → Success
300–399 → Redirection
400–499 → Client Error
500–599 → Server Error

Anything else → Invalid

Sample Input/Output:

Input: 404
Output: Client Error

Input: 200
Output: Success
*/

let httpStatusCode = 200;

if(httpStatusCode >= 200 && httpStatusCode <=299){
    console.log(`${httpStatusCode} - Success`);
}
else if(httpStatusCode >= 300 && httpStatusCode <=399){
    console.log(`${httpStatusCode} - Redirection`)
}
else if(httpStatusCode >= 400 && httpStatusCode <=499){
    console.log(`${httpStatusCode} - Client Error`)
}
else if(httpStatusCode >= 500 && httpStatusCode <= 599){
    console.log(`${httpStatusCode} - Server error`);
}
else{
    console.log("Invalid httpStatusCode");
}


/*
Question 2 — Test Case Pass/Fail Verdict

Problem: Compare actual result with expected result and print test verdict.

Sample Input/Output:

expected = "Login Successful"
actual   = "Login Successful"
Output: ✅ Test Passed

expected = "Login Successful"
actual   = "Invalid Credentials"
Output: ❌ Test Failed — Expected: Login Successful, Got: Invalid Credentials

*/

let expected = "Login Successful"
let actual   = "Login Successful"
// let actual   = "Invalid Credentials"

if(actual === expected){
    console.log("✅ Test Passed");
}
else{
    console.log(`❌ Test failed - Expected: ${expected}, Got: ${actual}`);
}


/*
Question 3 — Bug Severity Classifier

Problem: Given a bug's impact score (1–10), classify the severity.

9–10 → Critical (block release)
7–8 → High
4–6 → Medium
1–3 → Low
Anything else → Invalid score

Sample Input/Output:

Input: 9
Output: Severity: Critical — Block release

Input: 5
Output: Severity: Medium
*/

let Severity = 9;

if(Severity === 9 || Severity === 10){
    console.log("Severity: Critical — Block release");
}
else if(Severity === 7 || Severity === 8){
    console.log("Severity: High");
}
else if(Severity >= 4 && Severity <= 6){
    console.log("Severity: Medium")
}
else if(Severity >= 1 && Severity <= 3){
    console.log("Severity: Low");
}
else{
    console.log("Invalid Score");
}


/*
Question 4 — Build Health Reporter

Problem: Given the percentage of test cases passed in a CI build, report build health.

100% → Green Build
90–99% → Stable (investigate failures)
70–89% → Unstable
Below 70% → Broken Build (block deployment)

Sample Input/Output:

Input: 95
Output: 🟡 Stable — Investigate failures

Input: 65
Output: 🔴 Broken Build — Block deployment
*/
let passedTCPercentage = 95

if(passedTCPercentage === 100){
    console.log("Build Health: 🟢Green");
}
else if(passedTCPercentage >= 90 && passedTCPercentage<=99){
    console.log("Build Health: 🟡Stable - Investigate failures");
}
else if(passedTCPercentage >= 70 && passedTCPercentage <= 89){
    console.log("Build Health: Unstable");
}
else if(passedTCPercentage < 70){
    console.log("Build Health: 🔴Broken Build - Block deployment");
}

/*
Question 5 — Login Lockout After Failed Attempts

Problem: Track failed login attempts. Lock the account after 3 failed attempts.

Sample Input/Output:

Input: attempts = 2
Output: 1 attempt left before lockout

Input: attempts = 3
Output: 🔒 Account Locked — Contact support

Input: attempts = 0
Output: Login successful
*/

let attempts = 2;

if (attempts === 0) {

    console.log("Login successful");

} 
else if (attempts === 3) {

    console.log("🔒 Account Locked — Contact support");

} 
else {

    let attemptsLeft = 3 - attempts;

    console.log(attemptsLeft + " attempt left before lockout");

}