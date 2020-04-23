const fs = require("fs").promises;
const path = require("path");

async function createDirectory(path) {
  try {
    await fs.mkdir(path, {
      recursive: true,
    });

    console.log(`El directorio ${path} fue creado!`);
  } catch (error) {
    if (error.code === "EEXIST") {
      console.error("El directorio ya existe");
    } else {
      console.error(error);
    }
  }
}

createDirectory(path.join(__dirname, "images"));
createDirectory(path.join(__dirname, "images2/miniatures/2018/new"));
