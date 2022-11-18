//const weatherUrl =  "https://api.openweathermap.org/data/2.5/weather?id=2332453&appid=b6f2d588b3f237931066c85d53d0e44c&units=imperial"
const weatherUrl = "https://api.openweathermap.org/data/2.5/weather?lat=41.139981&lon=-104.820246&units=imperial&appid=b6f2d588b3f237931066c85d53d0e44c"
async function apiFetch(){
  try{
    const response = await fetch(weatherUrl);
    if (response.ok){
      const data = await response.json();
      console.log(data)
      displayResults(data)
    }
    else {
      throw Error (await response.text());
    }
  }
  catch (error){
    console.log(error);
  }
}
apiFetch()

function displayResults(weatherData) {
  var currentTemperature = document.getElementById("temperature");
  var windSpeed = document.getElementById("wind-speed");
  const windChill = document.getElementById("result");
  const currentCondition = document.getElementById("condition");
  const weatherIcon = document.getElementById("weather-icon");
  const iconsrc = `https://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`;
  const desc = weatherData.weather[0].description;

  currentTemperature.innerHTML = parseFloat(weatherData.main.temp.toFixed(0));
  weatherIcon.setAttribute("src", iconsrc)
  weatherIcon.setAttribute("alt", desc)
  windSpeed.innerHTML = parseFloat(weatherData.wind.speed.toFixed(0));
  currentCondition.innerHTML = weatherData.weather[0].description;
  windChill.innerHTML =  35.74 + 0.6215 * currentTemperature - 35.75 * windSpeed ** 0.16 + 0.4275 * currentTemperature * windSpeed ** 0.16;
}