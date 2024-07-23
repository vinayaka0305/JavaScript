const hrs = document.querySelector("#hrs");
const min = document.querySelector("#min");
const sec = document.querySelector("#sec");

setInterval(() => {
  let currTime = new Date();
  hrs.innerHTML = (currTime.getHours()<10?"0":"")+currTime.getHours();
  min.innerHTML = (currTime.getMinutes()<10?"0":"")+currTime.getMinutes();
  sec.innerHTML = (currTime.getSeconds()<10?"0":"")+currTime.getSeconds();
}, 1000);

