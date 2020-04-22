const sharp = require("sharp");

const imageFile = process.argv[2];

if (!imageFile) {
  console.error("No image specified!");
  process.exit();
}

const output = `grayscale_${imageFile}`;

sharp(imageFile)
  .resize(500, 500)
  .grayscale()
  .blur(1)
  .toFile(output, (error, info) => {
    if (error) console.error(error.message);

    console.log(`acabado, tu imagen está en: ${output}`);
  });
