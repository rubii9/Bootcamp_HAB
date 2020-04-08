"use strict";
let matriz = new Array(5);
for (let i = 0; i < matriz.length; i++) {
  matriz[i] = new Array(5);
  for (let j = 0; j < matriz.length; j++) {
    if (i === j || (i + j === matriz.length - 1 && i < 3)) {
      matriz[i][j] = "*";
    } else {
      matriz[i][j] = 0;
    }
  }
}

console.log(matriz);
