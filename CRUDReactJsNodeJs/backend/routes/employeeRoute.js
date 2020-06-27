const express = require("express");
const router = express.Router();

const EmployeeController = require("../controllers/customerController");

router.get("/list", EmployeeController.list);
router.post("/create", EmployeeController.create);
router.get("/get/:accountId", EmployeeController.get);
module.exports = router;
