const apiKey = "1b7d7018b0485bf17d4d87a22a748b1a";

document.getElementById("searchBtn").addEventListener("click", () => {
  const city = document.getElementById("cityInput").value.trim();
  
  if (city === "") {
    document.getElementById("weatherResult").innerHTML = "Please enter a city name.";
    return;
  }

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  fetch(url)
    .then(response => {
      if (!response.ok) {
        throw new Error("City not found");
      }
      return response.json();
    })
    .then(data => {
      const weatherInfo = `
        <h3>${data.name}, ${data.sys.country}</h3>
        <p>🌡️ Temperature: ${data.main.temp} °C</p>
        <p>🌥️ Condition: ${data.weather[0].description}</p>
        <p>💨 Wind Speed: ${data.wind.speed} m/s</p>
        <p>💧 Humidity: ${data.main.humidity}%</p>
      `;
      document.getElementById("weatherResult").innerHTML = weatherInfo;
    })
    .catch(error => {
      document.getElementById("weatherResult").innerHTML = "❌ " + error.message;
    });
});
