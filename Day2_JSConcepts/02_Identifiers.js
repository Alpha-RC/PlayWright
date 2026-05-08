// Identifiers in Javascript:

// An identifier is a name given to variables.

// for example:
var myVariable = 10;

// Here, 'myVariable' is an identifier or a name to the container created by 'var' keyword

// Rules to create valid identifiers in JavaScript:

// 1. An identifier must start with a letter 
//      1. (a-z or A-Z), 
//      2. an underscore (_), 
//      3. or a dollar sign ($).

// 2. After the first character, an identifier can also include digits (0-9).

// 3. An identifier cannot be a reserved keyword in JavaScript (like 'if', 'for', 'while', etc.).

// 4. An identifier cannot contain spaces. 
// If you want to use multiple words, you can use camelCase (e.g., myVariableName) or underscores (e.g., my_variable_name).

// 5. An identifier is case-sensitive, which means 'myVariable' and 'myvariable' would be considered different identifiers.

// 6. An identifier cannot start with a digit. For example, '1variable' is not a valid identifier, but 'variable1' is valid.


/* ========================================
   CODE EXAMPLES FOR IDENTIFIER RULES
   WITH VAR, LET, AND CONST
   ======================================== */

/* ========================================
   RULE 1: Must start with letter, _, or $
   ======================================== */

var validVar = "starts with letter";          // ✓ Valid
var _privateVar = "starts with underscore";   // ✓ Valid
var $jqueryStyle = "starts with dollar";      // ✓ Valid

let validLet = "starts with letter";          // ✓ Valid
let _privateLet = "starts with underscore";   // ✓ Valid
let $dollarLet = "starts with dollar";        // ✓ Valid

const VALID_CONST = "starts with letter";     // ✓ Valid
const _PRIVATE_CONST = "starts with underscore"; // ✓ Valid
const $JQUERY_CONST = "starts with dollar";   // ✓ Valid

// Invalid - would cause syntax error if uncommented:
// var 1invalid = "starts with digit";        // ✗ Invalid
// let @email = "starts with @";              // ✗ Invalid
// const #hashtag = "starts with #";          // ✗ Invalid

/* ========================================
   RULE 2: Can include digits after first character
   ======================================== */

var var1 = "contains digit";            // ✓ Valid
var variable123 = "multiple digits";    // ✓ Valid

let let2 = "contains digit";            // ✓ Valid
let count999 = "ends with digits";      // ✓ Valid

const MAX_ATTEMPTS_5 = 5;               // ✓ Valid
const SCORE100 = 100;                   // ✓ Valid

// Invalid - starts with digit:
// var 1stPlace = "illegal";              // ✗ Invalid
// let 9lives = "illegal";                // ✗ Invalid

/* ========================================
   RULE 3: Cannot be a reserved keyword
   ======================================== */

// Valid identifiers that look like keywords but are not:
var myIf = "not a reserved word";       // ✓ Valid
var myFor = "not a reserved word";      // ✓ Valid
var ifCondition = "camelCase version";  // ✓ Valid

let whileLoop = "valid identifier";     // ✓ Valid
let switchValue = "valid identifier";   // ✓ Valid

const FUNCTION_NAME = "valid identifier"; // ✓ Valid

// Invalid - using reserved keywords directly:
// var if = "reserved keyword";           // ✗ Invalid
// let for = "reserved keyword";          // ✗ Invalid
// const function = "reserved keyword";   // ✗ Invalid

/* ========================================
   RULE 4: Cannot contain spaces
   ======================================== */

var myVariableName = "uses camelCase";       // ✓ Valid - no spaces
var my_variable_name = "uses snake_case";   // ✓ Valid - no spaces
var MyVariableName = "uses PascalCase";     // ✓ Valid - no spaces

let firstName = "camelCase for let";        // ✓ Valid
let first_name = "snake_case for let";      // ✓ Valid

const FULL_NAME = "UPPERCASE for const";    // ✓ Valid
const fullName = "camelCase for const";     // ✓ Valid

// Invalid - contains spaces:
// var my variable = "contains space";     // ✗ Invalid
// let my name = "contains space";         // ✗ Invalid

/* ========================================
   RULE 5: Case-sensitive identifiers
   ======================================== */

var myVariable = "lowercase m";         // ✓ Different identifier
var MyVariable = "uppercase M";         // ✓ Different identifier
var MYVARIABLE = "all uppercase";       // ✓ Different identifier

console.log(myVariable);    // Output: lowercase m
console.log(MyVariable);    // Output: uppercase M
console.log(MYVARIABLE);    // Output: all uppercase

let age = 25;               // ✓ Different from Age
let Age = 30;               // ✓ Different from age

const score = 95;           // ✓ Different from Score
const Score = 100;          // ✓ Different from score

// These are all treated as different variables:
console.log(age);           // Output: 25
console.log(Age);           // Output: 30
console.log(score);         // Output: 95
console.log(Score);         // Output: 100

/* ========================================
   RULE 6: Cannot start with a digit
   ======================================== */

var variable1 = "ends with digit";      // ✓ Valid
var var123abc = "contains digits";      // ✓ Valid

let value2 = "ends with digit";         // ✓ Valid
let test999test = "contains digits";    // ✓ Valid

const ITEM_10 = "ends with digit";      // ✓ Valid
const LEVEL_99 = 99;                    // ✓ Valid

// Invalid - starts with digit:
// var 1var = "starts with digit";        // ✗ Invalid
// let 2ndAttempt = "starts with digit";  // ✗ Invalid
// const 3Items = "starts with digit";    // ✗ Invalid

/* ========================================
   REAL-WORLD IDENTIFIER EXAMPLES
   ======================================== */

// Using var:
var userName = "John";
var userAge = 28;
var isActive = true;

// Using let:
let productName = "Laptop";
let productPrice = 999.99;
let inStock = true;

// Using const:
const MAX_LOGIN_ATTEMPTS = 5;
const API_BASE_URL = "https://api.example.com";
const CONFIG = { timeout: 5000, retries: 3 };

console.log(userName);       // Output: John
console.log(productName);    // Output: Laptop
console.log(MAX_LOGIN_ATTEMPTS); // Output: 5


