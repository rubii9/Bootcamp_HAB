const names = require("./names.json");
const express = require("express");
const app = express();

app.get("/names", (req, res) => {
  res.send(names);
});

app.get("/random ", (req, res) => {
  function randomIntFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
  const index = randomIntFromInterval(0, names.length);
  res.send(names[index]);
});

app.get("/names?gender=M ", (req, res) => {
  const hombres = [];
  for (const name of names) {
    if (name.gender === "M") {
      hombres.push(name);
    }
  }

  res.send(hombres);
});

app.get("/names?gender=F ", (req, res) => {
  const mujeres = [];
  for (const name of names) {
    if (name.gender === "F") {
      hombres.push(name);
    }
  }

  res.send(mujeres);
});

app.use((req, res) => {
  res.status(404).send("Page not found");
});

app.listen(3000);
