
function cafe(item, callWhenTableIsReady){

    console.log(`Checking if ${item} is available or not`);
    console.log(`${item} is available`);
    
    callWhenTableIsReady();
}

//-------------------------------------------------------------------------------------------------------------------------------

// first way to send function as argument:
function callWhenTableisReady() {
    
    console.log("calling 9876543210");

}

cafe("Burger", callWhenTableisReady);

//-------------------------------------------------------------------------------------------------------------------------------

// Second way:
cafe("Pizza", function () {
    console.log("calling 8765432123");
})

//-------------------------------------------------------------------------------------------------------------------------------

//Third way:
cafe( "Momos" , ()=>console.log("calling 3543543") );

//-------------------------------------------------------------------------------------------------------------------------------

