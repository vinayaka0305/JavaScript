// generate random color

const randomColor = function () {
  const hex = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += hex[Math.floor(Math.random() * 16)];
  }
  return color;
};

// console.log(Math.floor(Math.random() * 16)); // her we get 0 to 16 values
//because the hex value is 16 in that only we have generate a random color;

// console.log(randomColor()) // the random color generated from 0 to 5

let intervalId;
const statChangingColor = function () {
  const changeBgColor = function () {
    document.body.style.backgroundColor = randomColor();
  };
  if (!intervalId) {
    intervalId = setInterval(changeBgColor, 1000);
  }
};

const stopChangingColor = function () {
    clearInterval(intervalId);
    intervalId = null
};

document.querySelector("#start").addEventListener("click", statChangingColor);

document.querySelector("#stop").addEventListener("click", stopChangingColor);
