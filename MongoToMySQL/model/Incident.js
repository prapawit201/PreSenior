const Sequelize = require("sequelize");
const db = require("../database/Db");

const Incident = db.define(
  "Incident",
  {
    incidentId: {
      type: Sequelize.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    incidentName: {
      type: Sequelize.STRING,
    },
    incidentValue: {
      type: Sequelize.STRING,
    },
    enterpriseId: {
      type: Sequelize.STRING,
    },
  },
  {
    freezeTableName: true,
    timestamps: false,
  }
);
module.exports = Incident;
