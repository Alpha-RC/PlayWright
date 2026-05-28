//----------------------------------------------------------------------------------------------------------------------------------------------

// Array Decleration:

let result = ["pass","fail","pass","error","fail"];
console.log(result);

//----------------------------------------------------------------------------------------------------------------------------------------------

// 1. indexOf():

// indexOf return the first index number of the item present in array:
console.log(`index of item "fail": ${result.indexOf("fail")}`); // output: index of item "fail": 1
console.log(result.indexOf("skip")); //output: -1 --> cause there is no such item present in array

// 2. lastIndexOf():

// in above array there are 2 similar items "fail" at index 1 and 4
// now if we want to find the last index of similiar items then we use lastIndexOf method.
console.log(`Last index of item fail: ${result.lastIndexOf("fail")}`); // output: Last index of item fail: 4

//----------------------------------------------------------------------------------------------------------------------------------------------

// 3. includes():

// using includes method we can check if any item is present in array or not:
console.log(result.includes("pass")); // output: true
console.log(result.includes("Skip")); // output: false

//----------------------------------------------------------------------------------------------------------------------------------------------

// 4. find():

// find method returns the value of the first element in the array where condition of arrow function is true if not matched then undefined
let num = [20,30,40,50];
console.log(num.find(x => x > 20)); // output: 30
 
// 5. findLast():

// findLast method returns the value of the last element in the array where condition of arrow function is true if not matched then undefined
console.log(num.findLast(i => i > 10)); // output: 50

//  5. findIndex():

// using findIndex we can find the index of the first item which matched the condition of arrow function as true otherwise returns undefined
console.log(num.findIndex(n => n > 30)); // output: 2

// 6. findLastIndex():

// using findLastIndex we can find the index of the last item which matched the condition of arrow function as true otherwise returns undefined
console.log(num.findLastIndex(n => n > 10));  //output: 3

//----------------------------------------------------------------------------------------------------------------------------------------------