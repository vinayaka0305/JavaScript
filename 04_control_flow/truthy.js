const userEmail = "vav6473@gmail.com"

if (userEmail) {
    console.log("Got user email") // by default it will consider it is true and execute 
} else {
    console.log("don't have user email") // if email = " " and default it will be considerd as false
}

// the values which considerd as false by default 
// falsy values are below
//1.flase;
//2. 0 
//3. -0
//4. In BigInt On is consider as false
//5. "" empty string
//6. null
//7. undefined
//8. NaN

// truthy value
//1.true
//2. []
//3. "0"
//4. "false" 
//5. " " space added in string
//6. {}
//7. function(){}

const arr = [];
if (arr.length === 0) {
    console.log("arr is empty");
}

const obj = {}

if (Object.keys(obj).length === 0) {
    console.log("obj is empty")
}

if (false == 0);// true
if (false == ''); // true
if (0 == ''); //true


//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

//Nullish Coalescing Operator(??): null undefined


let val1;
// val1 = 5 ?? 10;
// console.log(val1) // 5 it will give the firstvalue
// it will check the value which are null or undefined
// val1 = null ?? 10;
// val1 = undefined ?? 15;

val1 = null ?? 10 ?? 15
console.log(val1);  // it will give the firstvalue

/////////////////////////////////////////////////////////////////////////////////////

// ternary operators

// condition ? true : false

const iceTeaPrice = 100;
iceTeaPrice <= 80 ? console.log("less than 80"):console.log("more than 80");

