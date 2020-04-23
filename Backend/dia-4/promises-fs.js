const fs = require("fs").promises;
const path = require("path");

async function readFile(path) {
  try {
    const data = await fs.readFile(path);
    console.log(data.toString());
  } catch (error) {
    console.error(error);
  }
}

readFile(path.join(__dirname, "loremipsum.txt"));
