const Sequelize = require("sequelize");
const db = {};
const sequelize = new Sequelize("mydb", "seniorproject", "seniorproject", {
  host: "db-instance-seniorproject.ccb39twbmft8.us-east-2.rds.amazonaws.com",
  dialect: "mysql",
  operatorsAliases: false,

  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idel: 10000,
  },
});

db.sequelize = sequelize;
db.Sequelize = sequelize;

module.exports = db;
