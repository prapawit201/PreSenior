const Sequelize = require("sequelize");
const db = require("../database/db");

module.exports = db.sequelize.define(
  "Account",
  {
    accountId: {
      type: Sequelize.STRING,
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
    timestamps: false,
  }
);
