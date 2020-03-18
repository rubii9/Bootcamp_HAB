"use strict";

import { getRandomColor } from "/js/helpers.js";

// getElementsByClassName

const linksCabecera = document.getElementsByClassName("link-header");

let i = 1;
for (const link of linksCabecera) {
  link.style.fontSize = `${i}rem`;
  link.style.backgroundColor = getRandomColor();
  i++;
}

// getElementsByTagName

const parrafos = document.getElementsByTagName("p");

for (const p of parrafos) {
  p.style.textDecoration = "underline";
}

// querySelectorAll
const headerChildren = document.querySelectorAll("header > *");

for (const el of headerChildren) {
  el.style.backgroundColor = "rgba(255, 0, 0, .2)";
}
