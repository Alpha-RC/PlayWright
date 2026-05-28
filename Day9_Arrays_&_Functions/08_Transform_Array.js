let score = [45, 56, 78, 84, 96];
console.log(score);


// 1. map():

// map transform every element in array and returns a new array based on the condition given in arrow function

// for e.g, if we want to convert above 'score' array into a array where we will see that for particular score student is pass or fail
// means suppose we pick item 56, now suppose passing criteria is >70% then 56 is fail in this case so does 45

// so we want to get/return an array which will look like ['fail' ,'fail' ,'pass','pass','pass'];

// so we can achieve this using map method on array element like below:

let results = score.map( s => s > 70 ? "pass":"fail");
// so in above statement we created a arrow function under map method which is being used to set the passing fail criteria
// s will point to each item in array score and it will check where s is greater than 70 or not and we used ternary operator here to decide the
// value map will add into new array 

// note: map will return a new array in this case and original array is as it is so we are storing it into variable result

console.log(results); // output: [ 'fail', 'fail', 'pass', 'pass', 'pass' ]


// 2. filter(): 

// filter method returns the original array but with condition

// suppose we want score which are greater than 70 only in array then

let passingStudents = score.filter(s => s > 70); // s is pointing to each item in array 'score'
console.log(passingStudents); // output: [ 78, 84, 96 ]


// 3. reduce(): 

//  reduce method accumulates to a single value:

let totalScore = score.reduce((sum , s)=> sum + s , 0);
console.log(totalScore); // output: 359

// 4. flat():

// flat method converts the nested arrays into a single array / multidimensional to single dimensional array
let nestedArry = [[1,2], [3,4], [5]];
console.log(nestedArry.flat()); // output: [ 1, 2, 3, 4, 5 ]
