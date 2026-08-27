function logged(originalMethod: any , context: any):any{
    
    return function(this:any,...args:any[]){
        console.log("Called");
        return originalMethod.call(this , ...args);
    }
    
}

class Greeter{
    
    @logged
    hello(){
        return "Hi";
    }
}

let r = new Greeter().hello();
console.log(r);