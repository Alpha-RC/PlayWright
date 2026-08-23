class Car{

    #engine;

    constructor(modelName , engineName){
        this.modelName = modelName;
        this.#engine = engineName;
    }

    getEngine(){
        return this.#engine;
    }

    setEngine(engineName){
        this.#engine = engineName;
    }
}


const tesla = new Car("Tesla1" , "V8");
console.log( tesla.getEngine() );   // V8

tesla.setEngine("V9");

console.log( tesla.getEngine() );   // V9