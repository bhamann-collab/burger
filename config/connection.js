const mysql = require("mysql");

var connection = mysql.createConnection({
    host: "musicdb-g2.cykqhanvgs0f.ap-southeast-2.rds.amazonaws.com",
    port: 3306,
    user: "admin",
    password: "En9VAkHhCBk4Ii3CBJ4L",
    database: "burgers_db_brock"
  });
  
  connection.connect(function(err) {
    if (err) {
      console.error("error connecting: " + err.stack);
      return;
    }
    console.log("connected as id " + connection.threadId);
  });

  module.exports = connection;
  