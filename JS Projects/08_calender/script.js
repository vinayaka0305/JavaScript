const date = document.querySelector("#date");
const day = document.querySelector("#day");
const month = document.querySelector("#month");
const year = document.querySelector("#year");

const today = new Date();
console.log(today);

const weekDays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thurday",
  "Friday",
  "Saturday",
];

const allMonths = [
  "Jan",
  "Feb",
  "mar",
  "apr",
  "may",
  "june",
  "july",
  "aug",
  "sep",
  "oct",
  "nov",
  "dec",
];

date.innerHTML = (today.getDate() < 10 ? "0" : "") + today.getDate();
day.innerHTML = weekDays[today.getDay()];
month.innerHTML = allMonths[today.getMonth()];
year.innerHTML = today.getFullYear();
