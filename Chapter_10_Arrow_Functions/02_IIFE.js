// IIFE - Immediately Invoked Function Expression - this function dosent need to be called it will call itself during defining the function

(function () {
    console.log("This function invoked while defining")
})();  // output: This function invoked while defining

// here we wrap the function under braces () and then we called that function by using ();


// we can invoke the arrow function as well:
   ( ()=> console.log("This is arrow function") )();
// |____________________________________________| |
//                        |                       |
//  assume this is a function name and            this is calling that function
                                 
// these functions are not reusable function and they dont need to called separately as they will be invoked at runtime