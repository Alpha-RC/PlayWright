// Primitive Variables
let a = 10;
let b = a;

b = 99;

console.log(a); // 10  //--> a value will not change

// object reference variable
let obj1 = { val: 10};
let obj2 = obj1;

obj2.val = 100;

console.log(obj1);  // { val: 100 }
console.log(obj2);  // { val: 100 } 