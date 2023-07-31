document.getElementById("submit-btn").onclick = function(){

  let temp;

  if(document.getElementById("celcius-btn").checked){
      temp = document.getElementById("temp-to-convert-box").value;
      temp = Number(temp);
      temp = toCelsius(temp);
      document.getElementById("tempLabel").innerHTML = temp + "°C";
  }
  else if(document.getElementById("fahrenheit-btn").checked){
      temp = document.getElementById("temp-to-convert-box").value;
      temp = Number(temp);
      temp = toFahrenheit(temp);
      document.getElementById("tempLabel").innerHTML = temp + "°F";
  }
  else{
      document.getElementById(tempLabel).innerHTML = "select a unit"
  }
}

function toCelsius(temp){
  return (temp - 32) * (5/9);
}
function toFahrenheit(temp){
  return  temp * 9 / 5 + 32;
}