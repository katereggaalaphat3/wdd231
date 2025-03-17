const apiKey = "a1617e2f0469b35089d83adedf62ee6d";
const city = "Masaka";
const country = "UG";

// Fetch Current Weather
const currentWeatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&units=imperial&appid=${apiKey}`;

fetch(currentWeatherUrl)
  .then(response => response.json())
  .then(data => {
    document.getElementById("current-temp").textContent = `${Math.round(data.main.temp)}°F`;
    document.getElementById("weather-desc").textContent = data.weather[0].description;
    document.getElementById("high-temp").textContent = `${Math.round(data.main.temp_max)}°`;
    document.getElementById("low-temp").textContent = `${Math.round(data.main.temp_min)}°`;
    document.getElementById("humidity").textContent = `${data.main.humidity}%`;

    const sunriseTime = new Date(data.sys.sunrise * 1000).toLocaleTimeString("en-US", { hour: "numeric", minute: "2-digit" });
    const sunsetTime = new Date(data.sys.sunset * 1000).toLocaleTimeString("en-US", { hour: "numeric", minute: "2-digit" });

    document.getElementById("sunrise").textContent = sunriseTime;
    document.getElementById("sunset").textContent = sunsetTime;

    const iconCode = data.weather[0].icon;
    const iconUrl = `https://openweathermap.org/img/wn/${iconCode}@2x.png`;

    const iconElement = document.getElementById("weather-icon");
    iconElement.setAttribute("src", iconUrl);
    iconElement.setAttribute("alt", data.weather[0].description);
  })
  .catch(error => console.error("Error fetching current weather:", error));

// Fetch 3-Day Forecast
const forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city},${country}&units=imperial&appid=${apiKey}`;

fetch(forecastUrl)
  .then(response => response.json())
  .then(data => {
    // OpenWeatherMap provides forecast data every 3 hours. We need to filter by daily forecasts.
    const dailyForecasts = {};
    
    data.list.forEach(entry => {
      const date = new Date(entry.dt * 1000).toLocaleDateString("en-US", { weekday: "long" });

      if (!dailyForecasts[date]) {
        dailyForecasts[date] = entry.main.temp;
      }
    });

    // Extract three days (Today, Wednesday, Thursday)
    const days = Object.keys(dailyForecasts).slice(0, 3);
    document.getElementById("temp-today").textContent = `${Math.round(dailyForecasts[days[0]])}°F`;
    document.getElementById("temp-wed").textContent = `${Math.round(dailyForecasts[days[1]])}°F`;
    document.getElementById("temp-thu").textContent = `${Math.round(dailyForecasts[days[2]])}°F`;
  })
  .catch(error => console.error("Error fetching forecast:", error));
