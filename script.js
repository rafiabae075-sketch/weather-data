let weatherData = {
  lahore: " 32°C, Sunny",
  karachi: " 30°C, Humid",
  islamabad: " 28°C, Cloudy",
  multan: " 35°C, Hot",
  peshawar: " 27°C, Windy"
};

function getWeather(event) {
  event.preventDefault();

  let city = document.getElementById("city").value.toLowerCase();
  let result = document.getElementById("result");

  if (weatherData[city]) {
    result.innerHTML = `<h3>${city.toUpperCase()}</h3><p>${weatherData[city]}</p>`;
    result.style.color = "green";
  } else {
    result.innerHTML = "❌ Sorry, weather data not available for this city!";
    result.style.color = "red";
  }
}