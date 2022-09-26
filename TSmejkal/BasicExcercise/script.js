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

let inputTemp = parseInt(document.getElementById("inputWeather"));
console.log(inputTemp);
let btnClick = document.getElementById("btn");
let output = document.getElementById("output");

function weather(temp) {
  console.log(temp);
  if (temp < 10 && temp > -50) {
    console.log("The weather is cold");
  } else if (temp < 20 && temp >= 10) {
    console.log("The weather is moderate");
  } else if (temp < 32 && temp >= 20) {
    console.log("The weather is warm");
  } else if(temp>= 32){
    console.log("The weather is hot");
  }
}

weather(inputTemp);
// btnClick.addEventListener("click", weather(inputTemp));
