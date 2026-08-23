interface BasePage{

    url:string;
    title:string;
    
    // openVWO(url:string):void;
}

interface LoginPage extends BasePage{
    usernameSelector: string;
    passwordSelector: string;
    loginButtonSelector: string;
}

interface FreetrailPage extends BasePage{
    usernameSelector: string;
    submitButtonSelector: string;
}

let loginPage: LoginPage = {

    url:"/Login",
    title: "Login Page",
    usernameSelector: "#username",
    passwordSelector: "#password",
    loginButtonSelector: "#login-btn"
}

let freetrailPage: FreetrailPage = {
    url: "/free-trail",
    title:"Free Page",
    usernameSelector:"#username",
    submitButtonSelector:"#submit"    
}

console.log("URL:", loginPage.url);
console.log("Title:", loginPage.title);
console.log("Username field:", loginPage.usernameSelector);

console.log("--------");

console.log("URL:", freetrailPage.url);
console.log("Title:", freetrailPage.title);
console.log("Username field:", freetrailPage.usernameSelector);