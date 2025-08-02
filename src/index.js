function displayTemperature(response) {
    let temperatureElement = document.querySelector("#current-temperature");
    console.log(response);
    temperatureElement.innerHTML = Math.round(response.data.temperature.current);
  }
  
  function search(event) {
    event.preventDefault();
    let searchInputElement = document.querySelector("#search-input");
    let city = searchInputElement.value;
    let apiKey = "00bb106cd815a9c9783ff27o7ta42025";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
    let cityElement = document.querySelector("#current-city");
    cityElement.innerHTML = searchInputElement.value;
  
    axios.get(apiUrl).then(displayTemperature);
  }
  
  function formatDate(date) {
    let minutes = date.getMinutes();
    let hours = date.getHours();
    let day = date.getDay();
  
    if (minutes < 10) {
      minutes = `0${minutes}`;
    }
  
    if (hours < 10) {
      hours = `0${hours}`;
    }
  
    let days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
  
    let formattedDay = days[day];
    return `${formattedDay} ${hours}:${minutes}`;
  }
  
  let searchForm = document.querySelector("#search-form");
  searchForm.addEventListener("submit", search);
  
  let currentDateELement = document.querySelector("#current-date");
  let currentDate = new Date();
  
  currentDateELement.innerHTML = formatDate(currentDate);
  