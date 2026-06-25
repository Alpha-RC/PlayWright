class Student{

    static courseName = "Playwright2x";
    static mentorName = "Pramod Dutta";

    constructor(name , age , phoneNo){
        this.name = name;
        this.age  = age;
        this.phoneNo = phoneNo;
    }

    displayStudnetInfo(){

        console.log(`Name: ${this.name} \nAge: ${this.age} \nphoneNo: ${this.phoneNo}`);
}
}

// creating objects of above class
const student1 = new Student("Rohit" , "25" , "7667876567");
const student2 = new Student("Shubham" , "20" , "7690098890");

// if we try to access static variables using object reference variable
console.log( student1.courseName ); // undefined
console.log( student1.mentorName ); // undefined

// we need to access it using class name like below

console.log( Student.courseName );  // Playwright2x
console.log( Student.mentorName );  // Pramod Dutta

// This means, for every object of class Student values of these static varibales will be same so we dont access them using object

// we can change the values of static varibales using class name only like below:
Student.courseName = "playwright2x_batch";
Student.mentorName = "Prrammod Dutta";

console.log( Student.courseName );  // playwright2x_batch
console.log( Student.mentorName );  // Prrammod Dutta


// related to varibles which are non static: name, age, phoneNo
// these values are only valid for their objects sucn as student1 will hold diff values and student2 will different

console.log( student1.name + "," + student1.age + "," + student1.phoneNo ); //  Rohit,25,7667876567
console.log( student2.name + "," + student2.age + "," + student2.phoneNo ); //  Shubham,20,7690098890


// accessing static method:
student1.displayStudnetInfo();  //  This is commom method of this class