const clock = document.querySelector("#clock");

// let date = new Date();
// console.log(date.toLocaleTimeString())
// once we refresh then only we get the updated time

setInterval(function () {
  let date = new Date();
//   console.log(date.toLocaleTimeString());
clock.innerHTML = date.toLocaleTimeString();
}, 1000);
// it will give the updated time in every second because of the setInterval method
