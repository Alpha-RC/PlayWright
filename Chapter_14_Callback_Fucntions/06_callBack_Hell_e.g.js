// ============================================================================
// CALLBACK HELL / PYRAMID OF DOOM — 24-step E2E checkout journey
// ----------------------------------------------------------------------------
// Real QA Scenario: full end-to-end purchase flow on app.vwo.com
//   open browser -> login -> search -> add to cart -> checkout -> pay -> logout
//
// Every step is async (setTimeout = network/UI wait). Because each step only
// knows it is "done" by calling its callback, the ONLY way to run them in order
// is to nest the next step inside the previous one's callback.
//
// 24 nested callbacks => the code drifts further and further RIGHT on the
// screen. That ever-growing indentation is the "Pyramid of Doom".
// ============================================================================


// ---- Step functions: each takes a callback, waits, logs, then calls back ----

function openBrowser(callback) {
    setTimeout(function () {
        console.log("Step 01: Chrome browser opened");
        callback();
    }, 500);
}


function maximizeWindow(callback) {
    setTimeout(function () {
        console.log("Step 02: Window maximized");
        callback();
    }, 300);
}

function navigateToHome(callback) {
    setTimeout(function () {
        console.log("Step 03: Navigated to https://app.vwo.com");
        callback();
    }, 800);
}

function acceptCookies(callback) {
    setTimeout(function () {
        console.log("Step 04: Cookie banner accepted");
        callback();
    }, 300);
}

function goToLoginPage(callback) {
    setTimeout(function () {
        console.log("Step 05: Login page loaded");
        callback();
    }, 700);
}

function enterUsername(callback) {
    setTimeout(function () {
        console.log("Step 06: Username entered");
        callback();
    }, 400);
}

function enterPassword(callback) {
    setTimeout(function () {
        console.log("Step 07: Password entered");
        callback();
    }, 400);
}

function clickLogin(callback) {
    setTimeout(function () {
        console.log("Step 08: Login button clicked");
        callback();
    }, 600);
}

function waitForDashboard(callback) {
    setTimeout(function () {
        console.log("Step 09: Dashboard loaded");
        callback();
    }, 900);
}

function searchProduct(callback) {
    setTimeout(function () {
        console.log("Step 10: Searched for 'wireless mouse'");
        callback();
    }, 500);
}

function applyFilter(callback) {
    setTimeout(function () {
        console.log("Step 11: Filter 'Price: Low to High' applied");
        callback();
    }, 400);
}

function selectProduct(callback) {
    setTimeout(function () {
        console.log("Step 12: Product selected from results");
        callback();
    }, 400);
}

function viewProductDetails(callback) {
    setTimeout(function () {
        console.log("Step 13: Product details page opened");
        callback();
    }, 500);
}

function addToCart(callback) {
    setTimeout(function () {
        console.log("Step 14: Product added to cart");
        callback();
    }, 400);
}

function openCart(callback) {
    setTimeout(function () {
        console.log("Step 15: Cart opened");
        callback();
    }, 300);
}

function updateQuantity(callback) {
    setTimeout(function () {
        console.log("Step 16: Quantity updated to 2");
        callback();
    }, 400);
}

function proceedToCheckout(callback) {
    setTimeout(function () {
        console.log("Step 17: Proceeded to checkout");
        callback();
    }, 600);
}

function enterShippingAddress(callback) {
    setTimeout(function () {
        console.log("Step 18: Shipping address entered");
        callback();
    }, 500);
}

function selectShippingMethod(callback) {
    setTimeout(function () {
        console.log("Step 19: Shipping method 'Express' selected");
        callback();
    }, 400);
}

function selectPaymentMethod(callback) {
    setTimeout(function () {
        console.log("Step 20: Payment method 'Card' selected");
        callback();
    }, 400);
}

function enterCardDetails(callback) {
    setTimeout(function () {
        console.log("Step 21: Card details entered");
        callback();
    }, 500);
}

function applyCoupon(callback) {
    setTimeout(function () {
        console.log("Step 22: Coupon 'SAVE10' applied");
        callback();
    }, 400);
}

function placeOrder(callback) {
    setTimeout(function () {
        console.log("Step 23: Order placed");
        callback();
    }, 800);
}

function verifyOrderConfirmation(callback) {
    setTimeout(function () {
        console.log("Step 24: Order confirmation #VWO-99213 verified");
        callback();
    }, 500);
}


// ============================================================================
// 👇 THE PYRAMID OF DOOM — 24 callbacks nested inside each other.
//    Notice the indentation marching to the right. This is unmaintainable:
//    - Hard to read (where does step 12 end?)
//    - Hard to add/remove a step (re-indent everything below)
//    - No central error handling (each level would need its own try/catch)
//    - "Inversion of control" — you HAND your next step to each function and
//      trust it to call back exactly once.
// ============================================================================

openBrowser(function () {
    maximizeWindow(function () {
        navigateToHome(function () {
            acceptCookies(function () {
                goToLoginPage(function () {
                    enterUsername(function () {
                        enterPassword(function () {
                            clickLogin(function () {
                                waitForDashboard(function () {
                                    searchProduct(function () {
                                        applyFilter(function () {
                                            selectProduct(function () {
                                                viewProductDetails(function () {
                                                    addToCart(function () {
                                                        openCart(function () {
                                                            updateQuantity(function () {
                                                                proceedToCheckout(function () {
                                                                    enterShippingAddress(function () {
                                                                        selectShippingMethod(function () {
                                                                            selectPaymentMethod(function () {
                                                                                enterCardDetails(function () {
                                                                                    applyCoupon(function () {
                                                                                        placeOrder(function () {
                                                                                            verifyOrderConfirmation(function () {
                                                                                                console.log("\n✅ TEST COMPLETE — full checkout journey passed!");
                                                                                            });
                                                                                        });
                                                                                    });
                                                                                });
                                                                            });
                                                                        });
                                                                    });
                                                                });
                                                            });
                                                        });
                                                    });
                                                });
                                            });
                                        });
                                    });
                                });
                            });
                        });
                    });
                });
            });
        });
    });
});

