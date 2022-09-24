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
  let hour = now.getHours();

  return `${day} ${hour}:${minutes}`;
}

function search(event) {
  event.preventDefault();
  let input = document.querySelector("#city");
  let location = document.querySelector("#location");
  location.innerHTML = input.value;
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

function navi(event) {
  event.preventDefault();
  navigator.geolocation.getCurrentPosition(apiPointer);
}

function apiPointer() {
  let apiKey = `40b745c14eadad7b7c4e6e4bf3b70103`;
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${postion.coords.latitude}&lon=${postion.coords.latitude}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(showCurrentTemp);
}

function showCurrentTemp(response) {
  console.log(response);
}
//Feature 1
let period = document.querySelector("#days");
let now = new Date();
period.innerHTML = formateDate(now);

//Feature 2
let form = document.querySelector("#form");
form.addEventListener("submit", search);

//Feature 3
let fah = document.querySelector("#fahrenheit");
fah.addEventListener("click", convertFah);

//Feature 4
let cel = document.querySelector("#celsius");
cel.addEventListener("click", convertCel);

/*Feature 5 - when a user searches for a city (example: New York), 
it should display the name of the city on the result page and the current 
temperature of the city.*/

/*Feature 6 - When clicking on it, it uses the Geolocation API to 
get your GPS coordinates and display and the city and current temperature 
using the OpenWeather API.
*/

let postion = document.querySelector("#current-location");
postion.addEventListener("click", navi);
