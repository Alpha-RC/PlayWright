enum Browser {

    Chrome = "chrome",
    Firefox = "firefix",
    Safari = "safari",
    Edge = "edge"

}


function launchBrowser(browser: Browser):void{

    switch (browser) {

        case Browser.Chrome:
            console.log("Launching Chromium (Chrome v120)");
            break;
        
        case Browser.Firefox:
            console.log("Launching Gecko (FireFox v115)");
            break;
        
        case Browser.Safari:
            console.log("Launching WebKit (Safari v17)");
            break;
        
        case Browser.Edge:
            console.log("Launching Chromium (Chrome v120)");
            break;
    }
}

launchBrowser(Browser.Chrome);