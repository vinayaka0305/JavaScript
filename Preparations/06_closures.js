// function x(){
//     let a = 6;
//     function y(){
//         console.log(a);
//     }
//     a = 100;
//     return y;

//     // return function y(){
//     //     console.log(a);
//     // }
// }

// let z = x();
// // console.log(z); // the z holds the function defination
// z(); // when z is called it prints 6;


function z(){
    let a = 100;
    function x(){
        let b = 200;
        function y(){
            console.log(a,b);
        }
       y();
    }
    return x;
}
let w = z();
console.log(w);
w();
////////////////////////////////////////////////////

function generateOrder(){
    let count = 0;
    function func(){
        count++;
        return `Total orders = ${count}`
    }
    return func;
}

const orders = generateOrder();
console.log(orders());
console.log(orders());
console.log(orders());