"use strict";

const button = document.querySelector("button");

// addEventListener

button.addEventListener("click", function() {
  console.log("acabas de clickar en el botón");
});

button.addEventListener("click", function() {
  console.log("esto también se va a ejecutar");
});

const handleMouseOver = () => {
  console.log("acabas de hacer mouse over sobre el botón");
};

button.addEventListener("mouseover", handleMouseOver);

// removeEventListener
button.removeEventListener("mouseover", handleMouseOver);
