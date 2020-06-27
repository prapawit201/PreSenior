const express = require("express");
const router = express.Router();

const EmployeeController = require("../controllers/customerController");

router.get("/list", EmployeeController.list);
router.post("/create", EmployeeController.create);
router.get("/get/:accountId", EmployeeController.get);
router.post("/update/:accountId", EmployeeController.update);
module.exports = router;
