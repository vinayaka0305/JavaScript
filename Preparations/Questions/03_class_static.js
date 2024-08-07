// class Account {
//   static accCount = 0;
//   static totalBalance = 0;
//   constructor(accNum, balance) {
//     this.accNum = accNum;
//     this.balance = balance;
//     Account.accCount += 1;
//     Account.totalBalance += balance;
//   }

//   static returnTotalAccounts() {
//     return Account.accCount;
//   }

//   static returnTotalBalance() {
//     return Account.totalBalance;
//   }
// }

// let user1 = new Account("newton110", 1000);
// let user2 = new Account("newton111", 2000);

// let totalBalance = Account.returnTotalBalance();
// let totalAcc = Account.returnTotalAccounts();
// console.log(totalBalance);
// console.log(totalAcc);
//////////////////////////////////////////////////////////////



class User{
    constructor(firstName,midName,lastName,age){
        this.firstName = firstName;
        this.midName = midName;
        this.lastName = lastName;
        this.age = age;
    }

    getFullName(){
        return `${this.firstName} ${this.midName} ${this.lastName}`
    }

    editName(newName){
        let myName = newName.split(' ');
        this.firstName = myName[0];
        this.midName = myName[1];
        this.lastName = myName[2]
    }
}

let user1 = new User('vinayaka',' ','av','28');
console.log(user1.getFullName());
user1.editName("vinayaka achar veerachari")
console.log(user1.getFullName());


///////////////////////////////////////////


class Account{

    static accCount = 0;
    static accBalace = 0;

    constructor(accNum,balance){
        this.accNum = accNum;
        this.balance = balance;

        Account.accCount += 1;
        Account.accBalace += balance;
    }

    static returnAccCount(){
       return Account.accCount;
    }

    static returnTBalance(){
       return Account.accBalace;
    }
}

const u1 = new Account("1222",2000);
const u2 = new Account("122332",2000);
const u3 = new Account("122222",4000);

const count = Account.returnAccCount();
console.log(count);
const bl = Account.returnTBalance();
console.log(bl);