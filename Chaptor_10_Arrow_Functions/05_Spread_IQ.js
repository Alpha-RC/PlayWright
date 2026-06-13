function add (a, b, c){
    return a + b + c;
}

let num = [1,2,3];

// suppose we want to sent num as paramter to function add() then
console.log(add(...num)); // a = 1, b = 2, c = 3 // output: 6

let responseCode = [200 , 201, 300, 400];

function hasError(...codes){
    return codes.some(c => c >= 400);
}

console.log(hasError(...responseCode)); // output: true