const saludos = require("./lib/greetings");
const { greetingEnglish, greetingSpanish } = require("./lib/greetings");

const calcula = true;

if (calcula) {
  const { add } = require("./lib/operaciones");

  console.log(add(3, 3));
}

console.log(saludos);

saludos.greetingEnglish();
saludos.greetingSpanish();

greetingEnglish();
greetingSpanish();
