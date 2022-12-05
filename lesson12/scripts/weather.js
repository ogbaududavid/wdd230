const weatherUrl =  "https://api.openweathermap.org/data/2.5/weather?id=5334223&appid=b6f2d588b3f237931066c85d53d0e44c&units=imperial"
async function apiFetch(){
  try{
    const response = await fetch(weatherUrl);
    if (response.ok){
      const data = await response.json();
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
  const currentTemperature = weatherData.main.temp.toFixed(0);
  const humidity = weatherData.main.humidity.toFixed(0);
  const windSpeed = weatherData.wind.speed.toFixed(0);
  const currentCondition = weatherData.weather[0].description;
  const weatherIcon = document.getElementById("weather-icon");
  const iconsrc = `https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@4x.png`;
  const desc = weatherData.weather[0].description;

  document.getElementById("temperature").innerHTML = currentTemperature;
  document.getElementById("humidity").innerHTML = humidity * 9 / 5 + 32;
  document.getElementById("wind-speed").innerHTML = windSpeed;
  document.getElementById("condition").innerHTML = currentCondition;
  weatherIcon.setAttribute("src", iconsrc)
  weatherIcon.setAttribute("alt", desc)
  windChill =  (35.74 + (0.6215 * currentTemperature) - (35.75 * (windSpeed ** 0.16)) + (0.4275 * currentTemperature * (windSpeed ** 0.16))).toFixed(0);
  
  if (currentTemperature > 50 || windSpeed <= 3 ) {
    document.getElementById("result").innerHTML="N/A";
  }
  else{
    document.getElementById("result").innerHTML = windChill;
  }
}

function getFooter(){
	let mod= document.lastModified;
	text = "bountifulfoods.com &copy; 2022 .:|:. David Ogbaudu .:|:. WDD230 .:|:. Last Updated:" + mod;
	document.getElementsByClassName("footer-text")[0].innerHTML = text;
}