const {
  concat,
  flattenDeep,
  dropRight,
  random,
  sampleSize,
  shuffle,
} = require("lodash");

const a = [1, 2, 3];
const deep = [1, [3, [4, "b"], ["dd", [3, 487]]], "lula"];

console.log(concat(a, 4, [5, "pikachu"]));
console.log(flattenDeep(deep));

const meses = [
  "enero",
  "febrero",
  "marzo",
  "abril",
  "mayo",
  "junio",
  "julio",
  "agosto",
  "septiembre",
  "octubre",
  "noviembre",
  "diciembre",
];

const diasSemana = [
  "lunes",
  "martes",
  "miércoles",
  "jueves",
  "viernes",
  "sábado",
  "domingo",
];

console.log(dropRight(meses, 3));

console.log(shuffle(diasSemana));
console.log(random(100, 300));
console.log(sampleSize(meses, 4));
