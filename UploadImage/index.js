const express = require("express");
const multer = require("multer");
const app = express();
const url = require("url");
const path = require("path");
const ImageRoute = require("./routes/ImageRoute");
const cors = require("cors");
const sharp = require("sharp");

const db = require("./database/Db");
app.use(cors());
app.use(express.static(path.join(__dirname, "./uploads")));

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
  console.log(req.get("host"));

  res.send("Hello Upload");
});

app.post("/upload", upload.single("myImage"), ImageRoute, (req, res) => {
  let path = url;
});
app.use(ImageRoute);
const PORT = process.env.PORT || 8001;
db.sync({
  force: false,
})
  .then(() => {
    app.listen(PORT, () => {
      console.log("Carlytic Provider started at http://localhost:" + PORT);
    });
  })
  .catch(() => {
    app.listen(PORT, () => {
      console.log("Carlytic Production started at http://localhost:" + PORT);
    });
  });
