const sharp = require("sharp");
const fs = require("fs").promises;
const path = require("path");
const minimist = require("minimist");

async function createDirectoryIfNotExists(path) {
  try {
    await fs.mkdir(path);
  } catch (error) {}
}

async function resizeDirectory(inputDir, outputDir, size) {
  try {
    await createDirectoryIfNotExists(outputDir);
    await fs.stat(inputDir);

    const files = await fs.readdir(inputDir);
    for (const file of files) {
      const extension = path.extname(file);
      if (extension === ".jpeg" || extension == ".jpg" || extension == ".png") {
        const image = sharp(path.join(inputDir, file));
        image.resize(size, size);
        console.log("Generando miniatura...");
        await image.toFile(path.join(outputDir, `miniature${size}_${file}`));
      }
    }
  } catch (error) {
    if (error.code === "ENOENT") {
      console.error("El directorio no existe");
    }
    console.error(error.message);
  }
}

const { inputDir, outputDir, size } = minimist(process.argv.slice(2));

resizeDirectory(
  path.join(__dirname, inputDir),
  path.join(__dirname, outputDir),
  Number(size)
);

//node ejercicio.js --inputDir=images --outputDir=ejercicio --size=200
