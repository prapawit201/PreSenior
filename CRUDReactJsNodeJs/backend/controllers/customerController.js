var Employee = require("../models/account");
var sequelize = require("../models/mysql");

const controllers = {};
sequelize.sync();

controllers.create = async (req, res) => {
  // data
  const { fName, lName, username, password, position, enterpriseId } = req.body;
  // create
  const data = await Employee.create({
    fName: fName,
    lName: lName,
    username: username,
    password: password,
    position: position,
    enterpriseId: enterpriseId,
  })
    .then(function (data) {
      return data;
    })
    .catch((error) => {
      console.log("Errorazo " + error);
      return error;
    });
  // return res
  res.status(200).json({
    success: true,
    message: "Create Success",
    data: data,
  });
};

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
