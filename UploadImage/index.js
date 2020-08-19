const express = require("express");
const multer = require("multer");
const app = express();
const url = require("url");
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + ".png");
  },
});
const upload = multer({ storage: storage });
app.get("/", (req, res) => {
  res.send("Hello Upload");
});
app.post("/upload", upload.single("file"), (req, res) => {
  let path = url;
  console.log(res);
  console.log(req.file.filename);
  res.send(req.file);
});
app.listen(8001, () => {
  console.log("service running at PORT: 8001");
});
