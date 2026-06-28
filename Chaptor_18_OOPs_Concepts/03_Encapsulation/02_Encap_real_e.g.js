class Person{

    #child1;
    #child2;

    constructor(name , ch1 , ch2){
        this.name = name;
        this.#child1 = ch1;
        this.#child2 = ch2;
    }


    getChild1(){
        return this.#child1;
    }
    
    setChild1(child1_name){
        this.#child1 = child1_name;
    }
}

const p = new Person("Rohit" , "jenny" , "Jay");

console.log(p.name);        // Rohit --> we can acces name cause it is public in class Person
// console.log(p.#child1    // SyntaxError: Private field '#child1' must be declared in an enclosing class
console.log(p.getChild1()); // jenny

p.setChild1("Jiya");

console.log(p.getChild1()); // Jiya