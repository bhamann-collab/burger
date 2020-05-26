var connection = require("./connection")

var orm = {
    //Selecting all of the burgers
    selectAll: function(tableInput, cb) {
        var queryString = `SELECT * FROM burgers;`;
        connection.query(queryString, function(err, result) {
            if (err) throw err;
            cb(result);
        })
    },
    //Creating a new Burger
    insertOne: function(data) {
        var queryString = `INSERT INTO burgers (burger_name, devoured) VALUES ('${data[0]}', ${data[1]});`;
        connection.query(queryString, [], function(err, result) {
            if (err) throw err;
        })
    },
    //Changing a burger
    updateOne: function(data) {
        var queryString = `UPDATE burgers SET burger_name = '${data[1]}', devoured = ${data[2]} WHERE id = ${data[0]};`;
        connection.query(queryString, [], function(err, result) {
            if (err) throw err;
        })
    }
}

module.exports = orm;