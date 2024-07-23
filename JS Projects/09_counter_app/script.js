const count = document.querySelector("#count");
const display = document.querySelector("#display");
const inCrBtn = document.querySelector("#increment");
const deCrBtn = document.querySelector("#decrement");
const resetBtn = document.querySelector("#reset");


inCrBtn.addEventListener('click',()=>{
    let num = parseInt(count.innerText) 
    let inputVal = parseInt(display.value);
    count.innerText = num + inputVal;
})
deCrBtn.addEventListener('click',()=>{
    let num = parseInt(count.innerText) 
    let inputVal = parseInt(display.value);
    count.innerText = num - inputVal;
})


resetBtn.addEventListener('click',()=>{
    count.innerHTML = ''
})












// let cnt = 0;
// inCrBtn.addEventListener("click", () => {
//   if (display.value !== "") {
//     cnt = cnt + Number(display.value);
//     count.innerHTML = cnt;
//   } else {
//     cnt++;
//     count.innerHTML = cnt;
//   }
// });

// deCrBtn.addEventListener("click", () => {
//   if (display.value !== "" && display.value > 0) {
//     cnt = cnt - Number(display.value);
//     if (cnt >= 0) {
//       count.innerHTML = cnt;
//     }
//   } else {
//     cnt--;
//     if (cnt < 0) {
//       cnt = 0;
//     }
//     count.innerHTML = cnt;
//   }
// });

// resetBtn.addEventListener('click',()=>{
//     cnt = 0;
//     count.innerHTML = ''
//     display.value = ''
// })
