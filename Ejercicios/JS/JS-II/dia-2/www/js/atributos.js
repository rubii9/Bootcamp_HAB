"use strict";

import { getRandomColor } from "/js/helpers.js";

const input = document.querySelector('[name="nombre"]');
const button = document.querySelector("button");

console.log(input.getAttribute("type"));
console.log(input.getAttribute("id"));
console.log(input.getAttribute("name"));

input.setAttribute("type", "password");
button.setAttribute("disabled", "yes");
button.setAttribute("id", "boton");

console.log(input.hasAttribute("lang"));
console.log(input.hasAttribute("name"));

button.removeAttribute("disabled");
input.removeAttribute("type");

// Atributos data
const headerLinks = document.querySelectorAll("header nav a");

// for (const link of headerLinks) {
//   const color = link.getAttribute("data-color");
//   link.style.border = `4px solid ${color}`;
// }

headerLinks[2].dataset.color = "pink";
headerLinks[2].dataset.fondo = "red";

for (const link of headerLinks) {
  console.log(link.dataset);
  const { color, size } = link.dataset;
  link.style.color = color;
  link.style.fontSize = size;
}
