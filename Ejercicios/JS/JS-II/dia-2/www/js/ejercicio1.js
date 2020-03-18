"use strict";

const time = document.getElementById("time");
const greeting = document.getElementById("greeting");

function writeTime() {
  const now = new Date();
  time.textContent = `
    ${format(now.getHours())} :
    ${format(now.getMinutes())} :
    ${format(now.getSeconds())}
  `;

  greeting.textContent = getGreeting(now.getHours());
}

function format(number) {
  if (number >= 10) return number;
  return "0" + number;
}

function getGreeting(hour) {
  if (hour < 8 || hour >= 20) return "Buenas noches";
  if (hour < 12) return "Buenos días";
  if (hour < 20) return "Buenas tardes";
}

setInterval(writeTime, 1000);
writeTime();
