class PlaywrightConfig{

    readonly baseURL: string;
    readonly timeout: number;
    readonly retries: number;

    constructor(baseUrl:string, timeout:number , retries:number){

        this.baseURL = baseUrl;
        this.timeout = timeout;
        this.retries = retries;

    }

    showConfig():void{
        console.log( "URL: " + this.baseURL );
        console.log( "Timeout: " + this.timeout + "ms" );
        console.log( "Retries: " + this.retries );
    }
}


let config = new PlaywrightConfig("https://statging.app.com" , 30000 , 2);
config.showConfig();

// now for object config as PlaywrightConfig class variables are readonly we cannot assign/override their values
// config.baseURL = "https://other.com"; //--> Cannot assign to 'baseURL' because it is a read-only property.


