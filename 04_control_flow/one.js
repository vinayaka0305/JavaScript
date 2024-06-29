// if

// single = means asignment operator
// const isLoggesIn = true (means we have assigned a true value inside the isLoggedIn variable)

// double == means it checking the two values 

// triple equla or strict equal === it checks the data type also
// if(2 == "2"){
//     console.log("executed"); //executed
// }

// if(2==="2"){
//     console.log("executed"); // no iuput bcz the condition is false
// }

// shorthand notation
let balance = 200;
if(balance>100) console.log("executed");

const userLoggedIn = true;
const debitCard = true;

if(userLoggedIn && debitCard){
    console.log("allow to buy"); // both left and right must be true
}
const userLoggedInFromGoogle = true;
const userLoggedInFromEmail = false;

if(userLoggedInFromEmail || userLoggedInFromGoogle){
    console.log("logged in") // if any one true it will execute
}