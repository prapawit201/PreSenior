var sequelize = require("../database/Db");
var jwtToken = require("jsonwebtoken");
var Logged = require("../model/LoggedTest");

const controllers = {};
sequelize.sync();

controllers.create = async (req, res) => {
  const data = await Logged.create({
    fName: "Bank",
    lName: "Bank",
  })
    .then(function (data) {
      return data;
    })
    .catch((error) => {
      console.log("Error " + error);
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
  const data = await Image.findAll().then(function (data) {
    return data;
  });
  res.json({ success: true, data: data });
};
module.exports = controllers;
