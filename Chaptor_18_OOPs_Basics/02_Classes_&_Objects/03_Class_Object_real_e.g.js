class TestCase{

    constructor(name, status, priority){
        this.name       = name;
        this.status     = status;
        this.priority   = priority;
    }

    display(){
        console.log(this.name + "->" + this.status + "->" + this.priority);
    }
}

let loginTC = new TestCase("Login Test", "Pass", "P0");
let signUp  = new TestCase("SignUp Test", "Fail" , "P1");

loginTC.display();  // Login Test->Pass->P0
signUp.display();   // SignUp Test->Fail->P1