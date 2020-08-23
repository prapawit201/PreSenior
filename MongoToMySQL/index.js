const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
var MongoClient = require("mongodb").MongoClient;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const PORT = 5000;

MongoClient.connect(
  "mongodb+srv://seniorobd2:seniorobd2@seniorproject-f0o8e.mongodb.net/test?retryWrites=true&w=majority",
  (error, client) => {
    if (error) throw error;
    var db = client.db("test");

    app.get("/", (req, res) => {
      res.send("Hello World, Carlytic Test");
    });

    app.get("/data", function (req, res, next) {
      console.log("object");
      console.log(req.body);

      db.collection("dataIOT2")
        .find()
        .toArray((err, result) => {
          if (err) return res.status(500).send(err.toString());

          res.status(200).send(result);
        });
    });

    app.listen(PORT, (req, res) => {
      console.log("Test PORT : " + PORT);
    });
  }
);
