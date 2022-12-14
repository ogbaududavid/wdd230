//const weatherUrl =  "https://api.openweathermap.org/data/2.5/weather?id=5334223&appid=b6f2d588b3f237931066c85d53d0e44c&units=imperial"
const weatherUrl = "https://api.openweathermap.org/data/2.5/weather?lat=33.1581&lon=-117.3506&appid=b6f2d588b3f237931066c85d53d0e44c"
const weatherUrl2 = "https://api.openweathermap.org/data/2.5/forecast?lat=33.1581&lon=-117.3506&appid=b6f2d588b3f237931066c85d53d0e44c"
async function apiFetch(){
  try{
    const response = await fetch(weatherUrl);
    if (response.ok){
      const data = await response.json();
      displayResults(data);
    }
    else {
      throw Error (await response.text());
    }
  }
  catch (error){
    console.log(error);
  }

  try{
    const response = await fetch(weatherUrl2);
    if (response.ok){
      const data = await response.json();
      tempForecast(data);
      console.log(data)
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

function tempForecast(day){
  const day1 = day.list[5].main.temp.toFixed(0);
  const day2 = day.list[11].main.temp.toFixed(0);
  const day3 = day.list[20].main.temp.toFixed(0);
  const weather2 = document.getElementsByClassName("weather2")[0];

  let p1 = document.createElement("p");
  let p2 = document.createElement("p");
  let p3 = document.createElement("p");
  p1.textContent = "day1} " + <span>&#176;F</span>;
  p2.textContent = day2;
  p3.textContent = day3;
  weather2.appendChild(p1);
  weather2.appendChild(p2);
  weather2.appendChild(p3);



}