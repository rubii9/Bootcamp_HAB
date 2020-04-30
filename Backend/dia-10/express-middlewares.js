require("dotenv").config();
const express = require("express");

const port = process.env.PORT;

const app = express();

app.use((req, res, next) => {
  req.initialTime = new Date();
  next();
});

app.use((req, res, next) => {
  console.log(req.url);
  next();
});

app.use((req, res, next) => {
  const differenceInMiliseconds =
    new Date().getTime() - req.initialTime.getTime();

  res.send(
    `Tardó ${differenceInMiliseconds}ms en llegar del middleware anterior a este`
  );
});

app.use((error, req, res, next) => {
  res.status(500).send("hubo un error");
});

app.use((req, res, next) => {
  res.send("Final");
});

app.listen(port, () => {
  console.log(`Servidor web funcionando en http://localhost:${port}`);
});
