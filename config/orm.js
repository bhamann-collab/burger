var connection = require("./connection")

var orm = {
    selectAll: function(tableInput, cb) {
        var queryString = `SELECT * FROM burgers;`;
        connection.query(queryString, function(err, result) {
            if (err) throw err;
            //console.log(result)
            cb(result);
        })
    },
    insertOne: function(data) {
        console.log(`These are values homies: ${data[0]}`)
        var queryString = `INSERT INTO burgers (burger_name, devoured) VALUES ('${data[0]}', ${data[1]});`;
        console.log(queryString)
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