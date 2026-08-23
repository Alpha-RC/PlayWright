let arr = [1, 2, 3];
console.log(arr)  //output: [ 1, 2, 3 ]

// add to end of array
arr.push(4);      // this will add 4 at the end of arr
console.log(arr); // output: [ 1, 2, 3, 4 ]

// can push multiple elements also
arr.push(5,6);    // this will add 5 and 6 at the end 
console.log(arr); // output: [ 1, 2, 3, 4, 5, 6 ]

// remove from end
arr.pop();        // this will remove the last element from array
console.log(arr); // output: [ 1, 2, 3, 4, 5 ]

// add at begining
arr.unshift(0);   // this will add 0 at index 0
console.log(arr); // output: [ 0, 1, 2, 3, 4, 5 ]

// remove from begining
arr.shift();      // this will remove element from 0th index
console.log(arr); // output: [ 1, 2, 3, 4, 5 ]

// splice method: 
// Removes elements from an array and, if necessary, inserts new elements in their place, returning the deleted elements.

console.log("current array:");
console.log(arr); // output: [ 1, 2, 3, 4, 5 ]

arr.splice(2,1);  // this will remove the element from 2nd index and it will remove total of one element from that position

console.log("After Splice:");
console.log(arr); // output: [ 1, 2, 4, 5 ]

console.log();

// adding element at any position 
arr.splice(2,0,3); // (2,0,3)--> 2 means delete from 2nd index, 0 means delete total of 0 elements from 2nd index & 3 means add 3 at deleted position here it will add at 2nd index
console.log(arr);  // output: [ 1, 2, 3, 4, 5 ]

// replace element:
arr.splice(2,1,99); // first it will delete one element from 2nd index and then it will add 99 from that index
console.log(arr);   // output: [ 1, 2, 99, 4, 5 ] 3 is replaced with 99 


arr.splice(1, 2 , 10 , 100); // this will delete 2 elements from 1st index and will add 2 elements 10 and 100
// so in current array it will delete 2 and 99 and will replace it with 10 & 100
console.log(arr); // output: [ 1, 10, 100, 4, 5 ]