const user = {
    name: "Rohit",
    age: 30,
    email: "rohit@example.com"
};

console.log(user);          // { name: 'Rohit', age: 30, email: 'rohit@example.com' }
console.log(user.name);     // Rohit
console.log(user["age"]);   // 30


// Dynamic property access
const key = "age";          // assiging a value to a variable and using that varibale to get value from object
console.log(user[key]);     // here user[key] is liek user["age"]

// Adding/modifying properties:
user.city = "NYC";          // this will add the value
user.age = 31;              // this will modify the value

console.log(user);          // { name: 'Rohit', age: 31, email: 'rohit@example.com', city: 'NYC' }


let obj = { 
    name: "Login" 
};

console.log(Object.getOwnPropertyDescriptor(obj, "name"));
/*

ouput: 
{
   value: "Login",
   writable: true,       ← can change the value
   enumerable: true,     ← shows in for...in / Object.keys()
   configurable: true    ← can delete or redefine
}

*/