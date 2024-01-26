class BankAccount {
    constructor(accountNumber, accountHolderName, balance = 0) {
      this.accountNumber = accountNumber;
      this.accountHolderName = accountHolderName;
      this.balance = balance;
    }
  
    deposit(amount) {
      if (amount > 0) {
        this.balance += amount;
        console.log(`Deposited ${amount} into ${this.accountHolderName}'s account. New balance: ${this.balance}`);
      } else {
        console.log("Invalid deposit amount. Please deposit a positive amount.");
      }
    }
  
    withdraw(amount) {
      if (amount > 0 && amount <= this.balance) {
        this.balance -= amount;
        console.log(`Withdrawn ${amount} from ${this.accountHolderName}'s account. New balance: ${this.balance}`);
      } else {
        console.log("Invalid withdrawal amount or insufficient funds.");
      }
    }
  
    transfer(amount, targetAccount) {
      if (amount > 0 && amount <= this.balance) {
        this.balance -= amount;
        targetAccount.balance += amount;
        console.log(`Transferred ${amount} from ${this.accountHolderName}'s account to ${targetAccount.accountHolderName}'s account.`);
        console.log(`${this.accountHolderName}'s new balance: ${this.balance}`);
        console.log(`${targetAccount.accountHolderName}'s new balance: ${targetAccount.balance}`);
      } else {
        console.log("Invalid transfer amount or insufficient funds.");
      }
    }
  }
  
  // Create instances of the BankAccount class
  const account1 = new BankAccount(12345, "John Doe", 1000);
  const account2 = new BankAccount(67890, "Jane Smith", 500);
  
//   // Perform operations such as depositing, withdrawing, and transferring money
//   account1.deposit(200);
//   account1.withdraw(50);
  
//   account2.deposit(100);
//   account2.transfer(50, account1);
  