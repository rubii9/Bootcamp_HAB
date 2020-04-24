const {
  formatDistance,
  add,
  sub,
  isAfter,
  isBefore,
  isDate,
  isFuture,
  isPast,
  isValid,
} = require("date-fns");
const { gl } = require("date-fns/locale");

const fecha1 = new Date();
const fecha2 = new Date(fecha1.getTime() - 1000 * 60 * 60 * 24);

//Muestra la distancia en formato humano
console.log(formatDistance(fecha1, fecha2, { locale: gl }));

//Suma a la fecha
const fecha3 = add(fecha2, {
  months: 3,
  days: 2,
  hours: 3,
});

//Resta a la fecha
const fecha4 = sub(fecha3, {
  years: 10,
});

console.log(fecha3);
console.log(fecha4);

console.log(`fecha3 es antes que fecha2? ${isBefore(fecha3, fecha4)}`);
