const knex = require("knex");
const dbConfig = require("./knexfile")[process.env.DB_ENV || "development"];
if (dbConfig.connection.filename) {
  if (process.env.DB_ENV === "testing") {
    dbConfig.connection.filename = "./data/test.sqlite3";
  } else {
    dbConfig.connection.filename = "./data/dev.sqlite3";
  }
}
const db = knex(dbConfig);

module.exports = db;
