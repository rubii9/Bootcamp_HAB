const http = require("http");

let count = 1;

const server = http.createServer((request, response) => {
  response.statusCode = 200;
  response.setHeader("Content-Type", "text/html");
  response.end(`<h1>Visitaste esta pagina ${count} veces</h1>`);
  count++;
});

server.listen(3000, "localhost", () => {
  console.log("servidor ejecutandose");
});
