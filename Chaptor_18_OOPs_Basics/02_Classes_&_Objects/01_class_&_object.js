class Person{

    // Attributes: Attribues of a class is nothing but its properties like persons name, age, nationality

    // these are nothing but the varibles which will hold the values which are basically referenced as attributes in real life terms
    name;
    email;
    salary;
    address;

    // Behaviour: For this class Behaviour is like a action that can person do for e.g eat, sit, sleep

    // these are basically methods which will do some actions which are referenced as behaviour in real life term
    eat(){}
    sleep(){}
    walk(){}

    // constructor:
    constructor(){
        console.log("This is a constructor of this class and I got invoked cause object of my class is created");
    }

}

// creating object of above class
const Obj_ref =  new Person();  // here when we write 'new Person();', an object of this class is created and it is gettig stored 
                                // in varibale called Obj_ref, which basically refers to the created object
                                // now an object of class basically contains every attributes and behaviours of the class, which
                                // means we can access all of them with the help of object reference varibale i.r. obj_ref
                                // Note: if a class has a constructor then it will be invoked upon object creation of class


console.log(Obj_ref);
