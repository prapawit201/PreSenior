const Sequelize = require("sequelize");
const db = require("../database/Db");

const LoggedTest = db.define(
  "LoggedTest",
  {
    LoggedId: {
      type: Sequelize.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    lat: {
      type: Sequelize.STRING,
    },
    long: {
      type: Sequelize.STRING,
    },
    speed: {
      type: Sequelize.STRING,
    },
    RPM: {
      type: Sequelize.STRING,
    },
    time: {
      type: Sequelize.STRING,
    },
  },
  {
    freezeTableName: true,
    timestamps: false,
  }
);
module.exports = LoggedTest;
