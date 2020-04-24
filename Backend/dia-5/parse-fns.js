const { parse } = require("date-fns");
const { es } = require("date-fns/locale");

const f1 = "23:45 del 03 de marzo del 2020";
const f2 = "12:00 del 12 de febrero del 1985";

function parseaFecha(fecha) {
  return parse(fecha, "HH:mm 'del' dd 'de' MMMM 'del' yyyy", new Date(), {
    locale: es,
  });
}

console.log(parseaFecha(f1));
console.log(parseaFecha(f2));
