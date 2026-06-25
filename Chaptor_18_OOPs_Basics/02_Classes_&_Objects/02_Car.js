class Car{
    
    // CAB --> Constructor , Attribute , Behaviour

    // constructor: defining a constructor:
    constructor(name_during_object_creation){
        this.name = name_during_object_creation;    // "this" is a keyword/reference variable to its class, 
                                                    // it means it can access attributes and behaviours of its class
                                                    // in this case name is nothing but an attribute/variable of this class
                                                    // but here name is not declared anywhere so it will create it and will 
                                                    // store the value of name_during_object_creation in it.

    }

    // attribute:


    // Behaviour:
    drive(){
        console.log("I'm driving: "+ this.name);    // here we are using this.name which is declared in constructor
    }

}

// creating a object of class Car:
const Tesla = new Car("Model S");   // this will invoke the constructor of class Car and "Model S" argument will be stored in 
                                    // parameter "name_during_object_creation"

Tesla.drive();  // output: I'm driving: Model S


const i10 = new Car("grand i10");
i10.drive();    // output: I'm driving: grand i10