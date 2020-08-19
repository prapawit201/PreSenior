const express = require("express");
const port = 5000;
const app = express();

app.get("/", (req, res) => {
  res.send("Hello Carlytics");
});

app.listen(port, () => {
  console.log("Hello World");
});
