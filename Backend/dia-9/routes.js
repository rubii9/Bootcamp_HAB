require("dotenv").config();
const express = require("express");
const app = express();

app.get("/", function (req, res) {
  res.end("Ola amigas");
});

app.post("/contact", function (req, res) {
  fofofo(); //esto genera un error que va a ser procesado por el siguiente middeware

  res.end("Página de contacto");
});

//Este middleware sólo se ejecuta cuando hay un error en un middleware o ruta previa
app.use(function (error, req, res, next) {
  res.statusCode = 500;
  res.end(`Ocurrió este error: ${error.message}`);
});

app.use(function (req, res) {
  res.statusCode = 404;
  res.end("Pagina no encontrada");
});

app.listen(process.env.PORT);
