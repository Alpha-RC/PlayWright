function outer (){
    let variable = "hello";
    console.log("Outer Called")

    function inner(){
        console.log(variable);
    }

    return inner;
}

// calling outer function , as it returns something need to store it in variable
let inner_functin =  outer();  // Output: Outer Called
inner_functin(); // Output: hello


function makeCounter(start = 0){
    let count = start;

    return {
        increment(){count++},
        decrement(){count--},
        get() {return count;}
    }
}


// now we are calling makeCounter function - remember it return multiple functions so storing it in variable

let counter = makeCounter(0);

counter.increment();
counter.increment();
counter.increment();

console.log(counter.get()); // output: 3

counter.decrement();

console.log(counter.get()); // output: 2




