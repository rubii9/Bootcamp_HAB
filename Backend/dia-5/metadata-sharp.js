const sharp = require("sharp");

async function showImageMetadata(imagePath) {
  const image = sharp(imagePath);

  const metadata = await image.metadata();

  console.log(metadata);
}

showImageMetadata("./images/perro2.jpeg");
