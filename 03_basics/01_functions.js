//functions are one of the fundamental building blocks of the js
//JavaScript is similar to a procedure — a set of statements that performs a task 


// function declaration

function sayMyName() {
    console.log("v");
    console.log("i");
    console.log("n");
    console.log("a");
    console.log("y");
}

// sayMyName //it is refrence of a function
// () // this is execute

// sayMyName();

// function sum (number1, number2){ // these are parameters given as input to function
//     console.log(number1 + number2);
// }

// sum(10,20)// here we are passing the arguments in function call

function square(number) {
    return number * number
    // console.log("hi");//Unreachable code detected
    //after the returning the function the nextline code does't execute
}

const result = square(2)
// console.log("result : ", result); // 4

//example:
function loginUserMsg(userName) {
    if (userName === undefined) {
        return "pls enter userName";
    }
    return `${userName} just loged in`
}

// console.log(loginUserMsg("vinayaka"));
// console.log(loginUserMsg());//undefined


//+++++++++++++++++++++++ rest Operator ++++++++++++++++++++++++++++++++

// when mutilple inputs give to a function we have to restoperator 
// ... all the given inputs are stored in form of array

//example

// function calculateCartPrice(...num) { // rest operator
//     return num
// }

// console.log(calculateCartPrice(100, 400, 300, 1000));//[ 100, 400, 300, 1000 ]


function calculateCartPrice(val1, val2, ...num) { // rest operator
    return num
}

// console.log(calculateCartPrice(100, 400, 300, 1000));//[300, 1000] becuase
// the first val1 taken 100, and val2 taken 400

//++++++++++++++++++++ passing object to a function +++++++++++++++

const user = {
    fullName: "vinayaka",
    place: "DVG"
}

function handleOject(anyObj) {
    console.log(`user name is ${anyObj.fullName} and Place ${anyObj.place}`);
}

handleOject(user);

//++++++++++++++ passing array to function ++++++++++++++++++++++++++

const arr = [10, 20, 30, 40];

function returnSecondValue(getArr) {
    return getArr[1];
}

//console.log(returnSecondValue(arr)); //20

// console.log(returnSecondValue([10, 20, 30, 40])); // 20
//directly passing an arr

//++++++++++++++++++++++++++++++ factorial function ++++++++++++++++++++++
const fac = function factorial(n) {
    return n < 2 ? 1 : n * factorial(n - 1)
}

console.log(fac(5));


