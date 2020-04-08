"use strict";

function randomKey() {
  return Math.round(Math.random() * 10);
}

function defuseBomb() {
  const key = randomKey();
  let lives;
  console.log(key);
  for (let i = 1; i <= 5; i++) {
    const answer = +prompt("Introduce valor");
    lives = 5 - i;

    if (answer === key) {
      return true;
    } else {
      console.log("Try again");
      console.log("U got: " + lives + " lives");
    }
  }
  return false;
}

function playBomb() {
  if (defuseBomb()) {
    console.log("CORRECTO");
  } else {
    console.log("BOOOOOOOOOOM!");
  }
}

playBomb();
