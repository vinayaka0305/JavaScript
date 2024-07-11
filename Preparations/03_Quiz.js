// function display(){
//     var a = b = 5;
//     console.log(typeof a, a); //type of a is number and o/p is 5
//     console.log(typeof b, b); //type of b is number and o/p is 5
//     console.log("a is defined", typeof a !== undefined);//true;
//     console.log("b is definded", typeof b !== undefined);//true;
// }
// display();

/////////////////////////////////////////////////////////////////////////////

// var foo = function foo(){
//     console.log(foo === foo)
// }

// //The variable foo is declared and assigned a function.

// // The function is named foo within its own scope.

// //This means inside the function body,
// //foo can be used to refer to the function itself

// foo();
// Key Points
// Named Function Expression: The function foo is named and the name is available only
// within the function body.
// Outside of it, foo refers to the variable that holds the function.

// Self-Reference: Inside the function body, foo can be used to reference
//the function itself, which is why foo === foo evaluates to true.

////////////////////////////////////////////////////////////////////////////////////

// function outer() {
//   console.log("1");
//   setTimeout(() => {
//     console.log("2");
//   }, 0);
//   inner();
//   console.log("3");
//   function inner() {
//     console.log("4");
//   }
// }

// outer(); // 1 4 3 2
/////////////////////////////////////////////////////////////////////////////////


// var x = 1;
// function outer(){
//     console.log(x);

//     var x = 2;
//     function inner(){
//         console.log(x);
//     }
//     inner();
// }

// outer();

/////////////////////////////////////////////////////////////




function addMaker(x){
    function add(y){
        return y + x;
    }
    return add;
}

let g = 2;
let funF = addMaker(g);
// console.log(funF(3));

g = 4;
// console.log(funF(3));
// console.log(funF(8));

// Creating the funF function
// We set g = 2.
// We call addMaker(g) which is the same as calling addMaker(2).
// addMaker(2) creates an add function where x is 2. 
//This add function looks like this inside: function add(y){ return y + 2; }.
// addMaker(2) returns this add function.

// We store this returned add function in funF.

// Using funF
// Now, funF is a function that adds 2 to whatever number you give it.


// funF is a function that always adds 2 to its input because g was
// 2 when funF was created.

// Changing g later does not change what funF does.
//////////////////////////////////////////////////////////////

const obj1 = {a:10,b:20}
const obj2 = {c:30,d:40}

const mergeObj = {...obj1,...obj2};
const mergeObj2 = {obj1,obj2};

// console.log(mergeObj);//{ a: 10, b: 30, c: 40 }
// console.log(mergeObj2);//{ obj1: { a: 10, b: 20 }, obj2: { c: 30, d: 40 } }

///////////////////////////////////////////////////

function MyConstructor(){
    this.prop = 42  // Sets prop to 42 on the new object
    return{prop:99} //Returns a different object with prop set to 99
 }

let obj = new MyConstructor(); //obj is { prop: 99 }
// console.log(obj.prop)// Prints 99

// Summary:

// When a constructor function returns an object, 
// that returned object becomes the result of the new operation.

// MyConstructor explicitly returns {prop: 99}, so obj is {prop: 99}.

// As a result, obj.prop is 99.

////////////////////////////////////////////////////////////////////////////////

let counter = 0;

// let intervalId = setInterval(()=>{
//     counter++;
//     console.log(counter);
//     if(counter===5){
//         clearInterval(intervalId);
//     }
// },1000)
/////////////////////////////////////////////////////////////////////////////////

// var a = 5;

// function foo(){
//     console.log(a);
//     var a = 10;
//     console.log(a);
// }

// foo();
///////////////////////////////////////////////////////////////////////////////


function square(x){
    return x * x
}

function higherOrderFunction(num,callback){
    return callback(num);
}

// console.log(higherOrderFunction(5,square));

////////////////////////////////////////////////////////

// let person = {
//     name:"john",
//     age:30,
//     proffession:"Engineer"
// }

// console.log(person. hasOwnProperty('name'));

///////////////////////////////////////////////////////////////////

let re = /[-]/;

let target = "254-96-9163";

let result = target.split(re);

// console.log(document.write(result[0]+result[i])); // 25496
///////////////////////////////////////////////////////////////////////

function foo(){
    console.log("fooo");
}


var f2oo=function(){
    console.log("fooo")
}

f2oo(); 

////////////////////////////////////////////////


function debounce(func, delay) {
    let timeoutId;
  
    return function () {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(func, delay);
    };
  }
  
  function greet() {
    console.log('Hello!');
  }
  
  const debouncedGreet = debounce(greet, 2000);
  
  debouncedGreet();
  debouncedGreet();
  debouncedGreet();

/////////////////////////////////////////////

var b = 1;
function outer(){
    var b = 2;
    function inner(){
        b++;
        var b = 3;
        console.log(b);//because b is re-declared and assigned within the inner function.
    }
    inner();
}
outer();

/////////////////////////////////

// for(let i=0;i<5;i++){
//     setTimeout(()=>{
//         console.log(i);
//     },i * 1000)
// }