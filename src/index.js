function updateWeather(response) {
    document.querySelector("#current-city").textContent = response.data.city;
    document.querySelector("#current-temperature").textContent = Math.round(response.data.temperature.current);
    document.querySelector("#current-description").textContent = response.data.condition.description;
    document.querySelector("#humidity").textContent = `${response.data.temperature.humidity}%`;
    document.querySelector("#wind").textContent = `${response.data.wind.speed} km/h`;
  
    const date = new Date(response.data.time * 1000);
    document.querySelector("#current-date").textContent = date.toLocaleDateString("en-US", {
      weekday: "long",
      hour: "2-digit",
      minute: "2-digit"
    });
  
    const icon = response.data.condition.icon_url;
    document.querySelector("#weather-icon").innerHTML = `<img src="${icon}" alt="weather icon" width="40" />`;
  }
  
  function searchCity(city) {
    const apiKey = "00bb106cd815a9c9783ff27o7ta42025";
    const apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
    axios.get(apiUrl).then(updateWeather);
  }
  
  document.addEventListener("DOMContentLoaded", () => {
    searchCity("Paris");
  
    document.querySelector("#search-form").addEventListener("submit", function (event) {
      event.preventDefault();
      const city = document.querySelector("#search-input").value.trim();
      if (city) {
        searchCity(city);
      }
    });
  });
  