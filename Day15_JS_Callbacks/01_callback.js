// suppose we hae below function which places an order

function placeOrder(orderItem, isOrderPlaced){

    console.log(`your order is: ${orderItem}`);
    
    isOrderPlaced();// so here we re calling back another function which is stored in callback parameters of this function
                    // so when placeOrder function gets called it needs 2 parameters one is 'item' where any data can be stored 
                    // and another is 'isOrderPlaced' which will store a function
}

//-------------------------------------------------------------------------------------------------------------------------------

// First way of callback

// we can create a function which will store the message that order is placed like below

function OrderPlaced(){
    console.log("Order placed successfully")
}

//
// now we can send this function as a argument like below:
placeOrder("Burger" , OrderPlaced);

/*
output:
your order is: Burger
Order placed successfully
*/

//-------------------------------------------------------------------------------------------------------------------------------

// second way - insted of function name, we can send whole function directly like below:

placeOrder("Pizza" , function(){
    console.log("Order placed successfully");
});

// so here Paramter 'Item' will store "Pizza" and and callback will store the anonymous function

/* 

output:
your order is: Pizza
your order is placed

*/

// we can send the arrow function as an argument also:
placeOrder( "Paneer Roll" , ()=> console.log("Order placed") );
//          |___________|   |______________________________|                 
//                |                        |
//          First argument  Arrow function as Second arument

/*
output:
your order is: Paneer Roll
Order placed

*/

//------------------------------------------------------------------------------------------------------------------

