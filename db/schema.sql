## Schema
CREATE DATABASE burgers_db_brock;
USE burgers_db_brock;

CREATE TABLE burgers
(
    id INT NOT NULL AUTO_INCREMENT,
    burger_name VARCHAR(255),
    devoured BOOLEAN,
    PRIMARY KEY(id)
);