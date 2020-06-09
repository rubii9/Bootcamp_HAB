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
  const { texto, id } = req.body;
  // QUERY SQL
  const sql = `UPDATE lista_notas SET texto='${texto}' WHERE id=${id}`;
  connection.query(sql, (error) => {
    if (error) throw error;
    res.send("Note update");
  });
});

// BORRAR NOTA
app.delete("/notas/del/:id", (req, res) => {
  // GUARDAMOS LA ID QUE NOS LLEGA
  const id = req.params.id;
  // SECUENCIA SQL A EJECUTAR
  const sql = `DELETE FROM lista_notas WHERE id = ${id}`;
  // Conexion
  connection.query(sql, (error) => {
    if (error) throw error;
    res.send("Nota borrada");
  });
});

// AÑADIR NUEVA NOTA
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

app.get("/notas/:id", (req, res) => {
  const id = req.params.id;
  const sql = `SELECT * FROM lista_notas WHERE id = ${id}`;
  connection.query(sql, (error, results) => {
    if (error) throw error;
    if (results.length > 0) {
      res.json(results);
    } else {
      res.send("No encontrada");
    }
  });
});
