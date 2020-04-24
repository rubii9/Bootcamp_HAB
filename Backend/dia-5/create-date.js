console.log("Momento actual");
const now = new Date();
console.log(now);
console.log(now.getTime());

console.log("Otras fechas");
console.log("mediante unix time");
const fecha1 = new Date(1000 * 60 * 60 * 24);
console.log(fecha1);

console.log("Mediante una cadena de texto");
const fecha2 = new Date("September 2 1976 07:00");
console.log(fecha2);

console.log("Mediante valores numéricos");
const fecha3 = new Date(2000, 0, 1, 17, 30, 00, 00);
console.log(fecha3);
