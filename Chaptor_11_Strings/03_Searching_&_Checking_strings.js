// Searching and Checking
let url = "https://staging.vwo.com/api/login?retry=true";

// url.includes() method
console.log( url.includes("staging") ); // true

// url.startsWith() method
console.log( url.startsWith("https")); // true
console.log( url.startsWith("http://")); // false

// url.endsWith() method
console.log( url.endsWith("true") ); // true

// url.indexOf() method
console.log( url.indexOf("a") ); // 10
console.log( url.indexOf("staging")); // 8  this will return the index from where the string "staging" is started
console.log( url.indexOf("nothere")); // -1  if string/character is not there the it will return -1

// url.lastIndexOf() method
console.log( url.lastIndexOf("s")); // 8

// url.search()
console.log( url.search(/login/) ); // /login/ is regular expression (regex) // 28 --> return the index the login starts from
console.log( url.search(/vwo/)   ); // 16

// /regex/ - Regular Expression is a pattern to find something