"use strict";

function uppercaseEcho(message) {
  console.log(message.toUpperCase());
}
function lowercaseecho(message) {
  console.log(message.toLowerCase());
}

function changeCase(caseFunction) {
  const message = "asdAfsdfasAFsaf";
  caseFunction(message);
}

changeCase(uppercaseEcho);
changeCase(lowercaseecho);
