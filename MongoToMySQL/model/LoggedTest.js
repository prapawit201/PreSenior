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
    fName: {
      type: Sequelize.STRING,
    },
    lName: {
      type: Sequelize.STRING,
    },
  },
  {
    freezeTableName: true,
    timestamps: false,
  }
);
module.exports = LoggedTest;
