console.log("Momento actual");
const now = new Date(-2393223297239); //Fecha random

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

console.log(`El año es ${now.getFullYear()}`);
console.log(`El mes es ${meses[now.getMonth()]}`); //los meses van de 0 a 11
console.log(`El dia del mes es ${now.getDate()}`);
console.log(`El dia de la semana es ${diasSemana[now.getDay()]}`); //va entre 0 y 6
console.log(`La hora es ${now.getHours()}`);
console.log(`Los minutoes serían ${now.getMinutes()}`);
console.log(`Los segundos serían ${now.getSeconds()}`);
console.log(`Los milisegundos serían ${now.getMilliseconds()}`);

now.setFullYear(1985);
now.setDate(30);

console.log(`El año es ${now.getFullYear()}`);
console.log(`El mes es ${meses[now.getMonth()]}`); //los meses van de 0 a 11
console.log(`El dia del mes es ${now.getDate()}`);
