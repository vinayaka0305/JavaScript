const timer = (a) => {
  return new Promise((res) =>
    setTimeout(() => {
      res(a);
    }, Math.random() * 100)
  );
};

// const all = Promise.all([timer("first"), timer("second")]).then((data) =>
//   console.log(data)
// );

// const timer = a => {: This defines a function named timer that takes one parameter a.
//     return new Promise(res =>: The function returns a new Promise.
// A Promise is an object representing the eventual completion
// (or failure) of an asynchronous operation.
//     setTimeout(() => {: Inside the Promise, there is a setTimeout function.
//      This is used to delay the execution of some code.
//     res(a): After the delay, the Promise is resolved with the value a.
//     , Math.random() * 100): The delay time is a random number
// between 0 and 100 milliseconds.
//     Using Promise.all


// const all = Promise.all([: This creates a Promise that will resolve when all of the Promises in the array resolve.

//     timer('first'), timer('second'): These are two Promises created by calling the timer function with 
// the arguments 'first' and 'second'.
//Each will resolve after a random delay.

//     ]).then((data) => console.log(data)): When all the Promises resolve, 
//the .then method is called. It takes a function as an argument. 
//This function receives an array data containing the resolved values of the input Promises (in the same order).


// The timer function is called twice, once with 'first' and once with 'second'. Each call returns a Promise that resolves after a random delay.

// Promise.all waits for both timer Promises to resolve.

// When both Promises are resolved, Promise.all resolves and the .then method logs the resolved values (an array ['first', 'second']) to the console.

///////////////////////////////////////////////////////////////////////////////////////


// When a closure is called, it retains access to its own set of local variables from the scope in which it was created. Each closure maintains a unique reference to its own variables.

// To illustrate this, consider the following example:

function creatClosure(value){
    return function(){
        return value;
    }
}

const closure1 = creatClosure(1)
const closure2 = creatClosure(2);

// console.log(closure1());
// console.log(closure2());

// createClosure(1) creates a closure that retains access to the local variable value with the value 1.

// createClosure(2) creates a different closure that retains access to a different local variable value with the value 2.

// Each closure has its own separate environment and does not reuse the local variables from other closures

/////////////////////////////////////////////////////////////////////////

function Person(name){
    this.name = name;
}
// function Person(name) {: This defines a function named Person that takes one parameter name.
//     this.name = name;: Inside the function, this refers to the object that will be created. This line sets the name property of that object to the value passed in as name.

Person.prototype.greet=function(){
    console.log(`hello ${this.name} !`)
}

// Person.prototype.greet = function() {: This adds a new method called greet to the prototype of Person. This means all instances of Person will have access to this method.

//     console.log(hello ${this.name} !);: Inside the greet method, this refers to the instance of Person that called the method. This line prints a greeting message that includes the name property of that instance.

let person = new Person("vinayaka");

// let person = new Person("vinayaka");: This creates a new instance of Person with the name "vinayaka" and assigns it to the variable person.
person.greet();
// person.greet();: This calls the greet method on the person instance. The method prints hello vinayaka ! to the console.

//////////////////////////////////////////////////////////////////////////////////////

Promise.resolve().then(()=>console.log("a")).then(()=>console.log("b")).then(console.log())

///////////////////////////////////////////////////////////////////////////////////////////


let o = {
  m:function(a,b){
    console.log(a+b);
  }
}
o['m'](3,4);

// Explanation
// Object o: Defines an object with a method m.
// o['m']: Accesses the method m using bracket notation.
// (3, 4): Calls the method m with arguments 3 and 4.
// console.log(a + b);: Outputs the sum of a and b to the console (7 in this case).


///////////////////////////////////////////////////////////////////////////////////////////




