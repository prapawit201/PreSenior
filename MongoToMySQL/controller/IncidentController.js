var sequelize = require("../database/Db");
var jwtToken = require("jsonwebtoken");
var Incident = require("../model/Incident");

const controllers = {};
sequelize.sync();

controllers.create = async (req, res) => {
  // data
  // const { incidentId,incidentName, incidentValue,enterpriseId } = req.body;
  let token = req.headers["authorization"];
  let decode = jwtToken.verify(token, "CarlyTicAuthorizedKey");
  console.log(token);

  // create
  const data = await Incident.create({
    incidentName: req.body.incidentName,
    incidentValue: req.body.incidentValue,
    enterpriseId: decode.enterpriseId,
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
  const data = await Incident.findAll({
    where: {
      incidentName: "test1",
    },
  })
    .then(function (data) {
      return data;
    })
    .catch((error) => {
      return error;
    });

  res.json({ success: true, data: data });
};

module.exports = controllers;
