const fs = require("fs").promises;
const path = require("path");

async function writeFile(path, content) {
  try {
    await fs.writeFile(path, `${content}\n`);
  } catch (error) {
    console.error(error);
  }
}
const data = `
lorem ipsum dolor sit amet!
viva el latín
😈🎗
`;

writeFile(path.join(__dirname, "./files/loremipsum2.txt"), data);
