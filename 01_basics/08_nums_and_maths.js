const score = 400;
//here the javascript automatically detected the type of the score is number
// we and definet the type explicitly also
const accNum = new Number(100);
// console.log(accNum);

// console.log(accNum.toString().length);//3
// console.log(accNum.toFixed(2));//100.00 

const newNum = 24.8773
// console.log(newNum.toPrecision(2));// 25

const hundreds = 100000;
// console.log(hundreds.toLocaleString('en-IN'));// 1,00,000

//+++++++++++++++++++++++++++++++++Math+++++++++++++++++++++++++++++

// console.log(Math);

// console.log(Math.abs(-1));// 1 (only changes -1 to 1)
// console.log(Math.round(10.6)); // 11
// console.log(Math.ceil(4.2)) // 5 
// console.log(Math.floor(4.2)) // 4
// console.log(Math.min(1,2,3,4));//1
// console.log(Math.max(1,2,3,4));//4

// console.log(Math.random()); // the values in between 0 and 1
// console.log(Math.random() * 10);//3.71558017254126
// console.log(Math.floor(Math.random() * 10) + 1); //6

const min = 10;
const max = 20;
console.log(Math.floor(Math.random() * (max - min + 1)) + min) // between 10 - 20 any random number


