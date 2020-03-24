const express = require("express");
const connectDB = require("./Database/Connection");
const bodyParser = require("body-parser");

const app = express();

// app.use(express.json({ extended: false }));
//or
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/api/userModel", require("./Api/User"));

connectDB();

const PORT = process.env.PORT || 5000;
app.listen(PORT);
console.log("hello world");
