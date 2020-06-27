var Employee = require("../models/account");
var sequelize = require("../models/mysql");

const controllers = {};
sequelize.sync();

controllers.update = async (req, res) => {
  // parameter get id
  const { accountId } = req.params;
  // parameter POST
  const { fName, lName, username, position } = req.body;
  // Update data
  const data = await Employee.update(
    {
      fName: fName,
      lName: lName,
      username: username,
      position: position,
    },
    {
      where: { accountId: accountId },
    }
  )
    .then(function (data) {
      return data;
    })
    .catch((error) => {
      return error;
    });
  res.json({ success: true, data: data, message: "Updated successful" });
};

controllers.get = async (req, res) => {
  const { accountId } = req.params;
  const data = await Employee.findAll({
    where: { accountId: accountId },
  })
    .then(function (data) {
      return data;
    })
    .catch((error) => {
      return error;
    });
  res.json({ success: true, data: data });
};

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
