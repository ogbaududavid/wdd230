const weatherurl = "https://api.openweathermap.org/data/2.5/weather?id=5861897&appid=b6f2d588b3f237931066c85d53d0e44c&units=imperial"
const currentTemp = document.querySelector("#current-temp");
const weatherIcon = document.querySelector("#weather-icon");
const captionDesc = document.querySelector("figcaption")

async function apiFetch(){
    try{
        const response = await fetch(weatherurl);
        if (response.ok) {
            const data = await response.json();
            displayResults(data);
        }
        else {
            throw Error (await response.text());
        }
    }
    catch (error){
        alert(error);
    }
}
apiFetch()

function  displayResults(weatherData) {
    currentTemp.innerHTML = `<strong>${weatherData.main.temp.toFixed(0)}</strong>`;
  
    const iconsrc = `https://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`;
    const desc = weatherData.weather[0].description;
  
    weatherIcon.setAttribute("src", iconsrc);
    weatherIcon.setAttribute("alt", desc);
    captionDesc.textContent = desc;
  }