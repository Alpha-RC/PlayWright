let str = "  Hello, World!  ";

console.log( str.toUpperCase() );   // "  HELLO, WORLD!  "
console.log( str.toLowerCase() );   // "  hello, world!  "

console.log( str.trim()        );   // Hello, World!
console.log( str.trimStart()   );   // "Hello, World!  "
console.log( str.trimEnd()     );   // "  Hello, World!"

let msg = "Test: FAIL. Retry: FAIL.";
console.log( msg.replace("FAIL" , "PASS")     );    // Test: PASS. Retry: FAIL.
console.log( msg.replaceAll("FAIL" , "PASS'") );    // Test: PASS'. Retry: PASS'.

// with regex
console.log( msg.replace(/FAIL/g,"PASS") );  // Test: PASS. Retry: PASS.

let url = "https://app.vwo.con?app=pramod";
console.log(url.replace(/app/g, "qa")); // app will be replaced by qa // output:https://qa.vwo.con?qa=pramod

let r = "pass,fail,skip".split(","); // split method returns an array
console.log(r); // [ 'pass', 'fail', 'skip' ]

let rr = "test_login_pass".split("_").join(" ");
console.log(rr); // test login pass

let parts = ["2026", "06", "06"];
let date = parts.join("-");
console.log(date); // 2024-03-07

// concatenation
console.log(  "Hello" + " " + "World!!!"     ); // Hello World!!!
console.log(  "Hello".concat(" ","World!!")  ); // Hello World!!
console.log(  `${"Hello"} ${"World!"}`       ); // Hello World!
