const fs = require("fs");

const data = {
  width: 500,
  height: 700,
  sides: [1, 3, 7],
};

try {
  fs.writeFileSync("./files/data.json", JSON.stringify(data, null, 2));

  console.log("El JSON fue escrito correctamente");
} catch (error) {
  console.error(error);
}
