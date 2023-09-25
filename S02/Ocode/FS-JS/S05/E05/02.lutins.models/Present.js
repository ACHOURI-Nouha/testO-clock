const sequelize = require("./in-memory-sequelize");
const { Model } = require("sequelize");

class Present extends Model {}

Present.init({
  /* Ta config ici */
}, {
  sequelize,
  tableName: "present"
});

module.exports = Present;
