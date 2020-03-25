"use strict";

import { randomNumber } from "/js/helpers.js";

const button = document.querySelector("button");

// Evento de click
const handleButtonClick = () => alert("WINRAR!");
button.addEventListener("click", handleButtonClick);

const lastKeys = [];

let shouldTroll = true;

//Evento de mouseover

const handleButtonMouseOver = evento => {
  const { width, height } = button.getBoundingClientRect();

  const { altKey, shiftKey } = event;

  if (shouldTroll && !altKey && !shiftKey) {
    const ANCHO_MAX = window.innerWidth - width;
    const ALTO_MAX = window.innerHeight - height;

    button.style.top = randomNumber(ALTO_MAX) + "px";
    button.style.left = randomNumber(ANCHO_MAX) + "px";
  }
};

// Trampa 1
button.addEventListener("mouseover", handleButtonMouseOver);

document.body.addEventListener("dblclick", () => doNotTroll());

const doNotTroll = () => {
  shouldTroll = false;
  document.body.style.backgroundColor = "green";
};

// Trampa 2

const handleWindowKeyPress = event => {
  lastKeys.push(event.key);
  if (lastKeys.slice(-8).join("") === "pocomaco") {
    doNotTroll();
  }
};

window.addEventListener("keypress", handleWindowKeyPress);
