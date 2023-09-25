const sequelize = require("./in-memory-sequelize");
const { Model } = require("sequelize");

class Order extends Model {}

Order.init({
  /* Ta config ici */
}, {
  sequelize,
  tableName: "order"
});

module.exports = Order;
