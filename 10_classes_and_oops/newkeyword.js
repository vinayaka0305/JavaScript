// new keyword uses

function createUser(userName, score) {
  (this.userName = userName), (this.score = score);
}

createUser.prototype.incerement = function () {
  this.score++;
};

createUser.prototype.printMe = function () {
  console.log(this.score);
};

const vinayaka = new createUser("vinay", 50);
const av = new createUser("av", 55);

// vinayaka.printMe();
// av.printMe();
vinayaka.incerement();
console.log(vinayaka.score); //51
av.incerement();
console.log(av.score); //56

/*

Here's what happens behind the scenes when the new keyword is used:

A new object is created: The new keyword initiates the creation of a new JavaScript object.

A prototype is linked: The newly created object gets linked to the prototype property of the constructor function.
 This means that it has access to properties and methods defined on the constructor's prototype.

The constructor is called:
 The constructor function is called with the specified arguments and this is bound to the newly created object.
 If no explicit return value is specified from the constructor, 
JavaScript assumes this, the newly created object, to be the intended return value.

The new object is returned: After the constructor function has been called, 
if it doesn't return a non-primitive value (object, array, function, etc.), 
the newly created object is returned.

*/
