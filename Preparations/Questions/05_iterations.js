// const user = {
//     firstName:"vinayaka",
//     lastName:"av",
//     email:"vav@gmail.com"
// }

// for (const key of Object.keys(user)) {
//     console.log(key+"=>"+user[key])
// }

// ////////////////////////////////////////////

// const users = [
//     { firstName: "Vinayaka", lastName: "AV", email: "vav@gmail.com" },
//     { firstName: "John", lastName: "Doe", email: "john.doe@example.com" },
//     { firstName: "Jane", lastName: "Smith", email: "jane.smith@example.com" }
// ]

// for(let key of users){
//     console.log(`${key.firstName} ${key.lastName} ${key.email}`)
// }
// /////////////////////////////////////////////////


// for(let i=0;i<10;i++){
//     if(i===5){
//         break;
//     }
//     console.log(i);
// }

// //////////////////////////////////////////////

// const arr = [1,2,3,4,5];

// Array.prototype.sum = function(){
//   let sum = 0;
//   for(let i =0;i<this.length;i++){
//     sum += this[i]
//   }
//   return sum;
// }

// let sum = arr.sum();
// console.log(sum);

// //////////////////////////////

// console.log(typeof (abcd))

// //////////////////////////



// const hellArr = [1, 2, 3, [4, 5, 6], 7, [8, 9, 10], 10];

// function flatArray(arr,n){
//     if(n===0)return arr;
//     const res = [];
//     for(let i=0;i<arr.length;i++){
//         if(typeof arr[i] === 'number'){
//           res.push(arr[i]);
//         }else{
//             res.push(...flatArray(arr[i],n-1))
//         }
//     } 
//     return res;
// }

// const result = flatArray(hellArr,1);
// // console.log(result);
// //////////////////////////////////////////////////////////


// class Person{
//     constructor(name,age){
//         this.name = name
//         this.age = age;
//     }
//     welcome(){
//         console.log(`hello ${this.name} ,yor are ${this.age} years old`)
//     }
// }

// class Student extends Person{
//     constructor(name,age){
//         super(name,age);
//     }
//     hello(){
//         super.welcome();
//     }
// }


// const std1 = new Student("vinayaka",28);
// console.log(std1);
// std1.welcome();

// const std2 = new Student("av",18);
// console.log(std2);
// std2.welcome();

//////////////////////////////////////////////////


// let score = 11;
// do {
//     console.log(score);
//     score++;
// } while (score<=10);

//////////////////////////////


let arr = [1,2,3,4,5];

// for(let i of arr){
//     console.log(i);
// }


// const greeting = "Hello world"

// for(let i of greeting){
//     if(i===""){
//         continue;
//     }
//     console.log(i);
// }

const map = new Map();

map.set("IN","india");
map.set("USA","united states of america");

console.log(map);

// for(let [key,val] of map){
//     console.log(key +" "+val);
// }


//////////////////////////////

// const coding = ["html", "css", "java", "js", "c++"];

// coding.forEach((val)=>{
//     console.log(val);
// })


//////////////////////////////

const myCoding = [
    {
        language: "JS",
        languageFileName: "js"
    },
    {
        language: "JAVA",
        languageFileName: "java"
    },
    {
        language: "PYTHON",
        languageFileName: "py"
    }
]

// myCoding.forEach((val)=>{
//     console.log(val.language+" "+val.languageFileName)
// })

//////////////////////////////////////////////////////////////


const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
];

const ans = books.filter((val)=>{
    return val.publish >=2009;
})

console.log(ans);

const shoppinCart = [
    {
        name: "js",
        price: 2999,
    },
    {
        name: "py",
        price: 999,
    },
    {
        name: "Data science",
        price: 12999,
    },
]

const total = shoppinCart.reduce((acc,int)=>{
    return acc+int.price;
},0)

console.log(total)

