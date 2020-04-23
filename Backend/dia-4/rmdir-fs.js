const fs = require("fs").promises;
const path = require("path");

async function deleteDirectory(path) {
  try {
    await fs.rmdir(path, {
      recursive: true,
    });
  } catch (error) {
    if (error.code === "ENOTEMPTY") {
      console.error("El directorio no está vacío");
    } else {
      console.error(error);
    }
  }
}

deleteDirectory(path.join(__dirname, "images"));
deleteDirectory(path.join(__dirname, "images2"));
