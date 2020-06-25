const express = require("express");
const router = express.Router();

const EmployeeController = require("../controllers/customerController");

router.get("/list", EmployeeController.list);
router.post("/create", EmployeeController.create);
module.exports = router;
