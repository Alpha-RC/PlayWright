let str = "Hello World!";

// length property
console.log(str.length); // 13

// Access by index
console.log(str[0]); // H
console.log(str[1]); // 3
console.log(str[2]); // l

// .at() method --> used to get characters from starting as well as from end(from last index)
console.log( str.at(3)  ); // l
console.log( str.at(-1) ); // !
console.log( str.at(-2) ); // d

// chatAt() method
console.log( str.charAt(4) ); // return the character at index 4 in str // output: 0

// charCodeAt() method
console.log( str.charCodeAt(0) );  // returns the code of character at index 0 // output: 72



