// creating arrays

//========================================================================================================================================

// 1. Using Array literal - Preferred:

let browsers = ["Chnrome","Firefix","Safari"];
console.log(browsers); //output: [ 'Chnrome', 'Firefix', 'Safari' ]

//========================================================================================================================================

// 2. Using Array constructor new Array(number of items/values):

let scores = new Array(3);  // Array(3) is Array constructor, this will create a empty array but size of array is fixed here i.e.3

console.log(scores); // output: [ <3 empty items> ]

// Assgning values to above array:
scores[0] = 1;
scores[1] = 2;
scores[2] = 3;
scores[3] = 4; // here it will add the value at index 3 , there will not be any error
scores[4] = 5; // here also, value will be updates at index 4

console.log(scores); // output: [ 1, 2, 3, 4, 5 ]

let scores2 = new Array(1,2,3); // now this is an array where values are stored i.e. (1,2,3)
console.log(scores2); // output: [ 1, 2, 3 ]

scores2[3] = 1; // this will also add the value in score2 array at index 3

console.log(scores2); // output: [ 1, 2, 3, 1 ]

//========================================================================================================================================

// 3. Using Array.of() method:

let test = Array.of(10,20,30,40,50);
console.log(test); // outpur: [ 10, 20, 30, 40, 50 ]

//========================================================================================================================================

// 4. using Array.from() method:

let chars = Array.from("hello"); // this will device the string hello into characters like below
// [ 'h', 'e', 'l', 'l', 'o' ]

console.log(chars); //output: [ 'h', 'e', 'l', 'l', 'o' ]

let numbers1 =  Array.from("123456789");
console.log(numbers1);
// output of above statement:
/*

[
  '1', '2', '3',
  '4', '5', '6',
  '7', '8', '9'
]
  
*/
//========================================================================================================================================