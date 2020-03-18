"use strict";

function findLongestWord(sen) {
  let arraypalabras = sen.replace(/[^A-Za-z\s]/g, "").split(" ");
  let palabra_mas_grande = "";
  for (let i = 0; i < arraypalabras.length; i++) {
    if (arraypalabras[i].length > palabra_mas_grande.length) {
      palabra_mas_grande = arraypalabras[i];
    }
  }
  return palabra_mas_grande;
}
console.log(findLongestWord("Hola me llamo Ruben y me gusta el tenis"));
