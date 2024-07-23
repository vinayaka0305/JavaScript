const temperature = document.querySelector("#temp");
const cityName = document.querySelector("#city");
const humidity = document.querySelector("#humidity");
const wind = document.querySelector("#wind");

const apiKey = "0d6ca51fc13ff5375ab53e4a189cfb61";
const apiUrl =
  "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchBox = document.querySelector("#search input");
const searchBtn = document.querySelector("#search button");
const weatherIcon = document.querySelector("#weatherIcon");

async function fetchData(city) {
  try {
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    const data = await response.json();

    if (response.status == 404) {
      document.querySelector("#error").style.display = "block";
      document.querySelector("#weather").style.display = "none";
    } else {
      console.log(data);

      cityName.innerHTML = data.name;
      temperature.innerHTML = Math.floor(data.main.temp) + "°C";
      humidity.innerHTML = data.main.humidity + "%";
      wind.innerHTML = data.wind.speed + "km/h";

      if (data.weather[0].main === "Rain") {
        weatherIcon.src = "./rain.png";
      } else if (data.weather[0].main === "Clear") {
        weatherIcon.src = "./clear.png";
      } else if (data.weather[0].main === "Clouds") {
        weatherIcon.src = "./cloud.png";
      } else if (data.weather[0].main === "Drizzle") {
        weatherIcon.src = "./drizzle.png";
      } else if (data.weather[0].main === "Mist") {
        weatherIcon.src = "./mist.png";
      }
      document.querySelector("#error").style.display = "none";
      document.querySelector("#weather").style.display = "block";
    }
  } catch (err) {
    console.log(err);
  }
 
}

searchBtn.addEventListener("click", () => {
  fetchData(searchBox.value);
});
