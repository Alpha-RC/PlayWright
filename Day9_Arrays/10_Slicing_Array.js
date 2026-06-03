// slicing and Combining arrays

    let arr = [1,2,3,4,5,6];

    console.log(arr.slice(1,6)); //  output: [ 2, 3, 4, 5, 6 ]

// arr.slice(1,6) --> here (1,6) is index

// index 1 means it will pick element '2' which is at index 1 and index 6 will pick the element '6' which is at index 5
// so slice(1,6) means actually slice(1,5)

console.log(arr.slice(3)); // here from index 3 means it will pick all the elements from 3rd index i.e. [4,5,6,7,8,9]

console.log(arr.slice(-2)); // here index will starts from end of the array, here output will be: [ 8, 9 ], negative index starts from -1

console.log(arr.slice(0)); // this will pick all the elements of array, output: [ 1, 2, 3, 4, 5, 6 ]


// here original array will be same slice will not modify the array
console.log(arr); // output: [ 1, 2, 3, 4, 5, 6 ]
