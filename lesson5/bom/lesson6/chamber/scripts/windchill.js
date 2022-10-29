const t = document.getElementById("temperature").innerHTML;
const wind_speed = document.getElementById("wind-speed").innerHTML;
if (t <=50 && wind_speed > 3.0){
  let wind_chill = parseInt(35.74 + (0.6215 * t) - (35.75 * (wind_speed ** 0.16)) + (0.4275 * t * (wind_speed ** 0.16)));
  document.getElementById("result").innerHTML = wind_chill+"&#176; F";
}
else{
  document.getElementById("result").innerHTML = "N/A";
  alert(" input a temperature that is <=50 and a wind_speed that is > 3.0")
}