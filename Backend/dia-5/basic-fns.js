const { format } = require("date-fns");
const { gl } = require("date-fns/locale");

const dateFns = require("date-fns");

const fechaDB = new Date();
fechaDB.setMonth(0);

//24 de abril de 2020
const fechaFormateada = format(fechaDB, "d 'de' MMMM 'del' yyyy 'a las' H:mm", {
  locale: gl,
});

const formatoMysql = format(fechaDB, "yyyy-MM-dd");

console.log(fechaFormateada);
console.log(formatoMysql);
