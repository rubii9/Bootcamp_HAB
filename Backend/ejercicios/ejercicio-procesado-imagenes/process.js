//node process.js --inputDir=<dir_images> --outputDir=<output> --watermark=logo.png --grayscale

const sharp = require("sharp");
const minimist = require("minimist");
const fs = require("fs-extra");
const path = require("path");
const chalk = require("chalk");

const { isProbablyImage } = require("./helpers");

async function processDirectory({ inputDir, outputDir, watermark, grayscale }) {
  try {
    //me aseguro de que exista el directorio output
    await fs.ensureDir(outputDir);

    //compruebo que exista watermark e inputDir
    await fs.access(watermark);
    await fs.access(inputDir);

    //Lanzo error si el watermark no es una imagen (por la extensión)
    if (!isProbablyImage(watermark)) {
      throw new Error("El watermark no es una imagen");
    }

    //Leo directorio inputDir
    const inputFiles = await fs.readdir(inputDir);

    //Filtro los contenidos del diretorio por extensión
    const imageFiles = inputFiles.filter((file) => isProbablyImage(file));

    //Recorro la lista de imágenes
    for (const imgFileName of imageFiles) {
      //Al sólo recibir el nombre de la imagen construyo el path completo
      const imagePath = path.join(inputDir, imgFileName);

      //Cargo la imagen en sharp
      const processedImage = sharp(imagePath);

      //Si la opción grayscale es true la convierto a gris
      if (grayscale) {
        processedImage.grayscale();
      }

      //Le coloco el watermark
      processedImage.composite([
        {
          input: watermark,
          gravity: "southeast",
        },
      ]);

      console.log(`Procesando ${imgFileName}`);

      //Guardo con otro nombre en el directorio output
      await processedImage.toFile(
        path.join(outputDir, `processed_${imgFileName}`)
      );
    }
  } catch (error) {
    if (error.code === "ENOENT") {
      console.error(
        chalk.redBright("El directorio de imágenes o el watermark no existen")
      );
    } else {
      console.error(error);
    }
  }
}

//procesar argumentos con minimist
const { inputDir, outputDir, watermark, grayscale } = minimist(
  process.argv.slice(2)
);

if (!inputDir || !outputDir || !watermark) {
  console.error(
    chalk.redBright(
      `Los argumentos inputDir, outputDir y watermark son obligatorios`
    )
  );
  process.exit();
}

processDirectory({
  inputDir: path.resolve(inputDir),
  outputDir: path.resolve(outputDir),
  watermark: path.resolve(watermark),
  grayscale,
});
