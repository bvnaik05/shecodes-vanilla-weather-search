function displayWeather(response) {
  console.log(response);
  
  // Update city
  let cityElement = document.querySelector("#city");
  cityElement.innerHTML = response.data.city;
  
  // Update temperature
  let temperatureElement = document.querySelector("#temperature");
  temperatureElement.innerHTML = `🌤️${Math.round(response.data.temperature.current)}`;
  
  // Update description
  let descriptionElement = document.querySelector("#description");
  descriptionElement.innerHTML = response.data.condition.description;
  
  // Update humidity
  let humidityElement = document.querySelector("#humidity");
  humidityElement.innerHTML = `${response.data.temperature.humidity}%`;
  
  // Update wind speed
  let windElement = document.querySelector("#wind-speed");
  windElement.innerHTML = `${response.data.wind.speed}km/hr`;
  
  // Update time
  let timeElement = document.querySelector("#time");
  let now = new Date();
  let hours = now.getHours();
  let minutes = now.getMinutes();
  
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  if (hours < 10) {
    hours = `0${hours}`;
  }
  
  timeElement.innerHTML = `${hours}:${minutes}`;
}

function search(event) {
  event.preventDefault();
  let searchInputElement = document.querySelector("#search-form-input");
  let city = searchInputElement.value;
  let apiKey = "00bb106cd815a9c9783ff27o7ta42025";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;

  axios.get(apiUrl).then(displayWeather);
}
  
  let searchForm = document.querySelector("#search-form");
searchForm.addEventListener("submit", search);

// Update the initial time display
let timeElement = document.querySelector("#time");
let currentDate = new Date();
let hours = currentDate.getHours();
let minutes = currentDate.getMinutes();

if (minutes < 10) {
  minutes = `0${minutes}`;
}
if (hours < 10) {
  hours = `0${hours}`;
}

timeElement.innerHTML = `${hours}:${minutes}`;
  