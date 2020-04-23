const fs = require("fs");

const jsonData = fs.readFileSync("./files/provincias.json");

const json = JSON.parse(jsonData.toString());

console.log(json.provincias[1]);
