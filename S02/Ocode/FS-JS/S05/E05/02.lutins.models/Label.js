const sequelize = require("./in-memory-sequelize");
const { Model } = require("sequelize");

class Label extends Model {}

Label.init({
  /* Ton code ici */
}, {
  sequelize,
  tableName: "label"
});

module.exports = Label;
