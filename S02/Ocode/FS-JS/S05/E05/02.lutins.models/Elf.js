const sequelize = require("./in-memory-sequelize");
const { Model } = require("sequelize");

class Elf extends Model {}

Elf.init({
  /* Ta config ici */
}, {
  sequelize,
  tableName: "elf"
});

module.exports = Elf;
