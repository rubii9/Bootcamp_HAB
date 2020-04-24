const sharp = require("sharp");
const fs = require("fs").promises;
const path = require("path");
const minimist = require("minimist");

// Esta función se asegura de que un directorio existe
// Pero mejor usar este esta función del módulo fs-extra (instalar con npm install fs-extra --save)
// https://github.com/jprichardson/node-fs-extra/blob/HEAD/docs/ensureDir.md
async function createDirectorIfNotExists(path) {
  try {
    await fs.mkdir(path);
  } catch (error) {}
}

// Esta función va a leer los ficheros de inputDir y si tienen formato jpg o png
// vamos a usar sharp para cambiarles el tamaño y guardarlos en outputDir
async function resizeDirectory(inputDir, outputDir, size) {
  try {
    //Nos aseguramos que existe outputDir
    await createDirectorIfNotExists(outputDir);
    //Comprobamos que existe inputDir
    await fs.stat(inputDir);

    //Leemos el directorio inputDir
    const files = await fs.readdir(inputDir);

    //Recorremos la lista de ficheros
    for (const file of files) {
      //Sacamos la extensión del fichero
      const extension = path.extname(file);

      //Si el fichero "parece" una imágen ...
      if (
        extension === ".jpeg" ||
        extension === ".jpg" ||
        extension === ".png"
      ) {
        //Cargamos la imagen en sharp
        const image = sharp(path.join(inputDir, file));

        //Le cambiamos el tamaño al indicado
        image.resize(size, size);
        console.log(`Generando miniatura de ${file}`);

        //Guardamos en outputDir con un nombre de fichero razonable
        await image.toFile(path.join(outputDir, `miniature_${size}_${file}`));
      }
    }
  } catch (error) {
    if (error.code === "ENOENT") {
      console.error("El directorio no existe");
    } else {
      console.error(error.message);
    }
  }
}

// Proceso argumentos con minimist
const { inputDir, outputDir, size } = minimist(process.argv.slice(2));

//Ejecuto la función principal
resizeDirectory(
  path.join(__dirname, inputDir),
  path.join(__dirname, outputDir),
  Number(size)
);
