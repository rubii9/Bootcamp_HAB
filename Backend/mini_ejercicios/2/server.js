require("dotenv").config();
const http = require("http");
const url = require("url");
const fs = require("fs").promises;
const path = require("path");
const { formatDistance } = require("date-fns");
const { es } = require("date-fns/locale");

const port = process.env.PORT;

const server = http.createServer();

server.on("request", async function (request, response) {
  let body = [];

  request
    .on("error", (error) => {
      console.error(error);
    })
    .on("data", (chunk) => {
      body.push(chunk);
    })
    .on("end", async () => {
      body = Buffer.concat(body).toString();
      const { url, method } = request;
      if (method.toUpperCase() === "GET" && url === "/freedom") {
        let distance = formatDistance(
          new Date(),
          new Date(2020, 5, 31, 0, 0, 0, 0),
          {
            locale: es,
          }
        );
        //responde con un json con la lista de mensajes
        let message = {
          message: "Quedan " + distance + " para el 30 de junio 2020",
        };
        let info = JSON.stringify(message);
        await fs.writeFile("mensajes.json", info);
        const data = await fs.readFile(
          path.join(__dirname, "mensajes.json"),
          "utf-8"
        );
        response.statusCode = 200;
        response.setHeader("Content-type", "application/json");

        response.end(data);
      }
    });
});
server.listen(port);
console.log(`Servidor web funcionando en http://localhost:${port}`);
