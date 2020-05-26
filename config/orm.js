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
    updateOne: function(data) {
        var queryString = `UPDATE burgers SET burger_name = '${data[1]}', devoured = ${data[2]} WHERE id = ${data[0]};`;
        console.log(queryString)
        connection.query(queryString, [], function(err, result) {
            if (err) throw err;
            console.log(result);
        })
    }
}

module.exports = orm;