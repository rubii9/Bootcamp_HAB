const sharp = require("sharp");
const path = require("path");
const fs = require("fs");

const imageBuffer = fs.readFileSync(path.join(__dirname, "images/perro3.jpeg"));

const image = sharp("./images/perro1.jpeg");
const image2 = sharp(path.join(__dirname, "./images/perro2.jpeg"));
const image3 = sharp(imageBuffer);

image.resize(300).toFile("perro-small.jpg", function (error) {
  if (error) console.error(error);
  console.log("perro.jpg fue grabado en disto");
});
