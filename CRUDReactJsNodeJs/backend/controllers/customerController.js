var Employee = require("../models/account");
var sequelize = require("../models/mysql");

const controllers = {};
sequelize.sync();

Employee.create({
  fName: "test1",
  lName: "test1",
  username: " test1",
  password: "test1",
  position: "Staff",
  enterpriseId: "234",
});

controllers.list = async (req, res) => {
  const data = await Employee.findAll()
    .then(function (data) {
      return data;
    })
    .catch((error) => {
      return error;
    });

  res.json({ success: true, data: data });
};

controllers.testdata = async (req, res) => {
  const response = await sequelize
    .sync()
    .then(function () {
      const data = Employee.findAll();
      return data;
    })
    .catch((err) => {
      return err;
    });
  res.json(response);
};

module.exports = controllers;
