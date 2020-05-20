var connection = require("./connection.js")

var orm = {
    selectAll: function() {
        var queryString = `SELECT * FROM burgers;`;
        connection.query(queryString, [], function(err, result) {
            if (err) throw err;
            console.log(result);
        })
    },
    insertOne: function(burger_name, devoured) {
        var queryString = `INSERT INTO burgers (burger_name, devoured) VALUES (${burger_name}, ${devoured});`;
        connection.query(queryString, [], function(err, result) {
            if (err) throw err;
            console.log(result);
        })
    },
    updateOne: function(id, burger_name, devoured) {
        var queryString = `UPDATE burgers SET burger_name = ${burger_name}, devoured = ${devoured} WHERE id = ${id};`;
        connection.query(queryString, [], function(err, result) {
            if (err) throw err;
            console.log(result);
        })
    }
}

module.exports = orm;