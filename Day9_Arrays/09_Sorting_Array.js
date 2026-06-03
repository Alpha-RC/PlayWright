let fruits = ["banana", "apple", "cherry"];
fruits.sort();       // this will sort fruits array w.r.t first letter for the strings
console.log(fruits); // output: [ 'apple', 'banana', 'cherry' ]

let number = [3, 1, 4];
number.sort()
console.log(number); // output: [ 1, 3, 4 ]

// Above sorting is called as Lexical sorting/natural sorting - this means it will sort based on the first letter of data in array

// e.g 1:
let num = [20,1,10,2];      // here if we sort this array
num.sort();                 // expected outpit after sorting is: [1,2,10,20]
console.log(num);           // here output is [ 1, 10, 2, 20 ] --> this is lexical/lexicographic sorting

// ascending sort:
num.sort((a,b) => a - b);
console.log(num);           // output: [ 1, 2, 10, 20 ] --> Here (a - b) if substraction is positive that means a is bigger than b
                            // now here sort comes in the picture which will pick the small value first so if value is positive after substraction
                            // then it will pick b and will put in the arry num first. like this i will loop whole array and it will sort it

// descending sort:
// similarly b - a if positive then b is bigger then a and it will keep the b value in array and if negavtive then a is bigger then it will add 
// a in the array
num.sort((a,b) => b - a);
console.log(num);           // output: [ 20, 10, 2, 1 ]


let num1 = [20, 1, 10, 2];

num1.sort((a, b) => {
    console.log("Comparing:", a, b);
    return a - b;
});