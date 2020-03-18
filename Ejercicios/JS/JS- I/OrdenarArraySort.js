"use strict";
const numbers = [4, 2, 5, 10, 3];
const mayoraMenor = numbers.sort((a, b) => b - a);
console.log(mayoraMenor);
const menoraMayor = numbers.sort((a, b) => a - b);
console.log(menoraMayor);
