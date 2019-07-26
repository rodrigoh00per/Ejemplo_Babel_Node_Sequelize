import Sequelize from "sequelize";

export const sequelize = new Sequelize("prueba", "rodrigoh00per", "123456", {
  host: "localhost",
  dialect: "postgres",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  },
  logging: false
});
