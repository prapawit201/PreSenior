const Sequelize = require("sequelize");
const db = require("../database/db");

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
      type: Sequelize.STRING,
    },
    // name: {
    //   type: Sequelize.STRING,
    //   primaryKey: true,
    // },
    // address: {
    //   type: Sequelize.STRING,
    // },
  },
  {
    freezeTableName: true,
  }
);
module.exports = Account;
