const http = require("http");
const db = require("./lib/db");

const server = http.createServer(function (request, response) {
  if (request.url === "/") {
    response.statusCode = 200;
    response.setHeader("Content-type", "application/json");

    response.end(JSON.stringify(db));
  } else {
    response.statusCode = 404;
    response.setHeader("Content-type", "text/html");
    response.end("<strong>Not found!</strong>");
  }
});

server.listen(3000, "localhost", function () {
  console.log("el servidor está funcionando en http://localhost:3000");
});
