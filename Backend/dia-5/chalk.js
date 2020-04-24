const chalk = require("chalk");

console.log(chalk.italic("Este texto está en itálica"));
console.log(chalk.redBright("Este texto es verde"));
console.log(chalk.bgMagentaBright("Este texto tiene fondo azul"));

const age = 43;
const height = 179;

console.log(chalk`
{blue.bold Datos:}
- {red Edad}: {bold.green ${age}}
- {red Altura}: {bold.green ${height}}
`);
