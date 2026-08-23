interface BugReport{

    id:number;
    title: string;
    severity:string;
    stepToReproduce: Array<string>;
}


const bug1: BugReport = {
    id:1,
    title: "Login Failed",
    severity: "1-Critical",
    stepToReproduce: [ "Open the login page", "Enter username", "Enter password", "Click Login"]
}