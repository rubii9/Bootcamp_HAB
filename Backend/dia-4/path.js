const path = require("path");

// normalize
console.log("Normalize");
console.log(path.normalize("/home/berto/Documents/../Temp"));
console.log(path.normalize("/home/berto/Documents/../Temp"));

const path1 = "/home////berto/";
const path2 = "//../documents/./Temp";

const pathunido = path1 + path2;
console.log(path.normalize(pathunido));

const pathrelativo = "../../css";
console.log(path.normalize(pathrelativo));

// join
console.log("Join");
const p = "..//lib";

console.log(__dirname + p);
console.log(path.join(__dirname, p));

// resolve
console.log("Resolve");
console.log(path.resolve("../lib/module"));
console.log(path.resolve("../lib/module", "../../../beta/3"));

// dirname
console.log("Dirname");
console.log(path.dirname("/home/berto/Documents/imagen.jpg"));
console.log(path.dirname("/home/berto/Documents/fotos"));

// extname
console.log("Extname");
console.log(path.extname("/home/berto/Documents/foto.jpg"));

// parse
console.log("Parse");
console.log(path.parse("/home/berto/imagen.jpg"));
