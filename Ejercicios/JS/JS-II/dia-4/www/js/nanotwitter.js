"use strict";

const input = document.querySelector("#tweet");
const button = document.querySelector("#send");
const list = document.querySelector("#latest");

// Cuando se haga click en button:
// X leer contenido de input
// X crear un li
// X establecer el texto del li con el contenido de input anterior
// X añadir li a la lista

function addTweetToList(text) {
  const li = document.createElement("li");
  li.textContent = text;

  list.prepend(li);
}

function handleClick(event) {
  event.preventDefault();
  const text = input.value.trim();

  if (text.length > 0 && text.length < 281) {
    addTweetToList(text);
    input.value = "";
  }
}

button.addEventListener("click", handleClick);
