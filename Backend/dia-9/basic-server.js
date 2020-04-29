require("dotenv").config();
const express = require("express");
const app = express();

app.get("/", function (req, res) {
  res.end("Ola amigas");
});

app.get("/contact", function (req, res) {
  res.end("Página de contacto");
});

app.listen(process.env.PORT);
