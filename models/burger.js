var orm = require("../config/orm")

orm.selectAll();
orm.insertOne("Oyster Bay Burger", "TRUE");
orm.updateOne("3", "Bomb Fire Burger", "TRUE")

module.exports = burger;