const sharp = require("sharp");
const fs = require("fs").promises;
const path = require("path");

async function createDirectorIfNotExists(path) {
  try {
    await fs.mkdir(path);
  } catch (error) {}
}

async function savePNGminiature(imagePath, outputPath, outputFileName) {
  //crear directorio destino
  //cargar la imagen en sharp
  //cambiar el tamaño a miniatura (200px ancho y 200px alto)
  //guardar en el directorio destino
  try {
    const outputDir = path.join(__dirname, outputPath);

    await createDirectorIfNotExists(outputDir);

    const image = sharp(imagePath);
    image.resize(200, 200);

    const imageBuffer = await image.toFormat("png").toBuffer();

    // await image.toFile(path.join(outputDir, outputFileName));

    await fs.writeFile(path.join(outputDir, outputFileName), imageBuffer);
  } catch (error) {
    console.log(error);
  }
}

savePNGminiature("./images/perro3.jpeg", "./miniatures", "perro1.png");
savePNGminiature("./images/perro4.jpeg", "./miniatures", "perro2.png");
