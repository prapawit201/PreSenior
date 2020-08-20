const express = require("express");
const router = express.Router();

const ImageController = require("../controller/ImageController");

router.post("/upload", ImageController.create);
module.exports = router;
