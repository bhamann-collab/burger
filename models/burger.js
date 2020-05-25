var orm = require("../config/orm")

var burger = {
    selectAll: function(cb) {
        orm.selectAll("burger", res => {
            cb(res)
        })
    }

    //To be completed!
    // insertOne: function(cols, )
    // orm.insertOne("Oyster Bay Burger", "TRUE");
    // orm.updateOne("3", "Bomb Fire Burger", "TRUE")
}


module.exports = burger;