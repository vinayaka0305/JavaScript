const timer = document.querySelector("#stop-watch");
const start = document.querySelector("#start");
const stop = document.querySelector("#stop");
const reset = document.querySelector("#reset");

let sec = 0;
let min = 0;
let hr = 0;

let stopTheTime = true;

start.addEventListener("click", () => {
  startTheTimer();
});

stop.addEventListener("click", () => {
  stopTheTimer();
});

reset.addEventListener("click", () => {
  resetTheTimer();
});

function startTheTimer() {
  if (stopTheTime === true) {
    stopTheTime = false;
    timerCyle();
  }
}

function stopTheTimer() {
  if (stopTheTime === false) {
    stopTheTime = true;
  }
}

function timerCyle() {
  if (stopTheTime === false) {
    hr = parseInt(hr);
    min = parseInt(min);
    sec = parseInt(sec);

    sec = sec + 1;
    if (sec === 60) {
      min = min + 1;
      sec = 0;
    }

    if (min === 60) {
      hr = hr + 1;
      min = 0;
      sec = 0;
    }

    if (sec < 10) {
      sec = "0" + sec;
    }
    if (min < 10) {
      min = "0" + min;
    }

    if (hr < 10) {
      hr = "0" + hr;
    }

    timer.innerHTML = hr + ":" + min + ":" + sec;

    setTimeout(() => {
      timerCyle();
    }, 1000);
  }
}

function resetTheTimer() {
  timer.innerHTML = "00:00:00";
  stopTheTime = true;
  hr = 0;
  min = 0;
  sec = 0;
}
