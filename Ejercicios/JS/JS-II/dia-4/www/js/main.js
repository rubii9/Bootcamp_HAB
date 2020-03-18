"use strict";

function getRandomNum(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function moveSection() {
  const section = document.querySelector("section");
  const maxTop = window.innerHeight;
  const maxLeft = window.innerWidth;
  section.style.top = `${getRandomNum(100, maxTop - 200)}px`;
  section.style.left = `${getRandomNum(100, maxLeft - 100)}px`;
}

function winner() {
  window.alert("CONGRATS!! U WIN!");
  section.addEventListener("mouseover", moveSection);
}

const section = document.querySelector("section");

section.addEventListener("mouseover", moveSection);

document.addEventListener("keydown", event => {
  section.removeEventListener("mouseover", moveSection);
});

section.addEventListener("click", winner);
