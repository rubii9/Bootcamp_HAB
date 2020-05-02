const path = require("path");

function isProbablyImage(route) {
  return [
    ".png",
    ".jpg",
    ".jpeg",
    ".webp",
    ".gif",
    ".svg",
    ".tif",
    ".tiff",
  ].includes(path.extname(route));
}

module.exports = {
  isProbablyImage,
};
