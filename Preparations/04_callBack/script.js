// function f1(cal){
//     setTimeout(()=>{
//         console.log("f1 function")
//         cal();
//     },1000)
// }

// function f2(){
//     setTimeout(()=>{
//         console.log("f2 function")
//     },1000)
// }

// f1(f2)

//////////////////////////////////////////////////////

// console.log("start");

// setTimeout(() => {
//   console.log("step 1");
//   setTimeout(() => {
//     console.log("step 2");
//     setTimeout(() => {
//       console.log("step 3");
//     }, 1000);
//   }, 1000);
// }, 1000);


/////////////////////////////////////////////

// function delay(ms){
//     return new Promise((res,rej)=>{
//         setTimeout(()=>{
//             res()
//         },ms)
//     })
// }

// delay(1000).then(()=>{
//     console.log("step 1");
//     return delay(1000)
// },).then(()=>{
//     console.log("step 2")
//     return delay(1000)
// }).then(()=>{
//     console.log("step 3")
// })

/////////////////////////////////////////

function delay(ms){
    return new Promise((res,rej)=>{
        setTimeout(()=>{
            res()
        },ms)
    })
}


async function execute(){
    await delay(1000);
    console.log("step 1");
    await delay(1000);
    console.log("step 2");
    await delay(1000);
    console.log("step 2");
}

execute();