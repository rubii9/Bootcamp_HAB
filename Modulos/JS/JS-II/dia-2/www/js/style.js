"use strict";

import { getRandomColor } from "/js/helpers.js";

const titulo = document.querySelector("#titulo");

titulo.style.textAlign = "right";
titulo.style.background = "gold";
titulo.style.cssText =
  "border-bottom: 3px solid green; font-family: sans-serif;";

// console.log(titulo.style);

// Esto también vale!
// titulo.setAttribute("style", "color: blue");

const allStyles = window.getComputedStyle(titulo);

console.log(allStyles);
