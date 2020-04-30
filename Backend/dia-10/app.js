require("dotenv").config();
const express = require("express");
const morgan = require("morgan");
const path = require("path");

const {
  dataController,
  dataPostControler,
  userPhotoController,
} = require("./controllers");

const { basicMiddleware, authMiddleware } = require("./middlewares");

const port = process.env.PORT;

const app = express();

app.use(morgan());
app.use(express.static(path.resolve(__dirname, "static")));

//Rutas
app.get("/datos", basicMiddleware, dataController);
app.post("/datos", authMiddleware, dataPostControler);

app.get(
  "/usuario/:userId/fotos/:categoria",
  authMiddleware,
  userPhotoController
);

app.use((error, req, res, next) => {
  console.error(error);
  res.status(500).send("hubo un error");
});

app.use((req, res, next) => {
  res.status(404).send("Not found");
});

app.listen(port, () => {
  console.log(`Servidor web funcionando en http://localhost:${port}`);
});
