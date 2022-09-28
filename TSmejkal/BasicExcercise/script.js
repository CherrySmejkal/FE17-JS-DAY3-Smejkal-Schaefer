//Excercise 1
let num = [1, 7, -3, 9];
let max = 0;

for (let i = 0; i < num.length; i++) {
  if (num[i] > max) {
    max = num[i];
  }
}
console.log(max);

//Excercise 2

function weather() {
  //always need to convert to Number because HTML always parse as a String to Javascript
  var temp = Number(document.getElementById("inputWeather").value);
  console.log(temp);

  let result = document.getElementById("result");
  let forecast = document.getElementById("forecast");

  if (temp < 10 && temp > -50) {
    forecast.innerHTML = `<img src="images/cloud-snow.svg">`;
    result.innerHTML = "The weather is cold";
  } else if (temp < 20 && temp >= 10) {
    forecast.innerHTML = `<img src="images/cloud-moon.svg">`;
    result.innerHTML = "The weather is moderate";
  } else if (temp < 32 && temp >= 20) {
    forecast.innerHTML = `<img src="images/cloud-haze.svg">`;
    result.innerHTML = "The weather is warm";
  } else if (temp >= 32) {
    forecast.innerHTML = `<img src="images/cloud-sun.svg">`;
    result.innerHTML = "The weather is hot";
  }
  console.log(result);
}

document.getElementById("submit").addEventListener("click", weather); //by default is false and sometimes can omit it.
