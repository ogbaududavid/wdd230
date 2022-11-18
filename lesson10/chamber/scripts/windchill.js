const weatherUrl =  "https://api.openweathermap.org/data/2.5/weather?id=2332453&appid=b6f2d588b3f237931066c85d53d0e44c&units=imperial"
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
  const currentTemperature = document.getElementById("temperature");
  const windSpeed = document.getElementById("wind-speed");
  let windChill = document.getElementById("result");
  const currentCondition = document.getElementById("condition");
  const weatherIcon = document.getElementById("weather-icon");
  const iconsrc = `https://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`;
  const desc = weatherData.weather[0].description;

  currentTemperature.innerHTML = weatherData.main.temp.toFixed(0);
  weatherIcon.setAttribute("src", iconsrc)
  weatherIcon.setAttribute("alt", desc)
  windSpeed.innerHTML = weatherData.wind.speed.toFixed(0);
  currentCondition.innerHTML = weatherData.weather[0].description;
  let chill =  35.74 + (0.6215 * currentTemperature) - (35.75 * (windSpeed ** 0.16)) + (0.4275 * currentTemperature * (windSpeed ** 0.16));
  if (isNaN(chill)) {
    windChill.innerHTML="N/A";
  }
  else{
    windChill.innerHTML = chill;
  }
}