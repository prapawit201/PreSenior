const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const app = express();
const port = process.env.PORT || 5000;
const db = require("./database/db");

app.use(bodyParser.json());
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));

const Users = require("./routes/Users");

app.use("/users", Users);

db.sync({
  force: true,
}).then(() => {
  app.listen(port, () => {
    console.log("Carlytic Provider started at http://localhost:" + port);
  });
});
