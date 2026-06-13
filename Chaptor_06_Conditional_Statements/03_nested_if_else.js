let isLoggedIn = true;
let userRole = "editor";

if(isLoggedIn){

    if(userRole === "admin"){
        console.log("Admin can do all the things");
    }
    else if(userRole === "editor"){
        console.log("Welcome editor - editor access granted");
    }
    else if(userRole === "Viewer"){
        console.log("Welcome viewer - viewer access granted");
    }
    else{
        console.log("Welcome guest - please creater user with role");
    }
}
else{
    console.log("You are not logged in"); 
}