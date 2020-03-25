"use strict";

import { getRandomInt, getRandomColor } from "/js/helpers.js";

const squares = document.querySelectorAll("li");

function colorSquare() {
  //coger un cuadrado aleatorio
  //ponerle un color aleatorio
  const chosen = squares[getRandomInt(0, squares.length - 1)];
  chosen.style.backgroundColor = getRandomColor();
}

setInterval(colorSquare, 500);
