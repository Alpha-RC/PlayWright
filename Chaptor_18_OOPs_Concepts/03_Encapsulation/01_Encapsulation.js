class BankAccount{

    #bankBalance = 0;   //--> Private field

    // creating a method which will get the deposite amount and add in above private varibale
    deposit(amount){
        this.#bankBalance += amount;
    }

    // creating another method which will return the bank balance
    getBalance(){
        return this.#bankBalance;
    }
}

const account = new BankAccount();

account.deposit(5000);
console.log("Bank Balance:" , account.getBalance() );    // Bank Balance: 5000

// here we cannot access bankBalance field directly using object
console.log( account.bankBalance ); // this will be undefined
// console.log( account.#bankBalance); // this will be SyntaxError: Private field '#bankBalance' must be declared in an enclosing class


// so this is why we need to cretae methods in order to access provate varibles and thi concept is known as "Encapsulation".