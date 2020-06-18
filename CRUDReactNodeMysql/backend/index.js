const express = require("express");
const app = express();
// importing routes
const employeeRouters = require("./routes/employeeRoute");

//Settings
app.set("port", process.env.PORT || 5000);

//Middlewares
app.use(express.json());

//Route
app.use("/employee", employeeRouters);

app.use("/test", (req, res) => {
  res.send("Test route");
});

app.use("/", (req, res) => {
  res.send("Hello World form NodeJS express.");
});

app.listen(app.get("port"), () => {
  console.log("Start server on port " + app.get("port"));
});
