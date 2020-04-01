const express = require("express");
const app = express();

const PORT = process.env.PORT || 5000;
app.listen(PORT);
//test
console.log("Connect to port : " + PORT);
