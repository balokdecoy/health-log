DROP DATABASE IF EXISTS healthLog;

CREATE DATABASE healthLog;
USE healthLog;

CREATE TABLE log (
    id int NOT NULL AUTO_INCREMENT,
    name varchar(100) NOT NULL,
    PRIMARY KEY (id)
)