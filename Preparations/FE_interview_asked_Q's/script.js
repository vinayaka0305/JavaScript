// 'use strict'

let arr = ["CA", "THOR", "IM", "AM"];

let body = document.querySelector("body");
let ul = document.createElement("ul");
arr.forEach((val) => {
  let li = document.createElement("li");
  li.textContent = val;
  ul.appendChild(li);
});
body.appendChild(ul);

console.log("B" - "A"); //NaN

//this keyword
//global context;
console.log(this); // window

// function context;
function x() {
  console.log(this); // window object // in strict mode undefined
}
x();

// Object method context;

const obj = {
  method: function () {
    console.log(this); /// `this` refers to `obj`
  },
};

obj.method();

// constructor function context;

function Person(userName) {
  this.userName = userName; // 'this' refers to the newely created object;
}

const person = new Person("Vinayaka");
console.log(person.userName);

// Arrow function

const obj1 = {
  method: function () {
    const arrowFnc = () => {
      console.log(this); // this referce parent object
    };
    arrowFnc();
  },
};
obj1.method();

//////////////////////////////////////////////////////////////
// call and apply
// function greet(){
//     console.log(this.name)
// }

// const user = {name:"vinayka"};
// greet.call(user);

// const user2 = ["av"];
// greet.apply[user2]

// bind


// function greet(geerting){
//     console.log(geerting,this.name)
// }

// const user = {name:'av'}
// const greetUser = greet.bind(user,"hello");
// greetUser();

////////////////////////////////////////////////////////////////////////////////////


console.log(a);// at this point a is not defined so it prints undefined;

console.log(b); // this line tries to print the value of b 
//at this point log we get refrence error;

var a = b = 5;
// b= 5
//here b = 5 assigns the value of 5 to b ,

// here b becomes global variable because it is not declared with
// let ,var, or const 

// var a = 5;

// declares a with a keyword var and assigns a value 5;
//not a local variable or global variable

