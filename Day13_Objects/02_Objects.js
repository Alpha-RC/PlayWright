let student1 = { 
    name: "Rohit", 
    age: 65 
};

let student2 = { 
    name: "Rohit" 
};

let student3 = { 
    name: "Rohit", 
    age: 87, 
    phone: 987654320 
};

// Key will not be in the doubt quotes
// below key in doubt is actually JSON

let JSON_student4 = { "name": "Pramod", "age": 87, "phone": 987654320 };


let a = { 
    status: "pass" 
};
 
// we can access values in object with the help of key like below
console.log(a.status);      // pass
console.log(a["status"]);   // pass

let b = a;  //--> here b will point to same object which is stored in object reference variable a
b.status = "fail"; //--> changing the status using object reference 'b'

// this will change the value for both reference variables a and b
console.log(a.status); // fail
console.log(b.status); // fail


if (b === a) {
    console.log("true");
} else {
    console.log("false");
}

// above if statment will print true as output cause a is stored in b so b is pointing to same object which a is pointing.

let c = { 
    status: "pass" 
};

let d = { 
    status: "pass" 
};

console.log(c); // { status: 'pass' }
console.log(d); // { status: 'pass' }

if (c === d) {
    console.log("true");
} else {
    console.log("false");
}

// output: false
