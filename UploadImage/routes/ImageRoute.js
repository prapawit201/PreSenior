const express = require("express");
const router = express.Router();
//
const ImageController = require("../controller/ImageController");

router.post("/upload", ImageController.create);
router.get("/list", ImageController.list);

module.exports = router;
