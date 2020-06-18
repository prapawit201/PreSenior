const express = require("express");
const router = express.Router();
//importing controllers
const employeeController = require("../controllers/customerController");
router.get("/test", employeeController.test);

router.get("/waka", (req, res) => {
  res.json({ status: "Employeed Saved" });
});

module.exports = router;
