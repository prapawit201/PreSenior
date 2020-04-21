const Sequelize = require("sequelize");

const sequelize = new Sequelize("mydb", "seniorproject", "seniorproject", {
  host: "db-instance-seniorproject.ccb39twbmft8.us-east-2.rds.amazonaws.com",
  port: 3306,
  dialect: "mysql",
});

module.exports = sequelize;
