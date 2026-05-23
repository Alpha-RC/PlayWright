let browser = "Chrome";

switch(browser){

    case "Chrome":
    case "Edge":
    case "Brave":
    case "Opera":
        console.log("Chromium Project!");
        break;
    case "firefox":
        console.log("Mozilla Project!");
        break;
    case "safari":
        console.log("Apple Browser - uses javascript engine");
        break;
    default:
        console.log("Unknown Browser - manual testing needed");
}

// in above example - we grouped the conditions for case "Chrome": case "Edge": case "Brave": case "Opera":
// this means whenever browser value is between these 4 values Chrome, Edge, Brave, Opera then output will be Chromium Project