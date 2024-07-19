// {
//   //block scope
//   let a = 10;
//   let b = 20;

//   console.log(a);
//   console.log(b);
// }

// console.log(a); //C:\JavaScript\Preparations\01_var_let_const\index.html
// console.log(b);// afrer the error code will not run


// hosting

// hosting means means we can access the variable even before the intialization
// without error
console.log(a); // undefined is not error is datatype in js
var a = 10;

// console.log(b); // Cannot access 'b' before initialization
 let b = 10 // here the let are also hoisted but because of the temporal deadzone
// // we cannot access the them before intilization

////////////////////////////////////////////////////////

function foo(){
    // console.log(x)// x is not defined
    x = 20; // x is not defined erorr because it not in the local scope
    // after code run it will gone to local scope
    // console.log(x); 20
}

// foo();

// console.log(x);// 20 


//////////////////////////////////////


foo();
var foo = 20;
function foo(){
    console.log('foo'); //prints foo
}
// foo(); // foo is not a function

/////////////////////////////////////////////////////



function outer(){
    function inner(){
        console.log(x);
    }
    const x = 5;
    return inner
}

const inner = outer();
console.dir(inner)
inner();


/////////////////////////////////////////////////////
// closures with the constructor functions'

function Counter(){
    let count = 0;
    this.incrementCountrt =function(){
        count++;
         console.log(count);
    }
    this.decrementCount = function(){
        count--;
        console.log(count);
    }
}

const counter1 = new Counter();
counter1.incrementCountrt();
counter1.decrementCount();
