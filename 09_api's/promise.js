// promise creation

// const promise = new Promise(function(resolve,reject){
//     setTimeout(function(){
//         console.log("async task completed");
//         resolve();
//     },1000)
// });

// // promise consumption

// //.then is in relation with reslove

// promise.then(function(){
//     console.log("promise consumed");
// })

// promise 2;

// new Promise(function(reslove,reject){
//     setTimeout(function(){
//         console.log("async task 2 completed");
//         reslove();
//     },1000)
// }).then(function(){
//     console.log("promise consumed")
// })


//promise 3;

const promise = new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({
            useName:"vinayaka",
            email:"vav6473@gmail.com"
        })// in then  block we get the userName object
    },1000)
})

promise.then(function(obj){
    console.log(obj);
})


// promise 4

// const promise = new Promise(function(resolve,reject){
//     setTimeout(function(){
//         let error = true;
//         if(!error){
//             resolve({userName:"av",password:"123"})
//         }else{
//             reject('Error: something went wrong')
//         }
//     },1000)
// })

// const userName = promise.then((obj)=>{
//     return obj.userName;
// })

// console.log(userName); // error

// chaining 

// promise.then((obj)=>{
//     return obj.userName
// })
// .then((obj)=>{
//     console.log(obj);
// })
// .catch((err)=>{
//     console.log(err);
// }).finally(()=>{
//     console.log("the promise either resolve or rejected");
// })


// const promiseFive = new Promise(function(reslove,reject){
//     setTimeout(function(){
//         let err = true;
//         if(!err){
//             reslove({userName:"vinay",password:"12"})
//         }else{
//             reject("Error : js went wrong")
//         }
//     },1000)
// })

// async function consumePromiseFive(){
//   try {
//     const respose = await promiseFive
//     console.log(respose);
//   } catch (error) {
//     console.log(error);
//   }
// }

// consumePromiseFive();
//////////////////////////////////////////////////////////////////////////////////////////

// async function fetchAlluser(){
//    try {
//     const response = await fetch("https://jsonplaceholder.typicode.com/users");
//     console.log(response);
//     const data = await response.json()
//     console.log(data);
//    } catch (error) {
//         console.log(error,"e: error");
//    }
// }


// fetchAlluser();

//////////////////////////////////////////////////////////////////////////////

fetch("https://jsonplaceholder.typicode.com/users")
.then((response)=>{
    return response.json()
})
.then((data)=>{
    console.log(data)
})
.catch((err)=>console.log(err))