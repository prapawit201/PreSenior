const express = require("express");
const router = express.Router();

const EmployeeController = require("../controllers/customerController");

router.get("/list", EmployeeController.list);

module.exports = router;
