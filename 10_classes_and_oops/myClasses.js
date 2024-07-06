// class User{
//     constructor(userName,email,password){
//         this.userName = userName
//         this.email = email
//         this.password = password
//     }

//     encryptPassword() {
//         return(`${this.password}abc`)
//     }
//     changeUserName(){
//         return(`${this.userName.toUpperCase()}`)
//     }
// }

// const userOne = new User("vinayaka","vav@gmail.com",123);

// console.log(userOne.encryptPassword());
// console.log(userOne.changeUserName());

/// behind the scene

// function User(userName,email,password){
//     this.userName = userName
//     this.email = email
//     this.password = password
// }

// User.prototype.encryptPassword = function(){
//     return(`${this.userName.toUpperCase()}`)
// }

// const userOne = new User("vinayaka","vav@gmail.com",123);
// console.log(userOne.encryptPassword());

////////////////////////// another example

function User(userName, email, password) {
  this.userName = userName;
  this.email = email;
  this.password = password;

  this.encryPassword = function () {
    return `${this.password}abc`;
  };

  this.chaneName = function(){
    return `${this.userName.toUpperCase()}`
  }
}

const userOne = new User("av", "av@gmail.com", 123);

console.log(userOne.encryPassword());
console.log(userOne.chaneName());

