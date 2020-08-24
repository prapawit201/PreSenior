const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
let MongoClient = require("mongodb").MongoClient;
let sequelize = require("./database/Db");
const MySQL = require("./routes/MySQL");
let Incident = require("./model/Incident");
let Logged = require("./model/LoggedTest");
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
      db.collection("userTest")
        .find({})
        .toArray((err, result) => {
          if (err) throw err;
          // console.log(req.body);
          // console.log(result[1].lName);
          // console.log(req.body);
          res.status(200).send(result);
        });
    });

    app.post("/fetchData", async (req, res) => {
      try {
        // Fetch Rules
        const rules = await Incident.findOne({
          where: {
            incidentName: "test1",
          },
        });

        // console.log("rules = ", rules);

        console.log(req.body.fName);

        // console.log("test : " + req.body.fName);
        // Check eml or speed === rules ?
        if (req.body.fName == rules.incidentName) {
          const logged = await Logged.create({
            fName: req.body.fName,
            lName: req.body.lName,
          });
          if (!logged) {
            res.send("error cannot create logged");
          }
        }
        // console.log(req.body);
        res.send("ok");
      } catch (e) {
        res.send("error");
      }
    });

    app.listen(PORT, (req, res) => {
      console.log("Test PORT : " + PORT);
    });
  }
);
