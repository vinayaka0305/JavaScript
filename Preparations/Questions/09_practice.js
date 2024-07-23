(function name(){
    console.log("hi")
})();

((name)=>{
    console.log(`hi ${name}`)
})("vinayaka")
////////////////////////


const random = Math.round(Math.random() * 10)+1;
console.log(random);

/////////////////////////////////////

let a = null;
let val = Number(a)
console.log(val)

////////////////////////////////

function AppointMent(appDate){
    this.date = new Date(appDate)
    this.location = '';

    this.setLoaction=function(location){
        this.location = location;
    }

    this.getLocation = function(){
        return this.location
    }

    this.toString = function(){
        return `Appointment on ${this.date.toDateString()} at ${this.location}`
    }
}

let appDate = "2024-7-19"
let location = "DC Office at DVG"

const newApp = new AppointMent(appDate);
newApp.setLoaction(location)

console.log(newApp.toString());
console.log(newApp.getLocation());

////////////////////////////////////////////////////////////

let str = "madama";

// function checkPlindrome(str){
//     let reverse = str.split('').reverse().join('');
//     console.log(str.split(''));// converted to array
//     console.log(str.split("").reverse()); // reverse an array
//     console.log(str.split("").reverse().join(''));/// join will make again to string
//     return reverse === str;// checks if it true return true else false;
// }

// console.log(checkPlindrome(str))

class Person{
    constructor(fName,age){
        this.fName = fName;
        this.age = age
    }

    greet(){
        console.log(`Hello ${this.fName} ${this.age}`)
    }
}

class Student extends Person{
    constructor(fName,age){
        super(fName,age)
    }
    hello(){
        super.greet();
    }
}

let st1 = new Student('v',28);
st1.hello();

///////////////////////////////

class Calculator{
    static add(a,b){
        return a+b;
    }
}

let sum = Calculator.add(1,2);
console.log(sum);

////////////////////////////////////////////

function NewPerson(name,age){
    this.name = name;
    this.age = age;
}

NewPerson.prototype.greet = function(){
    console.log(`${this.name} and ${this.age}`)
}

let p1 = new NewPerson('av','22');
let p2 = new NewPerson('va','28');

console.log(p1)
console.log(p2)

