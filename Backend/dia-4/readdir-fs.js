const fs = require("fs").promises;
const path = require("path");
const argParser = require("minimist");

// Mostrar información sobre los contenidos del directorio
async function listDirectoryInfo(pathName) {
  try {
    //compruebo si existe y que es un directorio
    const info = await fs.stat(pathName);

    //Si no es un directorio lanzo un error
    if (!info.isDirectory()) {
      throw new Error(`La ruta ${pathName} no es un directorio`);
    }

    //Listo los contenidos del directorio, sólo me dará el nombre de cada fichero y directorio
    const contents = await fs.readdir(pathName);

    //Recorro el array resultante del paso anterior
    for (const name of contents) {
      //Uno el nombre del fichero/directorio al path original
      const route = path.join(pathName, name);
      //Consigo información de ese fichero/directorio
      const routeInfo = await fs.stat(route);

      //Imprimo tamaño si es un fichero y si no indico que es un directorio
      if (routeInfo.isFile()) {
        console.log(`El tamaño de ${name} es de ${routeInfo.size} bytes`);
      } else {
        console.log(`${name} es un directorio`);
      }
    }
  } catch (error) {
    console.log(error.message);
  }
}

//Proceso argumentos con minimist
const arguments = argParser(process.argv.slice(2));

listDirectoryInfo(path.resolve(__dirname, arguments.directory));

//node readdir-fs.js --directory=../dia-2
