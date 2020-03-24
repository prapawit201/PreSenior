const express = require("express");
const app = express();
const homeRouter = require("./routes/home");
const testRouter = require("./routes/test");

const PORT = process.env.PORT || 3000;
app.use("/", homeRouter);
app.use("/test", testRouter);
app.listen(PORT);
console.log("hello world");
