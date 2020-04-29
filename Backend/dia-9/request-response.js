require("dotenv").config();
const express = require("express");
const app = express();
const path = require("path");

app.get("/", function (req, res) {
  const ip = req.ip;
  const routeWithoutQueryString = req.path;
  const query = req.query;

  console.log(ip);
  console.log(req.url);
  console.log(routeWithoutQueryString);
  console.log(query);

  res.set({ "X-Powered-By": "Hackaboss" });

  res.status(200).send({ message: "ok" });
  // res.sendFile(path.join(__dirname, "./www/css/style.css"));
});

app.get("/contact", function (req, res) {
  res.end("Página de contacto");
});

app.listen(process.env.PORT);
