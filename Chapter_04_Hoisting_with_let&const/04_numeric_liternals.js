// ===============================
// JAVASCRIPT NUMERIC LITERALS
// WITH typeof OUTPUT
// ===============================


// 1. Decimal Integer Literals
let decimal1 = 10;
console.log(decimal1, typeof decimal1);

let decimal2 = 0;
console.log(decimal2, typeof decimal2);

let decimal3 = 999999;
console.log(decimal3, typeof decimal3);


// 2. Floating-Point Literals
let float1 = 3.14;
console.log(float1, typeof float1);

let float2 = 0.5;
console.log(float2, typeof float2);

let float3 = .5;
console.log(float3, typeof float3);

let float4 = 5.;
console.log(float4, typeof float4);

let float5 = 0.0001;
console.log(float5, typeof float5);


// 3. Scientific / Exponential Notation
let exp1 = 1e3;
console.log(exp1, typeof exp1);

let exp2 = 2.5e2;
console.log(exp2, typeof exp2);

let exp3 = 5e-3;
console.log(exp3, typeof exp3);

let exp4 = 6.02e23;
console.log(exp4, typeof exp4);


// 4. Binary Literals (Base 2)
let binary1 = 0b1010;
console.log(binary1, typeof binary1);

let binary2 = 0B1111;
console.log(binary2, typeof binary2);


// 5. Octal Literals (Base 8)
let octal1 = 0o12;
console.log(octal1, typeof octal1);

let octal2 = 0O777;
console.log(octal2, typeof octal2);


// 6. Legacy Octal (deprecated / avoid)
let legacyOctal = 0o77;
console.log(legacyOctal, typeof legacyOctal);


// 7. Hexadecimal Literals (Base 16)
let hex1 = 0xff;
console.log(hex1, typeof hex1);

let hex2 = 0X1A;
console.log(hex2, typeof hex2);

let hex3 = 0xFFFFFF;
console.log(hex3, typeof hex3);


// 8. Numeric Separators
let million = 1_000_000;
console.log(million, typeof million);

let binarySep = 0b1010_0101;
console.log(binarySep, typeof binarySep);

let octalSep = 0o123_456;
console.log(octalSep, typeof octalSep);

let hexSep = 0xFF_EC_DE_5E;
console.log(hexSep, typeof hexSep);

let floatSep = 123_456.789_123;
console.log(floatSep, typeof floatSep);


// 9. BigInt Literals
let big1 = 123n;
console.log(big1, typeof big1);

let big2 = 9007199254740993n;
console.log(big2, typeof big2);

let big3 = 0xFFn;
console.log(big3, typeof big3);

let big4 = 0b1010n;
console.log(big4, typeof big4);

let big5 = 0o777n;
console.log(big5, typeof big5);


// 10. Special Numeric Values
let infinity = Infinity;
console.log(infinity, typeof infinity);

let negativeInfinity = -Infinity;
console.log(negativeInfinity, typeof negativeInfinity);

let notANumber = NaN;
console.log(notANumber, typeof notANumber);


// 11. Signed Numbers
let positive = +10;
console.log(positive, typeof positive);

let negative = -10;
console.log(negative, typeof negative);


// ===============================
// Extra Notes
// ===============================

// BigInt cannot mix with Number
// console.log(10n + 5); // ❌ Error

// Numeric separators improve readability only
console.log(1_000_000 === 1000000); // true