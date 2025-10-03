const city = document.getElementById("city");
const weatherDescription = document.getElementById("description");
const date = document.getElementById("date");
const temp = document.getElementById("temp");
const tempMax = document.getElementById("tempMax");
const tempMin = document.getElementById("tempMin");
const tempImg = document.getElementById("tempImg");

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

let dateObj = new Date();
let month = months[dateObj.getUTCMonth()];
let day = dateObj.getUTCDate();
let year = dateObj.getUTCFullYear();
date.innerHTML = `${month} ${day}, ${year}`;

const getWeather = async () => {
  try {
    // apiKey= 46af05afdd56cc22e2abd59069c24603;
    const cityName = document.getElementById("searchBarInput").value;
    if (!cityName) {
      alert("Invalid city name.");
      return;
    }
    document.getElementById("loader").style.display = "block";

    const weatherDataFetch = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=46af05afdd56cc22e2abd59069c24603&units=metric`,
      {
        headers: {
          Accept: "application/json",
        },
      }
    );
    const weatherData = await weatherDataFetch.json(); // convert weatherData into object
    console.log(weatherData);

    document.getElementById("loader").style.display = "none";

    const resultEl = document.getElementById("weatherResult");
    resultEl.classList.remove("show"); // reset before loading

    function weatherUpdates() {
      city.innerHTML = `${weatherData.name}`;
      tempImg.innerHTML = `<img src="http://openweathermap.org/img/wn/${weatherData.weather[0].icon}.png">`;
      let description = weatherData.weather[0].description;
      weatherDescription.innerHTML = description;

      temp.innerHTML = `${Math.round(weatherData.main.temp)}&deg;C`;

      tempMax.innerHTML = `${weatherData.main.temp_max} &deg;C`;
      tempMin.innerHTML = `${weatherData.main.temp_min} &deg;C`;

      resultEl.classList.add("show");
    }

    setTimeout(weatherUpdates, 100);
  } catch (error) {
    console.log(error);
  }
};

document.getElementById("searchIcon").addEventListener("click", getWeather);

window.addEventListener("load", () => {
  document.getElementById("app").classList.add("show");
});
