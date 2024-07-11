const descriptor = Object.getOwnPropertyDescriptor(Math, "PI");

// console.log(descriptor);
//output
// {
//     value: 3.141592653589793,
//     writable: false,
//     enumerable: false,
//     configurable: false
//   }

// The Object.getOwnPropertyDescriptor method in JavaScript
//provides a detailed description of a property on an object.
//  When you use it with Math.PI,
//it returns an object that tells you about the characteristics of the PI property.

//Here's a breakdown of what each part of the output means in an easy way:

//value: This is the actual value of the property.
//In this case, value: 3.141592653589793
//means that Math.PI is approximately 3.14, which is the mathematical constant π (pi).

//writable: This indicates whether you can change the value of the property.
// writable: false means that you cannot change Math.PI.
// If you try to set Math.PI to a different number, it won't work.

//enumerable: This tells you whether the property will show up when you list all properties
// of the object (like in a for...in loop or Object.keys).
//enumerable: false means that Math.PI won't show up in such listings.

//configurable: This indicates whether you can change the property's
// attributes (like turning writable to true or deleting the property).
//configurable: false means you cannot change these attributes or delete Math.PI.

//So, the Math.PI property is a fixed value of π that you can't change,
//won't show up in property listings, and can't be reconfigured or deleted.

const user = {
  name: "vinayaka",
  email: "vav6473@gmail.com",
  isLoggedIn: true,

  sayHi() {
    console.log("hiiii ");
  },
};

// console.log(Object.getOwnPropertyDescriptor(user)) // undefined
// console.log(Object.getOwnPropertyDescriptor(user,"name"))
// {
//     value: 'vinayaka',
//     writable: true,
//     enumerable: true,
//     configurable: true
//   }
Object.defineProperty(user, "name", {
  // writable:false,
  enumerable: false,
});

// for (const [key,value] of user) {
//     console.log(`${key}:${value}`) //TypeError: user is not iterable
// }

for (let [key, value] of Object.entries(user)) {
  if (typeof value !== "function") { // it not print function defination
    console.log(`${key}:${value}`); // name is iteratable because in the object property
    //we made enumerable false;
  }
}
