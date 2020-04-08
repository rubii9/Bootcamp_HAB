"use strict";

const body = document.body;
const button = document.querySelector("button");
const p = document.querySelector("p");

window.onload = function() {
  console.log("acabo de cargar");
  body.style.backgroundColor = "steelblue";
};

let clicks = 0;
button.onclick = () => {
  clicks = clicks + 1;
  writeClicks(clicks);
};

// Esto sobrescribiría el event listener anterior
// p.onmouseover = () => {
//   clicks = 0;
//   writeClicks(clicks);
// };

p.onmouseover = () => console.log("no resetea nada");

const writeClicks = number => {
  p.textContent = `Clicks totales: ${number}`;
};
