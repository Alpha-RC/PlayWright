let day = 1;

switch(day){

    case 1:
        console.log("Monday");
        break;    
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Firday");
        break;
    case 6:
        console.log("Saturday");
        break;
    case 7:
        console.log("Sunday");
        break;
    default:
        console.log("Invalid day");
}


// real time e.g 1:

let responseCode = 404;

switch(responseCode){
    case 200:
        console.log("200 OK");
        break;
    case 404:
        console.log("404 Not found");
        break;
    default:
        console.log("Invalid status code");
}