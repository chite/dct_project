var myVar = setInterval(myTimer, 1000);

function myTimer() {
  var date = new Date();
  document.getElementById("time").textContent = date.toLocaleTimeString();
}

function showTimer() {
  "use strict";
  var myDiv = document.getElementById("history"),
    date = new Date(),
    year = date.getUTCFullYear(),
    month = date.getUTCMonth(),
    day = date.getUTCDate();
  if (month < 10) {
    month = "0" + month;
  }
  if (day < 10) {
    day = "0" + day;
  }
  myDiv.textContent = year + "/" + month + "/" + day;
}
showTimer();
var d = new Date();
var days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday"
];
document.getElementById("day").innerHTML = days[d.getDay()];
document.getElementById("number-day").innerHTML = d.getUTCDate();
