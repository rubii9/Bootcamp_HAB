const fs = require("fs").promises;
const path = require("path");

async function readFile(path) {
  try {
    const content = await fs.readFile(path);
    console.log(content.toString());
  } catch (error) {
    console.error(error);
  }
}

readFile(path.join(__dirname, "fichero.txt"));
