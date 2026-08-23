class Animal{

    constructor(name){
        this.name = name;
    }

    eat(){
        console.log(this.name + " is eating");
    }

    sleep(){
        console.log(this.name + " is sleeping");
    }
}

class Dog extends Animal{

    constructor(name , breed){

        super(name);    //--> super() is used to invoke parent class constructor
        this.breed = breed;
    }

    bark(){
        console.log(this.name + " is barking");
    }
}



// in above exampe both classes have constructor

// now creating object of child class

const dog = new Dog("Rex" , "Labrador");    //--> here constructor will be invoked
                                            //    it takes 2 parameters (name , breed)

dog.bark();     //  Rex is barking
dog.eat();      //  Rex is eating
dog.sleep();    //  Rex is sleeping

console.log(dog.breed);     //  Labrador
console.log(dog.name);      //  Rex