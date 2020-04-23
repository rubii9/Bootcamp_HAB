const fs = require("fs").promises;
const path = require("path");

async function deleteFile(path) {
  try {
    await fs.unlink(path);
    console.log(`Borrado: ${path}`);
  } catch (error) {
    console.error(error);
  }
}

deleteFile(path.join(__dirname, "files/loremipsum2.txt"));
