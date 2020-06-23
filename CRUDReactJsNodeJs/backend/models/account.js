const Sequelize = require("sequelize");
const db = require("./mysql");

const Account = db.define(
  "Account",
  {
    accountId: {
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
    username: {
      type: Sequelize.STRING,
    },
    password: {
      type: Sequelize.STRING,
    },
    position: {
      type: Sequelize.STRING,
    },
    enterpriseId: {
      type: Sequelize.INTEGER,
    },
  },
  {
    freezeTableName: true,
  }
);
module.exports = Account;