// ----------------------------------------------------------------------------
// The fix (next chapters): Promises + .then() chaining flattens this pyramid,
// and async/await makes it read like 24 plain sequential lines. Same behavior,
// zero nesting.
// ----------------------------------------------------------------------------

// -----------------------------------------------------------------------------------------------------------------------------

// below are the function written in such way that every function knows the nest function to execute

function openBrowser1(maximizeWindow1) {
    setTimeout(() => {
        console.log("Step 01: Chrome browser opened");
        maximizeWindow1(navigateToHome1);
    }, 500);
}

function maximizeWindow1(navigateToHome1) {
    setTimeout(() => {
        console.log("Step 02: Window maximized");
        navigateToHome1(acceptCookies1);
    }, 300);
}

function navigateToHome1(acceptCookies1) {
    setTimeout(() => {
        console.log("Step 03: Navigated to https://app.vwo.com");
        acceptCookies1(goToLoginPage1);
    }, 800);
}

function acceptCookies1(goToLoginPage1) {
    setTimeout(() => {
        console.log("Step 04: Cookie banner accepted");
        goToLoginPage1(enterUsername1);
    }, 300);
}

function goToLoginPage1(enterUsername1) {
    setTimeout(() => {
        console.log("Step 05: Login page loaded");
        enterUsername1(enterPassword1);
    }, 700);
}

function enterUsername1(enterPassword1) {
    setTimeout(() => {
        console.log("Step 06: Username entered");
        enterPassword1(clickLogin1);
    }, 400);
}

function enterPassword1(clickLogin1) {
    setTimeout(() => {
        console.log("Step 07: Password entered");
        clickLogin1(waitForDashboard1);
    }, 400);
}

function clickLogin1(waitForDashboard1) {
    setTimeout(() => {
        console.log("Step 08: Login button clicked");
        waitForDashboard1(searchProduct1);
    }, 600);
}

function waitForDashboard1(searchProduct1) {
    setTimeout(() => {
        console.log("Step 09: Dashboard loaded");
        searchProduct1(applyFilter1);
    }, 900);
}

function searchProduct1(applyFilter1) {
    setTimeout(() => {
        console.log("Step 10: Searched for 'wireless mouse'");
        applyFilter1(selectProduct1);
    }, 500);
}

function applyFilter1(selectProduct1) {
    setTimeout(() => {
        console.log("Step 11: Filter 'Price: Low to High' applied");
        selectProduct1(viewProductDetails1);
    }, 400);
}

function selectProduct1(viewProductDetails1) {
    setTimeout(() => {
        console.log("Step 12: Product selected from results");
        viewProductDetails1(addToCart1);
    }, 400);
}

function viewProductDetails1(addToCart1) {
    setTimeout(() => {
        console.log("Step 13: Product details page opened");
        addToCart1(openCart1);
    }, 500);
}

function addToCart1(openCart1) {
    setTimeout(() => {
        console.log("Step 14: Product added to cart");
        openCart1(updateQuantity1);
    }, 400);
}

function openCart1(updateQuantity1) {
    setTimeout(() => {
        console.log("Step 15: Cart opened");
        updateQuantity1(proceedToCheckout1);
    }, 300);
}

function updateQuantity1(proceedToCheckout1) {
    setTimeout(() => {
        console.log("Step 16: Quantity updated to 2");
        proceedToCheckout1(enterShippingAddress1);
    }, 400);
}

function proceedToCheckout1(enterShippingAddress1) {
    setTimeout(() => {
        console.log("Step 17: Proceeded to checkout");
        enterShippingAddress1(selectShippingMethod1);
    }, 600);
}

function enterShippingAddress1(selectShippingMethod1) {
    setTimeout(() => {
        console.log("Step 18: Shipping address entered");
        selectShippingMethod1(selectPaymentMethod1);
    }, 500);
}

function selectShippingMethod1(selectPaymentMethod1) {
    setTimeout(() => {
        console.log("Step 19: Shipping method 'Express' selected");
        selectPaymentMethod1(enterCardDetails1);
    }, 400);
}

function selectPaymentMethod1(enterCardDetails1) {
    setTimeout(() => {
        console.log("Step 20: Payment method 'Card' selected");
        enterCardDetails1(applyCoupon1);
    }, 400);
}

function enterCardDetails1(applyCoupon1) {
    setTimeout(() => {
        console.log("Step 21: Card details entered");
        applyCoupon1(placeOrder1);
    }, 500);
}

function applyCoupon1(placeOrder1) {
    setTimeout(() => {
        console.log("Step 22: Coupon 'SAVE10' applied");
        placeOrder1(verifyOrderConfirmation1);
    }, 400);
}

function placeOrder1(verifyOrderConfirmation1) {
    setTimeout(() => {
        console.log("Step 23: Order placed");
        verifyOrderConfirmation1(testComplete1);
    }, 800);
}

function verifyOrderConfirmation1(testComplete1) {
    setTimeout(() => {
        console.log("Step 24: Order confirmation #VWO-99213 verified");
        testComplete1();
    }, 500);
}

function testComplete1() {
    console.log("🎉 Test Execution Completed");
}

// Start execution
openBrowser1(maximizeWindow1);