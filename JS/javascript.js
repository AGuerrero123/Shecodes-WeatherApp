function formateDate() {
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ];
  let day = days[now.getDay()];
  let minutes = now.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  let hour = now.getHours();
  if (hour < 10) {
    hour = `0${hour}`;
  }

  return `${day} ${hour}:${minutes}`;
}

function convertFah(event) {
  event.preventDefault();
  let temperature = document.querySelector("#temp");
  temperature.innerHTML = 19;
}

function convertCel(event) {
  event.preventDefault();
  let temperature = document.querySelector("#temp");
  temperature.innerHTML = 36;
}

function displayWeather(response) {
  document.querySelector("#location").innerHTML = response.data.name;
  document.querySelector("#temp").innerHTML = Math.round(
    response.data.main.temp
  );
  document.querySelector("#humidity").innerHTML = Math.round(
    response.data.main.humidity
  );
  document.querySelector("#wind").innerHTML = Math.round(
    response.data.wind.speed
  );
  document.querySelector("#description").innerHTML =
    response.data.weather[0].main;
}

function searchCity(city) {
  let apiKey = "5f472b7acba333cd8a035ea85a0d4d4c";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(displayWeather);
}

function handleSubmit(event) {
  event.preventDefault();
  let city = document.querySelector("#city").value;
  searchCity(city);
}
function getCurrentLocation(event) {
  event.preventDefault();
  navigator.geolocation.getCurrentPosition(searchLocation);
}

function searchLocation(position) {
  let apiKey = "3dce9b1c66837262a25b3f448d354a76";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(displayWeather);
}
//Feature 1
let period = document.querySelector("#days");
let now = new Date();
period.innerHTML = formateDate(now);

//Feature 2
let form = document.querySelector("#form");
form.addEventListener("submit", handleSubmit);

//Feature 3
let fah = document.querySelector("#fahrenheit");
fah.addEventListener("click", convertFah);

//Feature 4
let cel = document.querySelector("#celsius");
cel.addEventListener("click", convertCel);

//Feature 6
let currentLocationButton = document.querySelector("#current-location");
currentLocationButton.addEventListener("click", getCurrentLocation);

searchCity("New York");
