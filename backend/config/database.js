import Sequelize from "sequelize";

const db = new Sequelize("auth_db", "root", "bismillah", {
  host: "localhost",
  dialect: "mysql",
});

export default db;
