

function lookupWeatherCode(weatherCode) {
	if (weatherCode == 0 || weatherCode == 1) {return "clear sky" }
  if (weatherCode == 2) { return "partly cloudy" }
	if (weatherCode == 3) { return "overcast"	}
	if (weatherCode == 45 || weatherCode == 48) {	return "fog" }
	if (weatherCode > 50 && weatherCode < 68) { return "rain" }
	if (weatherCode > 70 && weatherCode < 77) {return "snow" }
	if (weatherCode > 79 && weatherCode < 83) { return "rain" }
	if (weatherCode == 85 || weatherCode == 86) { return "snow" }
	if (weatherCode > 94 && weatherCode < 100) { return "thunderstorm" }
}

const forecastDays = 3;

const positionOptions = {
  enableHighAccuracy: true,
  timeout: 5000,
  maximumAge: 0
};

export function queryWeatherData() {
  return new Promise((resolve, rej) => {
    let cachedWeather = sessionStorage.getItem("weather");

    if (cachedWeather) {
      resolve(JSON.parse(cachedWeather));
      return;
    }

    navigator.geolocation.getCurrentPosition(
      position => {
        let latitude = position.coords.latitude;
        let longitude = position.coords.longitude;
  
        let weatherQuery = "https://api.open-meteo.com/v1/forecast?"
          + `latitude=${latitude}&longitude=${longitude}`
          + "&current_weather=true"
          + "&temperature_unit=fahrenheit"
          + "&timezone=auto"
          + "&forecast_days=" + forecastDays
          + "&daily=temperature_2m_min,temperature_2m_max,weathercode"
  
        fetch(weatherQuery)
          .then(response => response.json())
          .then(response => {
            let currentTemp = response.current_weather.temperature;
            let currentCondition = lookupWeatherCode(response.current_weather.weathercode);
            let forecast = []

            for (let i = 0; i < forecastDays; i++) {
              forecast.push({
                tempMin: response.daily.temperature_2m_min[i],
                tempMax: response.daily.temperature_2m_max[i],
                condition: lookupWeatherCode(response.daily.weathercode[i])
              });
            }

            let resolution = {
              currentTemp,
              currentCondition,
              forecast
            }

            sessionStorage.setItem("weather", JSON.stringify(resolution))
            resolve(resolution)
          })
      },
      error => {
        console.log("error retrieving weather");
        console.log(error);
        rej(error);
      },
      positionOptions
    )
  })


}