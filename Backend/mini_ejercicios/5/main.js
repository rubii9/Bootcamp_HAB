const os = require("os");
const chalk = require("chalk");

const totalMemory = Math.round(os.totalmem() * 0.000000000931);
const freeMemory = Math.round((os.freemem() / os.totalmem()) * 100);
const opSistem = os.platform();
const vOpSistem = os.release();

console.log(
  chalk`{blue.bold Sistema operativo:} ${chalk.yellow.bold(opSistem)} `
);
console.log(
  chalk`{blue.bold Versión del sistema operativo:} ${chalk.yellow.bold(
    vOpSistem
  )}`
);
console.log(
  chalk`{blue.bold Memoria total:} ${chalk.yellow.bold(
    totalMemory
  )} {yellow.bold gb}`
);
console.log(
  chalk`{blue.bold Memoria libre:} ${chalk.yellow.bold(
    freeMemory
  )} {yellow.bold %}`
);
