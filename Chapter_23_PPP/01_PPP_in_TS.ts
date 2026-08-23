class APIClient{

    // variables
    public baseURL: string;
    private apiKey: string;
    protected timeout: number;

    // constructor:
    constructor( baseUrl:string, apiKey:string, timeout:number ){
        this.baseURL = baseUrl;
        this.apiKey  = apiKey;
        this.timeout = timeout;
    }

    // method which will return header parameter for request
    private getAuthHeader():string{
        return "Bearer" + this.apiKey;
    }

    // method which will be called to send request with path variable
    public sendRequest(path: String):void{
        console.log("GET " + this.baseURL + path);
        console.log("Auth " + this.getAuthHeader());
        console.log("Timeout " + this.timeout + "ms");
    }
}


class UserAPIClient extends APIClient{

    getUsers():void{
        console.log( "Fetching users (timeout: " + this.timeout + "ms");
        console.log( "URL: "+ this.baseURL + "/users");
    }
}


let client = new APIClient("https://api.staging.com", "key_secret_123" , 5000);
console.log( "Base URL: " , client.baseURL );
client.sendRequest("/health");