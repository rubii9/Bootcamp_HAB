const cowsay = require("cowsay");

const arguments = process.argv.slice(2);
const texto = arguments.join(" ");

console.log(
  cowsay.think({
    text: texto || "No digo nada",
    e: "oO",
    cow: "./clippy",
  })
);
