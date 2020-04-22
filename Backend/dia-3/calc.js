const argParser = require("minimist");

const arguments = argParser(process.argv.slice(2));

console.log("operacion", arguments.operacion);
console.log("a", arguments.a);
console.log("b", arguments.b);
