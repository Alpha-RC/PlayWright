
class Calculator{

    constructor(num1 , num2){
        this.num1 = num1;
        this.num2 = num2;
    }

    sum(){
        console.log( "Additon:" , this.num1 + this.num2 );
    }

    substraction(){
        console.log( "Substraction:" , this.num1-this.num2 );
    }

    modulus(){
        console.log( "Modulus:" , this.num1%this.num2 );
    }

    division(){
        console.log( "Division:" , this.num1/this.num2 );
    }

    multiplication(){
        console.log( "Multiplication:" , this.num1*this.num2 );
    }
}


const obj = new Calculator(20 , 10);

obj.sum();                  //  Additon: 30
obj.substraction();         //  Substraction: 10
obj.division();             //  Division: 2
obj.multiplication();       //  Multiplication: 200
obj.modulus();              //  Modulus: 0

//----------------------------------------------------------------------------------------------------------------------------

class Student{

    static courseName = "Playwright2x";
    static mentorName = "Pramod Dutta";

    constructor(name , age , phoneNo){
        this.name = name;
        this.age  = age;
        this.phoneNo = phoneNo;
    }

    displayStudnetInfo(){

        console.log(`Name: ${this.name} \nAge: ${this.age} \nphoneNo: ${this.phoneNo} \nCourseName:${Student.courseName} \nMentor: ${Student.mentorName}\n`);
    }
}

const student1  = new Student("std1" , "25" , "7667876567");
student1.displayStudnetInfo();

const student2  = new Student("std2" , "20" , "7690098890");
student2.displayStudnetInfo();

const student3  = new Student("std3" , "30" , "7687667899");
student3.displayStudnetInfo();

const student4  = new Student("std4" , "21" , "9876567899");
student4.displayStudnetInfo();

const student5  = new Student("std5" , "22" , "7654345667");
student5.displayStudnetInfo();

const student6  = new Student("std6" , "31" , "8765456777");
student6.displayStudnetInfo();

const student7  = new Student("std7" , "32" , "4567898766");
student7.displayStudnetInfo();

const student8  = new Student("std8" , "36" , "9876545667");
student8.displayStudnetInfo();

const student9  = new Student("std9" , "25" , "6545678877");
student9.displayStudnetInfo();

const student10 = new Student("std10", "26" , "6567898777");
student10.displayStudnetInfo();