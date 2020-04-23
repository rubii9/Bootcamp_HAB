const fs = require("fs").promises;
const path = require("path");

async function fileExists(path) {
  try {
    await fs.access(path);
    console.log(`La ruta: ${path} si que existe`);
  } catch (error) {
    if (error.code === "ENOENT") {
      console.log("La ruta no existe");
    } else {
      console.error(error.code);
    }
  }
}

fileExists(path.join(__dirname, "loremipsum.txt"));
fileExists(path.join(__dirname, "fichero.txt"));
