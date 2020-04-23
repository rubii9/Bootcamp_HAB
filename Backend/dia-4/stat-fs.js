const fs = require("fs").promises;
const path = require("path");

async function fileInfo(path) {
  try {
    const info = await fs.stat(path);

    // Puede ser más cosas que fichero o directorio pero para simplificar ponemos así.
    const tipo = info.isFile() ? "fichero" : "directorio";

    console.log(`El ${tipo} tiene un tamaño de ${info.size} bytes`);
    console.log(`El ${tipo} fue creado el ${info.birthtime}`);
    console.log(`El ${tipo} fue modificado el ${info.mtime}`);

    console.log("Es un fichero", info.isFile());
    console.log("Es un directorio", info.isDirectory());
    console.log("--------");
    console.log("--------");
  } catch (error) {
    console.error(error);
  }
}

fileInfo(path.join(__dirname, "fichero.txt"));
fileInfo(path.join(__dirname));
