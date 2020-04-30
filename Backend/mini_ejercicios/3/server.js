const names = require("./names.json");
const express = require("express");
const app = express();
const { sample } = require("lodash");

app.get("/names", (req, res) => {
  const gender = req.query.gender;
  let hombres = [];
  let mujeres = [];

  if (gender === "M") {
    for (const name of names) {
      if (name.gender === "M") {
        hombres.push(name);
      }
    }
    res.send(hombres);
  } else if (gender === "F") {
    for (const name of names) {
      if (name.gender === "F") {
        mujeres.push(name);
      }
    }
    res.send(mujeres);
  }

  res.send(names);
});

app.get("/random", (req, res) => {
  const randomName = sample(names);

  res.send(randomName);
});

app.use((req, res) => {
  res.status(404).send("Page not found");
});

app.listen(3000);
