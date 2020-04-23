const fs = require("fs");
const path = require("path");

// Versión asíncrona

fs.writeFile(
  path.join(__dirname, "fichero.txt"), //Donde queremos escribirlo
  "Ola amigas!!!", //Lo que queremos escribir
  //Callback
  function (error) {
    if (error) console.error(error);

    console.log("Ya está escrito el fichero");
  }
);

console.log("Estamos escribiendo un fichero");

// Versión síncrona

fs.writeFileSync("fichero2.txt", "Ola amigas otra vez!!");
console.log("cuando se muestre esto el fichero ya estará escrito en disco");

//Lo siguiente NO FUNCIONA
// fs.writeFile("fichero.txt", "texto")
//   .then((resultado) => console.log(resultado))
//   .catch((error) => console.error(error));
