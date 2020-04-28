const fs = require("fs-extra");
const { formatDistance } = require("date-fns");
const { es } = require("date-fns/locale");

const filePath = "./memory.txt";

async function readMemory() {
  try {
    await fs.ensureFile(filePath);

    const currentMemory = await fs.readFile(filePath, "utf-8");

    if (currentMemory) {
      const dateFile = new Date(currentMemory);
      const msg = formatDistance(dateFile, new Date(), {
        locale: es,
      });
      console.log(`La última vez que ejecutaste fue hace ${msg}`);
    } else {
      console.log("Es la primera vez que ejecutas");
      await fs.writeFile(filePath, new Date());
      process.exit();
    }
  } catch (error) {
    console.error(error);
  }
}

readMemory();
