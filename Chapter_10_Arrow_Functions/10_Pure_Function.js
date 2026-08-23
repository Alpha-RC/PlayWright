// Pure Functions
// A pure function always returns the same output for the same input and has no side effects.

// ✅ Pure — no side effects, predictable output
function calculatePassRate(total, passed) {
    return ((passed / total) * 100).toFixed(2);
}

console.log(calculatePassRate(10, 7));
console.log(calculatePassRate(10, 7));


// ❌ Impure — depends on external state

let threshold = 70;

function isPassing(score){
    return score >= threshold;
}

console.log( isPassing(threshold) ); // output: true

// in above code we are declaring one variable threshold = 70

// now we have a function called isPassing which asks one parameter 'score' and compare it with theshold variable

// now while calling we are sending out theshold variable as an argument 

// so this is basically means we are comparing variable value to itself an returning its result
