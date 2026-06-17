let testResults = ["Pass", "Fail", "Pass", "Skip"];

testResults.forEach( (element , index , array) => console.log(`Test ${index} => ${element} , ${array}`));

// Value of array parameter in above forEach Array method --> Pass,Fail,Pass,Skip

testResults.forEach( (result, index)=> console.log("Test " + index + "=> " + result));

//  This is a perfect example of a synchronous callback where the anonymous function will take the item 1 by 1