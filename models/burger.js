var orm = require("../config/orm")

var burger = {
    selectAll: function(cb) {
        orm.selectAll("burger", res => {
            cb(res)
        })
    },

    insertOne: function(cb, values) {
        orm.insertOne(values, res => {
            cb(res)
        })
    },

    updateOne: function(cb, values) {
        orm.updateOne(values, res => {
            cb(res)
        })
    }
}


module.exports = burger;