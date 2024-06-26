//the data are divided on the basis how all data's in memory are stored and how you can access data's 
//by this only the data types are divided

//primitive 
//Primitives are call by values means the original refrence memory address is not provided
//but the copy will provided and what ever changes is there it will change in the copy only

// 1.String
// 2.Number
// 3.Boolean
// 4.null = > means empty not zero
// 5.undefined
// 6.BigInt
// 7.sysmbol => it uses to make any value to unique values

// non-primitive or refrence type
// 1.Arrays
// 2.Objects
// 3.Functions

// javaScript is dynamically typed language

//ex of symbol
// const id = Symbol("123")
// const anoterId = Symbol("123")

// console.log(id === anoterId)

// ex of big int
// const bigNumber = 1223445883333333n

// const hero = ["roger","tony","thor"]

// const superWomen = {
//     name : "natasha",
//     aka : "BlackWindow"
// }

// const action = function(){
//     console.log("attacking")
// }

// console.log(typeof(bigNumber), "Biggg");// bigint

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// there are two types of memory 
//1.stack (primitive) when ever the stack used, the variable that we decelared we get a copy of that

//2.Heap (non-primitive)
// what the defines in heap we get the original (mean whatever changes it reflect in original)
// refrence of that array or obj 

//examples 1.primitive

let myName = "vinayaka";

let anotherName = myName;
anotherName = "av"

console.log(myName)//vinayaka
console.log(anotherName);//av

//2 non-primitive

let userOne = {
    name : "Vinayaka",
    emailId :"vav6473@gmail.com"
}

let userTwo = userOne;

userTwo.emailId = "av@gmail.com"

console.log(userOne.emailId);//av@gmail.com
console.log(userTwo.emailId);//av@gmail.com
