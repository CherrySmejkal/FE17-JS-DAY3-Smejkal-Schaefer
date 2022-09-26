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
let temp = Math.floor(Math.random() * 20) + 1;
function weather(temp) {
  console.log(temp);
  if (temp < 10 && temp > -5) {
    console.log("Theweather is cold");
  } else if(temp <20 && temp >=10) {
    console.log("Theweather is moderate");
  } else if(temp <32 && temp >=20){
    console.log("Theweather is warm");
  } else{
    console.log("Theweather is hot");
  }
}