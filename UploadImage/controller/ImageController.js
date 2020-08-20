var sequelize = require("../database/Db");
var jwtToken = require("jsonwebtoken");
var Image = require("../model/Image");

const controllers = {};
sequelize.sync();

controllers.create = async (req, res) => {
  const data = await Image.create({
    imageName: req.file.filename,
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

module.exports = controllers;
