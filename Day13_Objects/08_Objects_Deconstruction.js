
const user = { name1: "John", age: 30, city: "NYC" };

// Basic destructuring:
const { name1, age } = user;  // --> here we are pulling out the keys from user object and making them/converting them into a variable

// in simple words we are doing below thing:

// const name1 = user["name1"];
// const age = user["age"];

// now we can print the values of these variables
console.log(name1); // John
console.log(age);   // 30


// Rename variables
const { name1:userName, age:userAge } = user; // here we are pulling out name1 and age keys and specifying them as userName and userAge
                                              // means we are storung the values of name1 and age in userName and userAge

console.log(userName); // John
console.log(userAge);  // 30

// destructuring
const { country } = user;
console.log(country); // undefined casue there is no key present in user object as country

// Default values
const { country1 = "USA" } = user; // here we are checking if key 'country' exists in 'user' object if yes then take the default value from object 
                                   // otherwise take USA as default value
console.log( country1 ); // USA

const { city = "LA" } = user; // here we are checking if key 'city' exists in 'user' object, if yes then take the default value from object 
                              // otherwise take LA as default value
console.log(city); // NYC
console.log(user); // { name1: 'John', age: 30, city: 'NYC' } object stays same

const data = {
    user:
    {
        name: "John",
        address:
        {
            city: "NYC"
        }
    }
};

const { user: { address: { city } } } = data;
console.log(city); // NYC