const apiKey = "d9ee7513b7e60f411e6e1c0297cdc93f";
const apiUrl =
  "https://api.openweathermap.org/data/2.5/weather?units=metric&q=c361a7189a7d2e5b32fc664433798011";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const rainIcon = document.querySelector(".rain-icon");

async function checkWeather(city) {
  const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
  var data = await response.json();

  console.log(data);

  document.querySelector(".city").innerHTML = data.name;
  document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°c";
  document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
  document.querySelector(".wind").innerHTML = data.wind.speed + "Km/h";

  if (data.weather[0].main == "Clouds") {
    rainIcon.src = "images/clouds.png";
  } else if (data.weather[0].main == "Clear") {
    rainIcon.src = "images/clear.png";
  } else if (data.weather[0].main == "Rain") {
    rainIcon.src = "images/rain.png";
  } else if (data.weather[0].main == "Drizzle") {
    rainIcon.src = "images/drizzle.png";
  } else if (data.weather[0].main == "Mist") {
    rainIcon.src = "images/mist.png";
  } else if (data.weather[0].main == "Overcast") {
    rainIcon.src = "images/humidity.png";
  } else if (data.weather[0].main == "Wind") {
    rainIcon.src = "images/wind.png";
  }
}

searchBtn.addEventListener("click", () => {
  checkWeather(searchBox.value);
});
