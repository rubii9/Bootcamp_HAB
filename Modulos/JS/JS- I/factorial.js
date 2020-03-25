"use strict";

function factorial(ammount) {
  if (ammount <= 1) {
    return 1;
  }
  return ammount * factorial(ammount - 1);
}
console.log(factorial(8));

function factorial2(ammount2) {
  let valor = 1;
  if (ammount2 > 1) {
    for (let i = ammount2; i >= 2; i--) {
      valor = valor * i;
    }
  }
  return valor;
}
console.log(factorial2(8));
