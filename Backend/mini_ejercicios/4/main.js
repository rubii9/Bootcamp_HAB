const fs = require("fs").promises;
const path = require("path");
const argParser = require("minimist");
const chalk = require("chalk");
const arguments = argParser(process.argv.slice(2));

async function listFileInfo(pathName) {
  try {
    const info = await fs.stat(pathName);

    if (info.isDirectory()) {
      throw new Error(`La ruta ${pathName} no es un directorio`);
    }

    const contents = await fs.readFile(pathName);
    const routeInfo = await fs.stat(pathName);
    if (routeInfo.size < 10000) {
      console.log(
        chalk`{blue.bold El el contenido del archivo} ${chalk.yellow.bold(
          path.basename(pathName)
        )} {blue.bold es:} \n\n${chalk.green(contents.toString())}`
      );
    } else {
      console.log(
        chalk`{blue.bold El el  del archivo} ${chalk.red(
          path.basename(pathName)
        )} {blue.bold se pasa de 10kb}`
      );
    }
  } catch (error) {
    console.log(error.message);
  }
}

listFileInfo(path.resolve(__dirname, arguments.route));
