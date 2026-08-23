class BasePage{
    protected baseURL: string;


    constructor(baseURL: string){
        this.baseURL = baseURL;
    }

    protected navigate(path: string):void{
        console.log("Navigating to: " + this.baseURL + path);    
    }
}


class LoginPage extends BasePage{

    constructor(){
        super("https://app.statging.com");
    }

    login(user:string):void{
        this.navigate("/login");
        console.log("Typing" + user + " into #username");
        console.log("Clicking #login-btn");
    }
}


let page = new LoginPage();
page.login("Admin");