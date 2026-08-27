function Log(target: any , methodName:string , descripter:PropertyDescriptor){
    
    const original = descripter.value;

    descripter.value = function (...args: any[]){
        console.log(`Called ${methodName} with args:` , args);
        return original.apply(this , args);
    }

}


class Calculator{

    @Log
    add(a: number , b: number):number{
        return a+b;
    }
}

const calc = new Calculator();

calc.add(2,4);