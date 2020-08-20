const Sequelize = require("sequelize");
const db = require("../database/Db");

const Incident = db.define(
  "Image",
  {
    imageId: {
      type: Sequelize.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    imageName: {
      type: Sequelize.STRING,
    },
  },
  {
    freezeTableName: true,
    timestamps: false,
  }
);
module.exports = Incident;
