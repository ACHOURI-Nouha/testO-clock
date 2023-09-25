const { Sequelize } = require("sequelize");

const sequelize = new Sequelize({
  dialect: "sqlite",
  storage: ":memory:",
  define: {
    createdAt: false,
    updatedAt: false
  },
  logging: false,
});

module.exports = sequelize;
