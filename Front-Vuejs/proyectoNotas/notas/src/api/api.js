// EXPRESS
const express = require("express");
// CORS
const cors = require("cors");
//BODYPARSER
const bodyparser = require("body-parser");
// MYSQL
const mysql = require("mysql");
// APP
const app = express();

// APP USES
app.use(cors());
app.use(
  bodyparser.urlencoded({
    extended: true,
  })
);
app.use(bodyparser.json());

// DATOS CONEXION A LA BBDD
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "HACKRUBII9",
  database: "notas",
});

// CONEXION A LA BBDD
connection.connect((error) => {
  if (error) throw error;
  console.log("DATABASE UP");
});

//PUERTO CONEXION DE LA API
const PORT = 3050;

app.listen(PORT, () => console.log("API UP"));

// RECOGIENDO LISTA DE NOTAS
app.get("/notas", (req, res) => {
  const sql = "SELECT * FROM lista_notas";
  connection.query(sql, (error, results) => {
    if (error) throw error;
    if (results.length > 0) {
      res.json(results);
    } else {
      res.send("Lista de notas vacia");
    }
  });
});

// MODIFICAR NOTA
app.put("/notas/update/:id", (req, res) => {
  res.send("Mi nota x ha sido modificada");
});

// BORRAR NOTA
app.delete("/notas/del/:id", (req, res) => {
  res.send("Mi nota x ha sido borrada");
});

app.post("/notas/add", (req, res) => {
  // SECUENCIA SQL
  const sql = "INSERT INTO lista_notas SET ?";
  // OBJETO QUE RECIBE LA BBDD
  const newNote = {
    texto: req.body.texto,
  };
  //CONEXION Y EJECUCIÓN SQL
  connection.query(sql, newNote, (error) => {
    if (error) throw error;
    res.send("Nota creada");
  });
});
