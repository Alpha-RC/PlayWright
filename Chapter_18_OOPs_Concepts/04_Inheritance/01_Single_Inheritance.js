class BasePage{

    constructor(pageName){
        this.pageName = pageName;
    }

    open(){
        console.log("Opening the page");
    }

    close(){
        console.log("Closing the page");
    }
}

class LoginPage extends BasePage{   //--> here LoginPage class is extending BasePage which means LoginPage is acquiring the attributes and 
                                    //    & behaviours of BasePage class, this means BasePage is parent class of LoginPage and LoginPage is
                                    //    child of BasePage

}

const page  = new LoginPage();  //--> creating object of child class (LoginPage)

// Now using child class object we can access parent class methods like below
page.open();    //  Opening the page
page.close();   //  Closing the page