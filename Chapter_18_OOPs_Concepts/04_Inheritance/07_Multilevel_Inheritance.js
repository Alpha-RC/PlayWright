class BasePage{

    constructor(name){
        this.name = name;
    }

    open(){
        console.log("[Open] " + this.name);
    }
}

class AuthPage extends BasePage{

    login(user){
        console.log("[Login]" + user);
    }
}


class AdminPage extends AuthPage{

    constructor(){
        super("Admin Panel");
    }

    manageUsers(){
        console.log("[ADMIN] managing users");
    }
}

/*

In above inheritance 

BasePage --> Parent class of AuthPage
&
AuthPage --> Parent class of AdminPage

so multilevel inheritance

BasePage
   ↓
AuthPage
   ↓
AdminPage

*/


// creating gobject of AdminPage

let admin = new AdminPage();
 
admin.manageUsers();        //--> manageUsers is AdminPage class's own method which can be accessed
admin.login("SuperAdmin");  //--> Now object of AdminPage can access method of AuthPage cause it is extending the AuthPage class
admin.open();               //--> Now object of AdminPage can also access method of BasePage because AdminPage is acquiring all
                            //    properties of class AuthPage and AuthPage is actually extending the BasePage class which means
                            //    AuthPage have access to all methods and variables of class BasePage
                            //    so thats what AdminPage object can access the BasePage method open()