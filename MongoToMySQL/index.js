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

// const PORT = 5678;

MongoClient.connect(
  "mongodb+srv://seniorobd2:seniorobd2@seniorproject.f0o8e.mongodb.net/test?retryWrites=true&w=majority",
  (error, client) => {
    if (error) throw error;
    var db = client.db("test");

    app.get("/", (req, res) => {
      res.send("Hello World, Carlytic MongoToReact1");
    });

    app.get("/data", function (req, res, next) {
      db.collection("userTest")
        .find({})
        .toArray((err, result) => {
          if (err) throw err;
          res.status(200).send(result);
        });
    });

    app.post("/fetchData", async (req, res) => {
      try {
        // Fetch Rules
        const rules = await Incident.findOne({
          where: {
            incidentName: "RPM",
          },
        }).then((rule) => {
          return rule;
        });

        if (req.body.v >= rules.incidentValue) {
          const logged = await Logged.create({
            lat: req.body.kff1006,
            long: req.body.kff1005,
            // speed: req.body.kff1006,
            // RPM: req.body.kff1005,
            time: req.body.time,
          });
          // console.log(req.body);
          if (!logged) {
            res.send("error cannot create logged");
          }
        } else if (req.body.v != rules.incidentName) {
          console.log("Error cannot Created");
        }

        console.log(req.body);
        res.send("ok record Logged");
      } catch (e) {
        console.log(e);
        res.send("error");
      }
    });

    const PORT = process.env.PORT || 5556;
    app.listen(PORT, () => {
      console.log("server started : " + PORT);
    });
  }
);
