require("dotenv").config();
const express = require("express");
const app = express();

app.use((req, res, next) => {
  req.initialTime = new Date();

  if (req.initialTime.getHours() > 12) {
    res.status(404).send("Not found");
  } else {
    next();
  }
});

app.get("/", function (req, res) {
  res.end(`Holaaa, Buenos días! `);
});
app.listen(process.env.PORT);
