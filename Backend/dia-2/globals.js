// console
console.log("mensaje");

//setTimeout, setInterval, clearTimeout, clearInterval
const retardo = setTimeout(() => {
  console.log("me voy ejecutar en 10 segundos");
}, 10000);

clearTimeout(retardo); //ya no se va a ejecutar

//module
console.log(module);

//__filename
console.log(__filename);

//__dirname
console.log(__dirname);

//require
require("path");
