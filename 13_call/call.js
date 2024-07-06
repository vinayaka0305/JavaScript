// In JavaScript,

//the call method is used to invoke a function with a
// -pecific this value and arguments provided individually.

//  It's a way to call a function and explicitly set the context (this) for that function.

function setUserName(userName) {
  this.userName = userName;
  console.log("called");
}

function createUser(userName, email, password) {
  setUserName.call(this, userName);
  //Using call to set the context to the current object
  this.email = email;
  this.password = password;
}

const userOne = new createUser("vinyaka", "vav@gmail.com", 1234);
console.log(userOne);
