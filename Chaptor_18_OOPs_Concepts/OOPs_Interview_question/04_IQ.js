// Exercise 4: Method Chaining with this
class Counter {
    constructor() {
        this.count = 0;
    }

    increment() {
        this.count++;
        return this;
    }

    display() {
        console.log("Count:", this.count);
        return this;
    }
}

new Counter().increment().increment().increment().display();

// in above code, at first new Counter() will invoke the constructor
// constructor will iniliaze count = 0 for the object which is being created by new Counter() using this , as this always refer current object
// in this case current object is created by new Counter()

// now using new Counter() we are directy accessing increment() method like new Counter().increment() cause object can access the methods
// instead of creating a object reference we are directly accessing using actual object (new Counter()).

// now increment is first increasing the count by 1 i.e. this.count++ and then it is returing the object itself which basically means it is
// returing new Counter();

// now as it is returing the object we can access the methods of Counter class again 
// so thats why " new Counter().increment().increment().increment().display(); " is called method chaining

/* Output:

Count: 3

*/
//-------------------------------------------------------------------------------------------------------------------------------------------