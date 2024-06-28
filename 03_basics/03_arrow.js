// this keyword refer to current context or current object

const user = {
    userName: "vinayaka",
    price: "1000",
    welcomeMessage: function () {
        console.log(`${this.userName} , welcome to our website`);
        console.log(this)
    }
}
//whatever the values in the current context it will provide that only

//  user.welcomeMessage(); //vinayaka , welcome to our website
//  user.userName = "av"; // here the current context changed (context means the value which are holding in the variables)
//  user.welcomeMessage(); //av , welcome to our website

// console.log(this); // output is object 
// it is the object which is in the browser and it is an window object or global object

// function one(){
//     let userName="vinayaka ab"
//     console.log(this.userName) //undefined
// }
// //this keyword in not used in function but used only in objects
// one();

// const one = function(){
//     let userName="vinayaka ab"
//     console.log(this.userName) //undefined
// }

// one();

// const one =()=>{
//     let userName = "vinayaka"
//     console.log(this.userName)
// }
// one();
//++++++++++++++++++++++ arrow function +++++++++++++++++++++++++++++++++

//example 1
const addTwo = (num1, num2) => {
    return num1 + num2;
}

//wraped inside the curley braces return keyword must be used
console.log(addTwo(3, 3)); //6

// example 2

const add2 = (num1, num2) => (num1 + num2)
// wrapped insed parantheses () return keyword not need

console.log(add2(3, 3)); //6

// example 3

const obj = () => ({
    userName: "vinayaka"
})

console.log(obj().userName) //vinayaka