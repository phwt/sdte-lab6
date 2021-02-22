const express = require("express");
const app = express();

app.get("/hi", (req, res) => {
  res.status(404).send();
});

module.exports = app;
