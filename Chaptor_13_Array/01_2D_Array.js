// single dimention array:
let array1 = [ 1, 2, 3, 4, 5, 6, 7, 8, 9];

// in above array there are single elements 1, 2, 3, 4, 5, 6, 7, 8, 9
// which are accessed by index starts from 0 --> (length-1) of array

// Multidimensional array:
// multimiensional array is simple means it will contains each elements as a n array it-self
// basically in above sigle dimensional 1 , 2, 3, 4 are basically single digit number but in multi-dimensional array 
// each element will be an array like below

let grid1 = [  [1,2,3], [4,5,6], [7,8,9]  ];  // here [1,2,3] is 1st element, [4,5,6] - 2nd element, [7,8,9]- 3rd element

console.log(`length of grid1 is: ${grid1.length}`); // length of grid1 is: 3
console.log();

// now to understnd indexsation for above elements w'll right down above array as matrix

let grid2 = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
];

// indexsation of above array is:
/*
    [
        0th element [0,0 , 0,1 , 0,2],
        1st element [1,0 , 1,1 , 1,2],
        2nd element [2,0 , 2,1 , 2,2]
    ]
*/

// printing the elements of array

console.log(grid2[0] , grid2[1] , grid2[2]); // output: [ 1, 2, 3 ] [ 4, 5, 6 ] [ 7, 8, 9 ]

// if we want to print any particular value from 0th element then we will access those elements like below
console.log(grid2[0][0]);   // 1
console.log(grid2[0][1]);   // 2
console.log(grid2[0][2]);   // 3

console.log(grid2[1][0]);   // 4
console.log(grid2[1][1]);   // 5
console.log(grid2[1][2]);   // 6

console.log(grid2[2][0]);   // 7
console.log(grid2[2][1]);   // 8
console.log(grid2[2][2]);   // 9

// we access the elements w.r.t the index of elements

// in 2d array 0th element will contain an array of n elements so we can access those elements like [0][0].....[0][n-1];
console.log();
console.log("Printing all the elements of 2D array using for loop")

let grid3 = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
];

for(let i = 0; i < grid3.length; i++)
{
    for(let j = 0; j < grid3[i].length; j++)
    {
        console.log(grid2[i][j]);
    }
}

// output of above for loop
//  1
//  2
//  3
//  4
//  5
//  6
//  7
//  8
//  9
console.log();
console.log("Printing elements of 2d Array using for of loop");

let grid4 = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
];

for(let elements of grid4){
    
    process.stdout.write("[ ");
    
    for(let eachElements of elements){
        process.stdout.write(" " + eachElements + " ");
    }

    console.log(" ]");  // here console.log(" ]") will first print " ]" and then it will move to new line in console so next print 
                        // statement codes will print output to new line
}

// output of above loop:
/*

[  1  2  3  ]
[  4  5  6  ]
[  7  8  9  ]

*/
console.log();
console.log("Printing elements of 2d Array using for each method");

let grid5 = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
];

grid5.forEach(elements => {
    
    process.stdout.write("[ ");
    elements.forEach(eachElements => process.stdout.write(" " + eachElements + " "))
    console.log(" ]");
});

/*

output:

[  1  2  3  ]
[  4  5  6  ]
[  7  8  9  ]

*/