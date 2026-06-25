// Privte Fields --> use # to declare private variable/fields like #userName
// Public Fields --> only field decleration like userName

class Credentials{

    #apiKey;    //--> private variable/field/attribute  --> scope in only within the class
    user;       //--> public variable/field/attribute

    // paramaterized constructor:
    constructor(user , key){
        
        this.#apiKey = key;
        this.user    = user;
    }

    // method:
    getAuthHeader(){
        return "Bearer " + this.#apiKey;
    }

}

// object creation:
let cred = new Credentials("Admin" , "secret_key_1234");
console.log(cred.user);  //--> here we cannot access private varibale, private varibale can only be used under a class
// output: Admin

console.log(cred.apiKey);   // undefined
// console.log(cred.#apiKey);  // SyntaxError: Private field '#apiKey' must be declared in an enclosing class

console.log( cred.getAuthHeader() );    // Bearer secret_key_1234