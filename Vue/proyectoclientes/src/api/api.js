// IMPORTANDO LO QUE NECESITO PARA LA CONEXIÓN/API: express, cors, bodyparser, mysql
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const mysql = require("mysql");

//JSONWEBTOKEN DEPENDENCIAS
const jwt = require("jsonwebtoken");
const config = require("./config");

// DECLARO LA "APP"
const app = express();

// APP USES
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.set("llave", config.llave);

// DATOS DE CONEXIÓN
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "HACKRUBII9",
  database: "clientes",
});

// CONEXIÓN
connection.connect((error) => {
  if (error) throw error; // SI HAY ERROR...
  console.log("DATABASE UP🚀"); // SI NO HAY ERROR.
});

const PORT = 3050;

app.listen(PORT, () => console.log("API UP🚀"));

// LLAMADA DE PRUEBA
app.get("/", (req, res) => {
  res.send("hola");
});

// FUNCION PARA RECUPERAR TODOS LOS CLIENTES DE LA BBDD
app.get("/clientes", (req, res) => {
  // SECUENCIA SQL
  const sql = "SELECT * FROM lista_clientes";
  // CONEXION
  connection.query(sql, (error, results) => {
    // SI SALE MAL
    if (error) throw error;
    // SI HAY RESULTADOS
    if (results.length > 0) {
      res.json(results);
    }
    // SI NO HAY NADA
    else {
      res.sendStatus("No hay clientes");
    }
  });
});
// FUNCION PARA CREAR CLIENTES
app.post("/add", (req, res) => {
  // SECUENCIA SQL
  const sql = "INSERT INTO lista_clientes SET ?";
  const newClient = {
    nombre: req.body.nombre,
    apellido: req.body.apellido,
    ciudad: req.body.ciudad,
    empresa: req.body.empresa,
  };
  // CONEXION
  connection.query(sql, newClient, (error) => {
    // SI SALE MAL
    if (error) throw error;
    res.send("Cliente creado");
  });
});

// FUNCION PARA BORRAR CLIENTES
app.delete("/clientes/del/:id", (req, res) => {
  const id = req.params.id;
  // SECUENCIA SQL
  const sql = `DELETE FROM lista_clientes WHERE id = ${id}`;

  // CONEXION
  connection.query(sql, (error) => {
    // SI SALE MAL
    if (error) throw error;
    res.send("Cliente borrado");
  });
});

// MÉTODO LOGIN QUE CREA EL TOKEN
app.post("/auth", (req, res) => {
  //DATOS QUE LLEGAN; USER Y PASS
  const usuario = req.body.usuario;
  const password = req.body.password;

  // EL valor de usuario deberia ser un emeail o un nickname, es decir algo único

  //SECUENCIA SQL
  const sql = `SELECT * FROM usuarios WHERE usuario="${usuario}" AND password="${password}"`;

  //CONEXION A LA BBDD
  connection.query(sql, (error, results) => {
    let admin = null;
    if (error) throw error;
    if (results.length > 0) {
      const payload = {
        check: true,
      };
      if (results[0].isAdmin === 1) {
        admin = true;
      } else {
        admin = false;
      }
      const token = jwt.sign(payload, app.get("llave"), {
        expiresIn: "1 day",
      });
      res.json({
        mensaje: "Te has autenticado correctamente",
        token: token,
        isAdmin: admin,
      });
    } else {
      console.log("Datos incorrectos");
    }
  });
});
