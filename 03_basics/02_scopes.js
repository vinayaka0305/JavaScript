// the code in the curley brackets{} are block scope
// the code the outside the {} are global scople

//global scope

let a = 100;
// const b = 20;
var c = 30;


// blocke scope

if (true) {
    let a = 10;
    const b = 20;
    // var c = 300;
    // console.log("block scope",a) //10 which is inside a block
}
// console.log(a); //ReferenceError: a is not defined because of block scope
//console.log(b); //ReferenceError: b is not defined because of block scope
// console.log(c); 300 // not recomended to use

// console.log(a); // 100 which is global scope

/// In js the scope is different the browser and
// the code envinorment we run the code throug a node has different scope

//++++++++++++++++++++++++++++ nested scope +++++++++++++++++++++++++++++++


function one(){
    const userName = "Vinayaka"

    function two(){
        const website = "www.smm.com"
        console.log(userName) // we can access all properties of parent 
    }
    // console.log(website)//ReferenceError: website is not defined
    two()
}

// one();

// example

if(true){
    const userName = "vinayaka"
    if(userName === "vinayaka"){
        const website = " youtube"
        console.log(userName + website) // vinayaka youtube
    }
    //console.log(website) //website is not defined
}
// console.log(userName);

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

console.log(addOne(5)); // in this type of function declartion it will work

function addOne(num){
    return num + 1;
}

// but if we stored a function in an variable it will error 
// because of hosting

addTwo(5) //ReferenceError: Cannot access 'addTwo' before initialization


const addTwo = function(num){
    return num + 2
}

