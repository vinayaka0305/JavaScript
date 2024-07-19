//// async await;

// async function getData(){
//     return "vinayaka"
// }

// const dataPromise = getData();// promise object is created
// console.log(dataPromise);
// dataPromise.then(data=>console.log(data))// it will print vinayaka

// const promise = new Promise((res,rej)=>{
//     res("promise is resloved");
// })

// async function getData(){
//     return promise;
// }

// const dataPromise = getData();

// console.log(dataPromise);

// dataPromise.then(res=>console.log(res))

/// promise handled before async await;
// const promise = new Promise((res,rej)=>{
//     res("promise resolved")
// })

// function getData(){
//     promise.then(data=>console.log(data))
// }

// getData();

/// handled using async await;

// const p = new Promise((res,rej)=>{
//     res("vinayaka cracked js")
// })

// async function getData(){
//     const val = await p;
//     console.log(val)
// }

// getData();

/////////////// time,tide, and js waits for none ///////////////

const p = new Promise((res, rej) => {
  setTimeout(() => {
    res("promise resolved");
  }, 2000);
});

// async function getData(){
//     const val = await p
//     console.log(val);
//     console.log("before promise i will be printed")
// }
function getData() {
  p.then((data) => console.log(data));
  console.log("before promise i will be resolved");
}

getData();

//////////////////////////// api call ////////////////////////////////////

// let api_url = "https://api.github.com/users/vinayaka0305"

// async function fetchData(){
//     const data = await fetch(api_url);
//     const res = await data.json();
//     console.log(res);
// }

// fetchData();

// using try catchl

const api = "https://ap.github.com/users/vinayaka0305";

async function fetchData() {
  try {
    const data = await fetch(api);
    const res = await data.json();
    console.log(res);
  } catch (err) {
    console.log("an error occured");
  }
}

fetchData();
