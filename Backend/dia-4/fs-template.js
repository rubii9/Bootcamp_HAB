const fs = require("fs").promises;
const path = require("path");

async function fileInfo(path) {
  try {
  } catch (error) {
    console.error(error);
  }
}

fileInfo(path.join(__dirname, "loremipsum.txt"));
