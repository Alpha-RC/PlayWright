let str = "Login_Test_pass_001";

// 1. slice(start,end) method - negative index supported
console.log( str.slice(0, 5)); // output: Login , so for start value it will starts from 0th index and for end value it will starts from 1
                               // means str.slice(2, 6) is nothing but str.slice(2, 6-1)

console.log( str.slice(11) );  // this will go from index 11th to last // output: pass_001

// to get test number from str
let testNumber = str.slice(-3);
console.log(testNumber); // 001

// 2. substring(start ,end) method - no negative index supported (treats as 0)
console.log( str.substring(6 , 10) ); // Test