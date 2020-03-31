const dbConfig = require("../config/db-config");

const Sequelize = require("sequelize");
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  dialectOptions: { decimalNumbers: true },
  //operatorsAliases: false,
  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle
  }
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.Country = require("./ModelCountry")(sequelize, Sequelize);
db.User = require("./UserModel")(sequelize, Sequelize);
db.Transaction = require("./ModelTransaction")(sequelize, Sequelize);
db.TransactionDetail = require("./ModelTransactionDetail")(sequelize, Sequelize);
db.TransactionFile = require("./TransactionFileModel")(sequelize, Sequelize);
db.TransactionStatus = require("./TransactionStatusModel")(sequelize, Sequelize);

module.exports = db;