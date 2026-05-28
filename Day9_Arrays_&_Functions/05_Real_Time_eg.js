let browser = ["Chrome","firefox","safari","opera","edge"];

console.log(`lenght of array: ${browser.length}`);      // output: lenght of array: 5
console.log(browser);                                   // output: [ 'Chrome', 'firefox', 'safari', 'opera', 'edge' ]

let removedItem = browser.pop();                        // this will remove the last item from array and, we can store the removed item also

console.log(`Removed item from array: ${removedItem}`); //output: Removed item from array: edge
console.log(`current array: ${browser}`);               //output: current array: Chrome,firefox,safari,opera

let removed =  browser.shift();                         // this will remove the first item from array
console.log(`Removed item from array: ${removed}`);     // output: Removed item from array: Chrome
console.log(`current array: ${browser}`);               // output: current array: firefox,safari,opera

//====================================================================================================================================

// iterate over array using for loop:

for (let i = 0; i < browser.length; i++) 
{
    console.log(browser[i]);
    
    if(browser[i]==="opera")
    {
        console.log("opera is removed from selenium");
    }
}

//====================================================================================================================================

