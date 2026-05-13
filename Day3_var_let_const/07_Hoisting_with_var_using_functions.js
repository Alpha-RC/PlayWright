function getUserStatus()
{
    console.log(status_code); // Here javascript will create a varibale named status_code in backend because at line 5 we are declaring this varibale
                              // and it will initialize it with undefined value. So, the output of this line will be undefined.

                              // but if we dont declare the varibale it will give us reference error because there is no variable named status_code in 
                              // backend.
    
    var status_code = "Active"; // declaration and initialization of the variable status_code. This line will be executed after the first 
                                // console.log(status_code) line, so it will not affect the output of that line.

    console.log(status_code); // Output: Active
}


getUserStatus(); // Calling the function.