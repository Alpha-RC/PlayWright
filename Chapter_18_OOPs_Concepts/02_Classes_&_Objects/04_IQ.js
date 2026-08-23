class Browser{

    // paramaterized constructor:
    constructor(name){
        this.name = name;
        this.isOpen = true;
        console.log(name + " launched");
    }

    // methods
    startBrowser(){
        console.log("Starting the Browser");
    }


    closeBrowser(){
        console.log("Closing the Browser");
    }
}


let chrome = new Browser("Chrome");
let fireFox = new Browser("FireFox");


console.log(chrome.isOpen);