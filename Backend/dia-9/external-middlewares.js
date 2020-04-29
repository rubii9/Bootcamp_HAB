require("dotenv").config();
const express = require("express");
const app = express();
const morgan = require("morgan");
const path = require("path");
const bodyParser = require("body-parser");

const staticPath = path.resolve(__dirname, "www");

//external middlewares
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan("tiny"));
app.use(express.static(staticPath));

app.post("/data", function (req, res) {
  res.statusCode = 200;
  res.end("Datos recibidos");
});

//personal middlewares
app.use(function (req, res) {
  res.statusCode = 404;
  res.end("Nada por aqui");
});

app.listen(process.env.PORT);
