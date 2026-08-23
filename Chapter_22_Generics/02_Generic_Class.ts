class TestDataStorage<T>{

    private items:T[] = [];

    add(item:T):void{
        this.items.push(item);
    }

    getFirst<T>(){
        return this.items[0]!;
    }

    getAll():T[]{
        return this.items;
    }

    count():number{
        return this.items.length;
    }
}

// in above example <T> is basically means any method or any variable inside the class can be of any type
// so suppose we want to declare a empty array variable but we dont know what type of data it will store
// then we mention it like let emptyArray:T[] = [];
// so T[] is what will decide what type of data is getting stored in emptyArray

// under function add() which will not return anything but asking for one parameter of type T means we can send
// any type of  data to that function and using this. we can access the private variable items and store data
// for that particular object 

let statusCodeStore = new TestDataStorage<number>();
let testNameStore   = new TestDataStorage<string>();

// in above code we created the object of the class TestDataStorage
// TestDataStorage<number> or TestDataStorage<string> is defining that all the variable and method will get number
// type of data like we can access add method and send number as a value for variable item which will add it to
// items[] array

statusCodeStore.add(200);
statusCodeStore.add(201);
statusCodeStore.add(202);

console.log( statusCodeStore.getFirst() );
console.log( statusCodeStore.getAll()   );
console.log( statusCodeStore.count()    );



testNameStore.add("Login");
testNameStore.add("Logout");
testNameStore.add("SignUp");

console.log ( statusCodeStore.getFirst() );
console.log ( statusCodeStore.getAll()   );
console.log ( statusCodeStore.count()    );

// so the scenario here is we are storing the test data and test data can be dynamic in nature in terms of type
// so we created an object called statusCodeStore whoes main purpose is to store reponse codes of API
// which will be of type number so we mentioned new TestDataStorage<number>