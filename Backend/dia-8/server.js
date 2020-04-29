require("dotenv").config();
const http = require("http");
const urlParser = require("url");
const fs = require("fs").promises;
const path = require("path");

const port = process.env.PORT;

const server = http.createServer();

server.on("request", async function (request, response) {
  // Request:
  // - ruta
  // - método
  // - headers

  // const url = request.url;
  // const method = request.method;
  // const headers = request.headers;

  //Esto es lo mismo que lo anterior

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
      const { url, method, headers } = request;

      const query = urlParser.parse(url, true).query;

      /*
        / y /index.html - devuelve un html
        /js/main.js - devuelve un script
        /data (GET) - devuelve un JSON con los últimos mensajes
        /data (POST) - guarda el mensaje envíado en el body
      */

      if (url === "/" || url === "/index.html") {
        const data = await fs.readFile(
          path.join(__dirname, "www/index.html"),
          "utf-8"
        );

        response.statusCode = 200;
        response.setHeader("Content-type", "text/html");

        response.end(data);
      } else if (url === "/js/main.js") {
        //responde con el archivo js para ejecutar en cliente
        const data = await fs.readFile(
          path.join(__dirname, "www/main.js"),
          "utf-8"
        );

        response.statusCode = 200;
        response.setHeader("Content-type", "application/javascript");

        response.end(data);
      } else if (method.toUpperCase() === "GET" && url === "/data") {
        //responde con un json con la lista de mensajes
        const data = await fs.readFile(
          path.join(__dirname, "guestbook.json"),
          "utf-8"
        );

        response.statusCode = 200;
        response.setHeader("Content-type", "application/json");

        response.end(data);
      } else if (method.toUpperCase() === "POST" && url === "/data") {
        //en la variable body está el body de la petición que parseamos
        //en las líneas 25 a 33
        const newMessage = JSON.parse(body);

        //Leo la lista actual de mensajes (devuelve un string)
        const currentMessagesData = await fs.readFile(
          path.join(__dirname, "guestbook.json"),
          "utf-8"
        );

        //convierto el string anterior a un objeto con JSON.parse
        const currentMessagesList = JSON.parse(currentMessagesData);

        //creo un nuevo objeto similar pero que contiene el mensaje recibido al principio de la lista
        const updatedMessageList = {
          messages: [newMessage, ...currentMessagesList.messages],
        };

        //escribo ese objeto a disco en el fichero guestbook.json
        await fs.writeFile(
          path.join(__dirname, "guestbook.json"),
          JSON.stringify(updatedMessageList)
        );

        //Inicio la respuesta
        response.statusCode = 200;
        response.setHeader("Content-type", "application/json");

        //En la respuesta muestro todos los mensajes que hay en el fichero
        response.end(JSON.stringify(updatedMessageList));
      } else {
        //responde con un error 404
        response.statusCode = 404;
        response.setHeader("Content-type", "text/plain");
        response.end("Nothing found here. Go back!");
      }
    });
});

server.listen(port);
console.log(`Servidor web funcionando en http://localhost:${port}`);
